/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/ui/card";
import {
  ArrowUpRightIcon,
  ChefHatIcon,
  LucideIcon,
  NotebookPenIcon,
  ShipIcon,
  ShirtIcon,
} from "lucide-react";

import { Section } from "./Section";
import { SideProjects, SideProjectsProps } from "./SideProjects";
import { Work, WorkProps } from "./Work";
import { ContactCard } from "./ContactCard";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProjects
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-sm text-muted-foreground">Work</p>
          <div>
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Contact me</p>
          <ContactCard
            name="Jaber Benzeggouta"
            description="Github"
            image="/image/profile-photo.jpg"
            mediumImage="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          />
          <ContactCard
            name="Jaber Benzeggouta"
            description="Linkedin"
            image="/image/profile-photo.jpg"
            mediumImage="https://www.habitat44.org/wp-content/uploads/2020/06/53-533322_linked-in-logo-linkedin-logo-png-images-free.jpg"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: ChefHatIcon,
    title: "Cocotons",
    description: "A platform to buy and sell cottons",
    url: "/",
  },
  {
    Logo: NotebookPenIcon,
    title: "Power Notes",
    description: "A platform to take notes",
    url: "/",
  },
  {
    Logo: ShipIcon,
    title: "YachtHaven",
    description: "A platform to rent yachts",
    url: "/",
  },
  {
    Logo: ShirtIcon,
    title: "Just New Findings",
    description: "A platform to share new findings",
    url: "/",
  },
];

const WORKS: WorkProps[] = [
  {
    image: "/image/artec.png",
    title: "Cocotons",
    role: "Frontend Developer",
    date: "2021",
    url: "/",
    freelance: true,
  },
];
