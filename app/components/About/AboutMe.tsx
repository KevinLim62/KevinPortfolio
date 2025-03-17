"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
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
      className="overflow-y-scroll rounded-lg w-[80%] h-[700px] md:w-[400px] lg:w-[450px] 2xl:w-[550px]"
      ref={ref}
      variants={variants}
      initial={false}
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
    >
      <Card className="drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-md lg:text-xl 2xl:text-3xl font-bold">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <CardDescription className="text-sm lg:text-base 2xl:text-lg font-medium">
            I am a passionate Full Stack Developer with around two years of
            experience in full-stack development, specializing in building
            user-centric, high-performance web and mobile applications. My
            expertise lies in crafting seamless, intuitive interfaces while
            ensuring robust functionality and scalability.
          </CardDescription>
          <CardDescription className="text-sm lg:text-base 2xl:text-lg font-medium">
            At ZURA CHARGE SDN BHD, I played a key role in developing an EV
            charging station management system, integrating features such as
            detailed billing, invoice tracking, and a subscription model with
            advanced capabilities like RFID card management and customized
            pricing. Additionally, I led the development of an EV charging
            mobile app, incorporating Firebase Cloud Messaging for enhanced user
            engagement and implementing a seamless pre-auth payment system for
            the web app.
          </CardDescription>
          <CardDescription className="text-sm lg:text-base 2xl:text-lg font-medium">
            Previously, at Blockchain Solutions PTE LTD, I contributed to the
            development of a SaaS product for blockchain verification,
            optimizing page load speeds by 40% using React lazy loading and
            suspense. I also built a CRM dashboard that provided clients with
            actionable insights and developed a loyalty system that
            significantly boosted user engagement and subscriptions.
          </CardDescription>
          <CardDescription className="text-sm lg:text-base 2xl:text-lg font-medium">
            I have a strong command of React, React Native, Next.js, and
            Tailwind CSS, along with a solid backend foundation in Node.js,
            Express.js, and NestJS. My experience with Docker, AWS, and Git
            ensures efficient development workflows and smooth deployment
            processes. I thrive on building visually appealing and intuitive
            user interfaces that align with business goals and user needs. Clear
            communication, timely delivery, and high-quality code are my top
            priorities. I am always eager to learn, collaborate, and contribute
            to meaningful projects that push the boundaries of innovation.
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMe;
