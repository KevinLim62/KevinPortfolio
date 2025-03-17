"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AboutMe from "./AboutMe";
import TechStacks from "./TechStacks";
import WorkExperience from "./WorkExperience";

const About = () => {
  return (
    <section id="about" className="snap-start">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="w-full bg-grid-white/[0.2] relative flex items-center justify-center mt-[50px]">
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white transition-transform [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] lg:[mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-20 lg:gap-[100px] z-10">
                <TechStacks />
                <AboutMe />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <WorkExperience />
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </section>
  );
};

export default About;
