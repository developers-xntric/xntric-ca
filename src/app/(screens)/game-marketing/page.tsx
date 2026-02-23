import BigIdeas from "@/components/common/big-ideas";
import GameHero from "@/components/game-marketing/game-hero";
import GamingSection2 from "@/components/game-marketing/game-section2";
import GamingCulture from "@/components/game-marketing/gaming-culture";
import GreenHeadlines from "@/components/game-marketing/green-headlines";
import TunnelEffect from "@/components/game-marketing/tunnel-effect";
import SolutionCarousel from "@/components/common/solution-carousel";
import NewGreen from "@/components/service-inner/new-green";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Marketing Services in Canada | Video Game Marketing Agency",
  description: "Xntric is a leading video game marketing agency that delivers influencer strategy, community growth, and performance-driven results, based on its past successes.",
};
const GameMarketing = () => {
  return (
    <div className="">
      <h1 className="hidden">Game Marketing Services in Canada</h1>
      <GameHero />
      <GamingSection2 />
      <TunnelEffect />
      <GamingCulture />
      <SolutionCarousel />
      <NewGreen isPopupOpen={true} buttonText="BOOK A FREE CONSULTATION" text="Connect with Gen Z & Gen Alpha Book Your Game Marketing Session!" />
      <GreenHeadlines />
      <BigIdeas isContact={true} />
    </div>
  );
};

export default GameMarketing;
