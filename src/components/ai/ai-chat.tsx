"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, X, CircleUserRound } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Slot {
  id?: string;
  label?: string;
  start?: string;
  end?: string;
  start_time?: string;
  end_time?: string;
  selected?: boolean;
}
interface ChatPayload {
  question: string;
  conversation_id?: string;
  selected_slot?: Record<string, unknown>;
  selected_slots?: Slot[];
  email?: string;
}
interface AIChatbotProps {
  apiEndpoint?: string;
}

export default function AIChatbot({
  apiEndpoint = "https://api-chat.xntric.me/chat",
}: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showMessages, setShowMessages] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [slots, setSlots] = useState<Slot[]>([]);
  const [showEmailField, setShowEmailField] = useState(false);
  const [showEmailInputOnly, setShowEmailInputOnly] = useState(false);
  const [email, setEmail] = useState("");

  const defaultPrompts = [
    "What AI services do you offer?",
    "Guide me on automating my workflows",
    "I want to book a consultation session",
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      chatContainerRef.current &&
      !chatContainerRef.current.contains(event.target as Node)
    ) {
      setShowMessages(false);
    }
  };

  useEffect(() => {
    if (showMessages) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMessages]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  };

  /** MAIN MESSAGE SENDER **/
  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowMessages(true);
    scrollToBottom();

    try {
      const conversationId = localStorage.getItem("conversation_id");


      let payload: ChatPayload = { question: messageContent };

      if (conversationId && messageContent.toLowerCase() !== "hi") {
        payload = {
          question: messageContent,
          conversation_id: conversationId,
          selected_slot: {},
          email: email || "",
        };
      }


      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to get response from AI");

      const data = await response.json();

      if (data.conversation_id) {
        localStorage.setItem("conversation_id", data.conversation_id);
      }

      if (Array.isArray(data.slots) && data.slots.length > 0) {
        const slotMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            (data.response || "I found some available slots you can choose:") +
            "\n\nPlease select the suitable one(s) and confirm.",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, slotMessage]);
        setShowEmailField(true);
        setSlots(data.slots.map((s: Slot) => ({ ...s, selected: false })));
      } else {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            data.response ||
            data.message ||
            "Sorry, I could not process your request.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setShowEmailField(false);
        setSlots([]);
      }

      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Sorry, I encountered an error while processing your request. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  /** STEP 1 — SLOT CONFIRMATION **/
  const handleSlotConfirmation = () => {
    const selectedSlots = slots.filter((slot) => slot.selected);
    if (selectedSlots.length === 0) {
      alert("Please select at least one slot.");
      return;
    }
    setShowEmailInputOnly(true);
  };

  /** STEP 2 — EMAIL CONFIRMATION **/
  const handleEmailConfirmation = async () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    setIsLoading(true);

    try {
      const conversationId = localStorage.getItem("conversation_id");
      const selectedSlots = slots.filter((slot) => slot.selected);

      const payload: ChatPayload = {
        question: "Confirm Booking",
        selected_slots: selectedSlots,
        email,
        conversation_id: conversationId || "",
      };

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to confirm booking");

      const data = await response.json();

      const confirmationMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content:
          data.response ||
          "✅ Your booking has been confirmed successfully. Thank you!",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, confirmationMessage]);
      setShowEmailField(false);
      setShowEmailInputOnly(false);
      setSlots([]);
      setEmail("");
      scrollToBottom();
    } catch (error) {
      console.error("Error confirming booking:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "⚠️ Something went wrong while confirming your booking. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleDefaultPromptClick = (prompt: string) => {
    sendMessage(prompt);
  };

  const handleInputClick = () => {
    setShowMessages(true);
  };

  return (
    <div
      ref={chatContainerRef}
      onClick={() => setShowMessages(true)}
      className={`max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-3xl mx-auto rounded-[24px] flex-col hide-scrollbar overflow-y-scroll justify-center bg-white/10 backdrop-blur-lg border-[1.5px] border-white/20 flex items-center overflow-hidden transition-all duration-300 ease-in-out ${showMessages
        ? "max-h-[500px] md:max-h-[500px] py-4"
        : "max-h-[280px] py-2"
        }`}
    >
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .chat-messages { 
          transition: all 0.3s ease-in-out; 
          max-height: 400px; 
          overflow-y: auto; 
        }
      `}</style>

      {/* Close Button */}
      <div className={`w-full px-6 mb-4 ${showMessages ? "block" : "hidden"}`}>
        <X
          onClick={(e) => {
            e.stopPropagation();
            setShowMessages(false);
          }}
          className="absolute top-4 right-4 cursor-pointer text-white hover:bg-[#585858] p-1 rounded-full"
        />
      </div>

      {/* Messages Section */}
      <div
        className={`w-full overflow-hidden hide-scrollbar space-y-4 p-4 chat-messages ${showMessages ? "block" : "hidden"
          }`}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col gap-3 ${message.role === "user" ? "items-end" : "items-start"
              }`}
          >
            {message.role === "assistant" && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="md:w-10 md:h-10 w-8 h-8 bg-white p-2 rounded-[10px] flex items-center justify-center">
                  <Image
                    src={"/favicon.jpeg"}
                    alt="Xntric AI"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-sm md:text-base text-[#00aa71] font-semibold tracking-widest">
                  Xntric AI
                </p>
              </div>
            )}

            {message.role === "user" && (
              <div className="flex items-center gap-2 md:gap-5 self-end">
                <div className="md:w-10 md:h-10 w-8 h-8 bg-white rounded-[10px] flex items-center justify-center">
                  <CircleUserRound className="md:w-6 md:h-6 w-5 h-5 text-[#00aa71]" />
                </div>
              </div>
            )}

            <div
              className={`max-w-[95%] text-sm md:text-base leading-relaxed whitespace-pre-wrap tracking-widest ${message.role === "user"
                ? "bg-[#242a2c] text-white rounded-b-[20px] rounded-tl-[20px] p-3 self-end"
                : "bg-[#222] text-white rounded-b-[20px] rounded-tr-[20px] p-4"
                }`}
            >
              <div className="prose prose-invert max-w-none text-white text-sm md:text-base leading-relaxed tracking-widest">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}

        {/* Loading dots */}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="md:w-10 md:h-10 w-8 h-8 bg-white p-2 rounded-[10px] flex items-center justify-center">
              <Image src={"/favicon.jpeg"} alt="Loading" width={100} height={100} />
            </div>
            <div className="bg-gray-800/50 text-white border border-gray-700/30 p-3 flex items-center justify-center rounded-[15px]">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Default prompts */}
        {messages.length === 0 && !isLoading && (
          <div className="w-full px-4 pb-4 space-y-2">
            <p className="text-center text-sm md:text-base text-gray-400 mb-2 md:mb-6 tracking-widest">
              I’m Xntric AI Assistant — your guide for AI insights, automation
              help, and booking meetings. Ask me anything or try one:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {defaultPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleDefaultPromptClick(prompt)}
                  className="bg-white/10 backdrop-blur-lg tracking-widest border border-white/20 text-white px-4 py-2 rounded-full text-[10px] md:text-sm hover:bg-white/20 transition"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Slot selection & email field */}
        {showEmailField && (
          <div className={`w-full px-4 py-2 space-y-3`}>
            {!showEmailInputOnly ? (
              <>
                <div className="bg-[#1e1e1e] p-3 rounded-lg border border-gray-700/30 text-gray-200 text-sm">
                  <p className="font-semibold text-[#00aa71] mb-2">
                    Select the required slots:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {slots.map((slot, index) => {
                      const start = slot.start || slot.start_time;
                      const end = slot.end || slot.end_time;
                      const readableLabel =
                        start && end
                          ? `${new Date(start).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })} - ${new Date(end).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}`
                          : slot.label || JSON.stringify(slot);

                      return (
                        <button
                          key={slot.id || index}
                          onClick={() => {
                            const updated = [...slots];
                            updated[index].selected = !updated[index].selected;
                            setSlots(updated);
                          }}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all border ${slot.selected
                            ? "bg-[#00aa71] text-white border-[#00aa71]"
                            : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700/50"
                            }`}
                        >
                          {readableLabel}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={handleSlotConfirmation}
                  disabled={isLoading}
                  className="bg-[#00aa71] text-white px-4 py-2 rounded-lg text-[11px] md:text-sm hover:bg-[#009560] transition"
                >
                  Confirm Slots
                </button>
              </>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-transparent border border-gray-600 text-white text-sm outline-none placeholder-gray-400"
                />

                <button
                  onClick={handleEmailConfirmation}
                  disabled={isLoading}
                  className="bg-[#00aa71] text-white px-4 py-2 rounded-lg text-[11px] md:text-sm hover:bg-[#009560] transition"
                >
                  Confirm Booking
                </button>
              </>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="relative w-full px-4" onClick={() => setShowMessages(true)}>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center backdrop-blur-sm border border-gray-700/50 rounded-full px-3 py-2 md:mt-0">
            <Image
              src="/ai/chatai-icon.png"
              alt="AI Logo"
              width={40}
              height={20}
              className="w-[30px] md:w-[40px] md:mr-2"
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onClick={handleInputClick}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-[3vw] md:text-base text-sm outline-none px-2 tracking-widest"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-white/10 backdrop-blur-lg border-[1.5px] border-white/40 text-white px-2 md:px-6 py-2 rounded-full font-medium transition-all duration-200 flex text-[3vw] md:text-base items-center gap-2 group tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center md:gap-2">
                <span>Generate</span>
                <ArrowRight className="w-3 h-3 md:w-3 md:h-3 group-hover:translate-x-1 transition-transform text-white" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
