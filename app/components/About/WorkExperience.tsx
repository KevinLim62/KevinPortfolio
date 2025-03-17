"use client";

import { Timeline, TimelineEntry } from "@/components/ui/Animation/Timeline";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const WorkExperienceData = [
  {
    timeline: "July 2024",
    type: "experience",
    company: "ZURA CHARGE SDN BHD",
    position: "Full Stack Developer",
    location: "Penang, Malaysia",
    period: "July 2024 - Present",
    logoUrl: "/works/zuraLogo.jpeg", // Replace with actual logo
    projects: [
      {
        title: "EV Portal Dashboard",
        points: [
          "Spearheaded the full-stack development of EV charging stations management system for merchants.",
          "Integrated detail billing and invoice system to help merchants track their revenue for the charging stations.",
          "Established subscription model to offer merchants with advanced features such as RFID cards, customised charging pricings etc.",
        ],
      },
      {
        title: "EV Charging Apps",
        points: [
          "Spearheaded the mobile development of EV charging apps for end users.",
          "Utilized firebase cloud messaging to provide push notifications of charging reminders for users.",
          "Unleashed web app version of EV charging apps for ease of charging flow with integrated pre-auth payment system.",
        ],
      },
    ],
  },
  {
    timeline: "Jun 2023",
    type: "experience",
    company: "BLOCKCHAIN SOLUTIONS PTE LTD",
    position: "Full Stack Developer",
    location: "Remote",
    period: "Jun 2023 - Jun 2024",
    logoUrl: "/works/bsgLogo.png", // Replace with actual logo
    projects: [
      {
        title: "Authenticity V erification Web App",
        points: [
          "Developed a SaaS product for blockchain verification, enhancing brand authenticity.",
          "Improved page loading speed by 40% through React lazy loading and suspense techniques.",
          "Implemented a loyalty system that significantly increased client subscriptions and user engagement.",
        ],
      },
      {
        title: "Customer Relationship Management Dashboard",
        points: [
          "Built a comprehensive CRM dashboard for brand clients, providing insightful analytics on sales performance and user demographics.",
          "Developed features with full CRUD functionality for product management, batch tracking, provenance, report generation, and admin oversight.",
        ],
      },
      {
        title: "Artwork Gallery",
        points: [
          "Created reusable functions, including a GIF file generator for NFTs, an artwork image comparison view generator, and a bulk upload script for artworks.",
        ],
      },
    ],
  },
  {
    timeline: "July 2021",
    type: "experience",
    company: "GREATECH INTEGRATION (M) SDN BHD ",
    position: "Software Engineer",
    location: "Penang, Malaysia",
    period: "Jul 2021 - Jun 2023",
    logoUrl: "/works/gtLogo.jpeg", // Replace with actual logo
    projects: [
      {
        title: "Responsibilities",
        points: [
          "Specialized in PLC programming (Siemens & Allen Bradley), motion control (Siemens, Festo & PBA), and robot programming (Fanuc & Epson).",
          "Led a team of 4 in the RnD project Vial Inspection Module, improved machine cycle time and part per minute by 20%.",
        ],
      },
    ],
  },
];

const WorkExperience = () => {
  const timelineData: TimelineEntry[] = WorkExperienceData.map((data) => ({
    title: data.timeline,
    content: WorkExperienceCard({
      company: data.company,
      position: data.position,
      location: data.location,
      period: data.period,
      projects: data.projects,
      logoUrl: data.logoUrl,
    }),
  }));

  return (
    <div className="overflow-y-scroll rounded-lg w-[80%] h-[700px] mx-auto">
      <Label asChild className="text-md lg:text-xl 2xl:text-3xl font-bold">
        <div className="mt-[50px]">Work Experiences</div>
      </Label>
      <Timeline data={timelineData} />
    </div>
  );
};

export default WorkExperience;

type WorkExperienceProps = {
  company: string;
  position: string;
  location: string;
  period: string;
  projects: {
    title: string;
    points: string[];
  }[];
  logoUrl: string;
};

const WorkExperienceCard = ({
  company,
  position,
  location,
  period,
  projects,
  logoUrl,
}: WorkExperienceProps) => {
  return (
    <div>
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-white">{company}</h2>
        <div className="flex flex-col gap-1">
          <Badge variant="outline" className="w-fit">
            {position}
          </Badge>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{location}</span>
            <span>•</span>
            <span>{period}</span>
          </div>
        </div>
      </div>
      <div className="relative h-16 w-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
        <Image
          src={logoUrl || "/placeholder.svg?height=64&width=64"}
          alt={`${company} logo`}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold text-white">
              {index + 1}. {project.title}
            </h3>
            <ul className="space-y-1 list-disc pl-5">
              {project.points.map((point, pointIndex) => (
                <li key={pointIndex} className="text-sm leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
