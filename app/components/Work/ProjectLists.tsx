"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import SingleProjectDialog from "./SingleProjectDialog";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
};

const listItems = [
  {
    id: "3",
    title: "Zura Portal Dashboard",
    description:
      "Zura Portal Dashboard is a comprehensive EV charging station management system designed for merchants to efficiently oversee their charging networks. This platform provides real-time monitoring, billing, and revenue tracking, empowering businesses with essential insights into their operations.",
    imageSrc: [
      "/projects/ZuraDashboardApp1.png",
      "/projects/ZuraDashboardApp2.png",
    ],
    logoSrc: "/projects/ZuraLogo.jpeg",
    link: "https://portal.zuracharge.com",
    tags: ["Typescript", "Nextjs", "Tailwindcss", "ShadcnUI"],
    remarks: "",
  },
  {
    id: "4",
    title: "Zura Charge Apps",
    description:
      "Zura Charge Apps provide a seamless and user-friendly experience for EV owners to locate, manage, and pay for charging sessions effortlessly. Designed for both mobile and web platforms, these apps enhance convenience through real-time notifications and secure transactions.",
    imageSrc: ["/projects/ZuraApps1.jpeg", "/projects/ZuraApps2.jpeg"],
    logoSrc: "/projects/ZuraLogo.jpeg",
    link: "",
    tags: ["JavaScript", "React Native", "Firebase"],
    remarks: "",
  },
  {
    id: "1",
    title: "Kevin Portfolio",
    description:
      "My personal portfolio showcasing my expertise in full-stack development, highlighting my projects, skills, and experience in building high-performance web and mobile applications.",
    imageSrc: [
      "/projects/MyPortfolioApp1.png",
      "/projects/MyPortfolioApp2.png",
    ],
    logoSrc: "/projects/MyPortfolioLogo.png",
    link: "https://kevin62-portfolio.vercel.app",
    tags: ["Typescript", "Nextjs", "Tailwindcss", "ShadcnUI"],
    remarks: "",
  },
  {
    id: "2",
    title: "Caffinated App",
    description:
      "Personal project on developed a full-stack e-commerce coffee application, providing a seamless shopping experience for coffee lovers. The platform enables users to browse and purchase coffee products while offering a smooth checkout process.",
    imageSrc: [
      "/projects/CaffienatedApp1.png",
      "/projects/CaffienatedApp2.png",
    ],
    logoSrc: "/projects/CaffienatedLogo.png",
    link: "https://caffinated.vercel.app",
    tags: [
      "Typescript",
      "Nextjs",
      "Tailwindcss",
      "ShadcnUI",
      "Nodejs",
      "Nestjs",
      "PostgreSQL",
    ],
    remarks: "",
  },
  {
    id: "5",
    title: "Sketch Now",
    description:
      "Personal project on building a real-time collaborative sketching application that enables multiple users to draw and share ideas on a shared canvas. The app allows seamless interaction, making it ideal for brainstorming, design collaboration, and remote teamwork.",
    imageSrc: ["/projects/SketchNowApp.png"],
    logoSrc: "/projects/SketchNowLogo.png",
    link: "https://sketch-now-ui.vercel.app",
    tags: [
      "Typescript",
      "Nuxtjs",
      "Tailwindcss",
      "NuxtUI",
      "Go",
      "Chi",
      "Websocket",
    ],
    remarks: "",
  },
];

