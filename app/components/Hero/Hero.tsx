"use client";

import { WavyBackground } from "@/components/ui/Animation/WavyBackground";
import Intro from "./Intro";
import ProfilePic from "./ProfilePic";

const Hero = () => {
  return (
    <section id="home" className="snap-start">
      <WavyBackground className="w-full">
        <div className="flex flex-col h-screen lg:flex-row items-center justify-center gap-5 md:gap-20 lg:gap-0 mt-[50px] lg:mt-0 relative">
          <div className="w-full lg:w-[60%] z-10">
            <Intro />
          </div>
          <div className="w-full hidden md:block md:w-[60%] lg:w-[40%] z-10">
            <ProfilePic />
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Hero;
