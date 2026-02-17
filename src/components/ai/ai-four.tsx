import Image from "next/image";
const AIFourSection = () => {
  return (
    <section className="font-futuru pb-16">
      <div className="max-w-7xl w-[90%] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 lg:gap-6 mb-12">
          <p className="text-[#898999] text-[13.521px] lg:text-sm tracking-widest">[ OUR SOLUTIONS ]</p>
          <h3
            className="text-[30px] xl:text-5xl font-semibold leading-9 xl:leading-[50px] lg:max-w-[40%] relative bottom-3 tracking-wide"
            style={{
              fontFamily: "Futuru",
              background: "linear-gradient(264deg, #00AA71 0%, #FFF 66.57%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Building AI-Powered Workflow
          </h3>
          <p className="text-white/50 tracking-widest lg:tracking-widest text-[17px] md:text-lg max-w-md font-light leading-[20px] md:leading-[22px]">
            Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow without extra effort.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
          {/* Card 1: Workflow Automation */}
          <div className="md:col-span-2 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
            <Image
              className="w-full h-[160px] lg:h-60 object-cover"
              src="/ai/ai-four-1.png"
              alt="Workflow Automation"
              width='400'
              height="400" />
            <div className="p-6">
              <h4 className="text-white text-[22px] font-semibold mb-2 tracking-wider leading-7">Workflow Automation</h4>
              <p className="text-[#A9A9A9] text-[13px] 2xl:text-[16px] leading-[18px] lg:leading-6 tracking-widest max-w-[80%]">
                Let AI handle repetitive tasks, so your team can focus on high-impact work.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
            <Image className="w-full h-[160px] lg:h-60 object-cover" src="/ai/ai-four-2.png" alt="AI Chatbots" width='400'
              height="400" />
            <div className="p-6">
              <h4 className="text-white text-[22px] font-semibold mb-2 tracking-wider leading-7">AI Chatbots & Virtual Assistants</h4>
              <p className="text-[#A9A9A9] text-[13px] 2xl:text-[16px] leading-[18px] lg:leading-6 tracking-widest max-w-[80%]">
                Enhance customer experience with 24/7 AI driven support.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
            <Image className="w-full h-[160px] lg:h-60 object-cover" src="/ai/ai-four-3.png" alt="AI Marketing" width='400'
              height="400" />
            <div className="p-6">
              <h4 className="text-white text-[22px] font-semibold mb-2 tracking-wider leading-7">Personalized AI Marketing</h4>
              <p className="text-[#A9A9A9] text-[13px] 2xl:text-[16px] leading-[18px] lg:leading-6 tracking-widest max-w-[80%]">
                Send smarter messages at the right moment with AI.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
            <Image className="w-full h-[160px] lg:h-60 object-cover" src="/ai/ai-four-4.png" alt="CRM Automation" width='400'
              height="400" />
            <div className="p-6">
              <h4 className="text-white text-[22px] font-semibold mb-2 tracking-wider leading-7">CRM Automation</h4>
              <p className="text-[#A9A9A9] text-[13px] 2xl:text-[16px] leading-[18px] lg:leading-6 tracking-widest max-w-[80%]">
                Capture, qualify, and route leads, focusing only on the right prospects automatically.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
            <Image className="w-full h-[160px] lg:h-60 object-cover" src="/ai/ai-four-5.png" alt="Custom AI Integrations" width='400'
              height="400" />
            <div className="p-6">
              <h4 className="text-white text-[22px] font-semibold mb-2 tracking-wider leading-7">Custom AI Integrations</h4>
              <p className="text-[#A9A9A9] text-[13px] 2xl:text-[16px] leading-[18px] lg:leading-6 tracking-widest max-w-[80%]">
                Seamlessly integrate AI into your existing business systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFourSection;