const ProjectLists = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageDimensions, setImageDimensions] = useState<
    Record<string, "portrait" | "landscape">
  >({});

  const handleImageLoad = (index: string, width: number, height: number) => {
    setImageDimensions((prev) => ({
      ...prev,
      [index]: width > height ? "landscape" : "portrait",
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const handleDialog = (id: string) => {
    if (window.innerWidth >= 1024) {
      const triggerElement = document.getElementById(`dialogTrigger${id}`);
      triggerElement && triggerElement.click();
    }
  };

  return (
    <>
      {/* Browser view: Bento grid  */}
      {windowWidth >= 1024 ? (
        <>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-5 grid grid-cols-3 grid-rows-2 justify-items-center lg:w-[920px] lg:h-[480px] 2xl:w-[1200px] 2xl:h-[650px] lg:gap-[20px] 2xl:gap-[30px]"
          >
            <Card className="flex flex-col bg-transparent border-0 justify-end w-full cursor-pointer group drop-shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl lg:text-4xl 2xl:text-6xl font-bold">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      delay: 0.5,
                      duration: 1,
                      ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                  >
                    Recent
                  </motion.h1>
                  <motion.h1
                    className="ml-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      delay: 0.8,
                      duration: 1,
                      ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                  >
                    Projects.
                  </motion.h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="h-12"></CardFooter>
            </Card>
            {listItems.map((el, index) => (
              <motion.div
                variants={children}
                key={el.id}
                className={`flex w-full h-full py-1 transition-transform duration-200`}
              >
                <Card
                  className="flex flex-col justify-end w-full cursor-pointer group drop-shadow-lg overflow-hidden"
                  onClick={() => handleDialog(el.id)}
                >
                  <CardHeader className="flex flex-col items-start space-y-2 text-foregound">
                    {el.logoSrc ? (
                      <div className="h-[50px] w-[50px] rounded-md overflow-hidden relative">
                        <Image
                          src={el.logoSrc}
                          alt={el.title}
                          fill
                          quality={100}
                        />
                      </div>
                    ) : (
                      <div className="h-[50px]"></div>
                    )}
                    <div className="transition-transform duration-200 lg:group-hover:translate-x-2 2xl:group-hover:translate-x-4">
                      <CardTitle className="text-lg lg:text-xl 2xl:text-3xl font-bold">
                        {el.title}
                      </CardTitle>
                      <CardDescription className="h-12 text-sm lg:text-base 2xl:text-md font-light text-ellipsis overflow-hidden">
                        {el.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>
                <Dialog>
                  <DialogTrigger id={`dialogTrigger${el.id}`}></DialogTrigger>
                  <SingleProjectDialog
                    id={el.id}
                    title={el.title}
                    description={el.description}
                    link={el.link}
                    imageSrc={el.imageSrc}
                    logoSrc={el.logoSrc}
                    tags={el.tags}
                    remarks={el.remarks}
                  />
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </>
      ) : (
        <>
          {/* Mobile view: Carousel card */}
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            className="text-center text-white text-2xl 2xl:text-4xl font-bold"
          >
            Recent Projects.
          </motion.h1>
          <Carousel className="w-[80%] sm:w-[500px]">
            <CarouselContent className="">
              {listItems.map((el, index) => (
                <CarouselItem key={index} className="">
                  <Card className="w-full h-[600px] overflow-y-scroll cursor-pointer group drop-shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl lg:text-2xl 2xl:text-4xl font-bold">
                        {el.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <CardDescription className="text-sm lg:text-base 2xl:text-md font-light">
                        {el.description}
                      </CardDescription>
                      <div className="grid grid-cols-4 gap-2">
                        {el.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="p-1 rounded-full text-xs text-center bg-slate-500 cursor-default"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      {el.imageSrc.map((image, imgIndex) => {
                        const uniqueImgId = `${index}-${imgIndex}`;
                        return (
                          <div
                            className={`flex justify-center items-center 
      ${
        imageDimensions[uniqueImgId] === "portrait"
          ? "w-[90vw] max-w-[300px] max-h-[80vh]"
          : "w-full h-[200px] md:h-[300px]"
      }`}
                            key={uniqueImgId}
                          >
                            <Image
                              src={image}
                              alt={el.title}
                              width={600}
                              height={300}
                              className={`rounded-lg 
        ${
          imageDimensions[index] === "portrait"
            ? "w-auto max-h-[80vh] object-contain"
            : "w-full h-auto object-cover"
        }`}
                              quality={100}
                              onLoadingComplete={({
                                naturalWidth,
                                naturalHeight,
                              }) =>
                                handleImageLoad(
                                  uniqueImgId,
                                  naturalWidth,
                                  naturalHeight
                                )
                              }
                            />
                          </div>
                        );
                      })}
                      {el.remarks && (
                        <p className="text-xs font-light">{`disclamer: ${el.remarks}`}</p>
                      )}
                    </CardContent>
                    <CardFooter className="flex flex-col items-center space-y-1">
                      {/* Live URL Button */}
                      {el.link && (
                        <div className="flex justify-center mt-6">
                          <Button asChild>
                            <Link
                              href={el.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
                            >
                              Visit Live Site
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      )}
    </>
  );
};

export default ProjectLists;
