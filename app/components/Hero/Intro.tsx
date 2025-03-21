"use client";

import AnimatedText from "@/components/ui/Animation/AnimatedText";
import { Button } from "@/components/ui/Animation/MovingBorder";
import Typewriter from "@/components/ui/Animation/Typewriter";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="mx-auto w-[80%] md:w-[60%] lg:w-[450px] 2xl:w-[550px]"
      ref={ref}
      variants={variants}
      initial={false}
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
    >
      <Card className="backdrop-blur-sm bg-primary opacity-90 rounded-xl">
        <CardHeader className="pb-0">
          <CardTitle className="flex flex-col">
            <AnimatedText
              className="w-[250px] 2xl:w-[300px] text-xl lg:text-2xl 2xl:text-4xl font-bold"
              title="Hello, my name is Kevin Lim"
            />
            <Typewriter
              className="w-full text-xl lg:text-2xl 2xl:text-4xl font-bold"
              title="I am a Fullstack Developer"
            />
          </CardTitle>
          <div className="text-sm lg:text-md 2xl:text-lg font-light text-muted-foreground text-justify">
            specializing in building user-centric, high-performance web and
            mobile applications. With two years of experience, I have worked on
            innovative projects in EV charging solutions, blockchain
            verification, and SaaS platforms, enhancing user experience through
            intuitive design and seamless functionality.
          </div>
        </CardHeader>
        <CardContent className="mt-5">
          <div className="flex w-[150px] relative group z-10">
            <Link
              href="/resume/KevinLimCherYiong_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button
                borderRadius="2.5rem"
                containerClassName="bg-transparent text-foreground border-slate-800 border-2 group"
                borderClassName="group-hover:bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
              >
                <h1 className="group-hover:scale-[1.2] transition-transform">
                  Resume
                </h1>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Intro;
