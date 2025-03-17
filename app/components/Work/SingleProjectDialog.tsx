"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface SingleProjectDialogProps {
  id: string;
  title: string;
  description: string;
  link: string;
  imageSrc: string[];
  logoSrc: string;
  tags: string[];
  remarks: string;
}

const SingleProjectDialog: React.FC<SingleProjectDialogProps> = ({
  id,
  title,
  description,
  link,
  imageSrc,
  logoSrc,
  tags,
  remarks,
}) => {
  const [imageDimensions, setImageDimensions] = useState<
    Record<number, "portrait" | "landscape">
  >({});

  const handleImageLoad = (index: number, width: number, height: number) => {
    setImageDimensions((prev) => ({
      ...prev,
      [index]: width > height ? "landscape" : "portrait",
    }));
  };

  return (
    <DialogContent className="bg-primary text-foreground min-w-[768px] h-[90vh] shadow-xl">
      <DialogHeader className="h-[75vh] overflow-y-auto">
        <DialogTitle className="flex flex-row items-center space-x-3 text-md lg:text-xl 2xl:text-3xl font-bold leading-none tracking-tight">
          <div>{title}</div>
          {logoSrc && (
            <div className="h-[50px] w-[50px] rounded-md overflow-hidden relative">
              <Image src={logoSrc} alt={title} fill quality={100} />
            </div>
          )}
        </DialogTitle>
        <DialogDescription className="text-sm lg:text-md 2xl:text-lg text-foreground pt-5">
          <div className="flex flex-col items-start justify-start space-y-4">
            <div>{description}</div>
            <div className="grid grid-cols-5 gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="p-1 rounded-full text-xs text-center bg-slate-500 cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
            {imageSrc.map((image, index) => (
              <div
                className={`flex justify-center items-center overflow-hidden 
            ${
              imageDimensions[index] === "portrait"
                ? "w-[300px] h-[500px]"
                : "w-full h-[300px]"
            }`}
                key={index}
              >
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={300}
                  className={`rounded-lg object-contain 
              ${
                imageDimensions[index] === "portrait"
                  ? "w-auto h-full max-w-[300px]"
                  : "w-full h-auto"
              }`}
                  quality={100}
                  onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    handleImageLoad(index, naturalWidth, naturalHeight)
                  }
                />
              </div>
            ))}
            {remarks && (
              <p className="text-xs font-light mt-2 text-gray-500">{`Disclaimer: ${remarks}`}</p>
            )}
          </div>
        </DialogDescription>
      </DialogHeader>
      {/* Live URL Button */}
      {link && (
        <div className="flex justify-center mt-6">
          <Button asChild>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
            >
              Visit Live Site
            </Link>
          </Button>
        </div>
      )}
    </DialogContent>
  );
};

export default SingleProjectDialog;
