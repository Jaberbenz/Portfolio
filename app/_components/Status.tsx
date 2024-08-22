/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/ui/card";
import { ChefHatIcon, Dice6Icon, ShipIcon, ShirtIcon } from "lucide-react";

import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideProjects, SideProjectsProps } from "./SideProjects";
import { Work, WorkProps } from "./Work";

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
                url={project.url}
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
    url: "https://github.com/lucieplgnt/cocotons",
  },
  {
    Logo: Dice6Icon,
    title: "FlashCard",
    description: "A flashcard game for memorization",
    url: "https://github.com/Jaberbenz/flashcard-front",
  },
  {
    Logo: ShipIcon,
    title: "YachtHaven",
    description: "A platform to rent yachts",
    url: "https://github.com/Jaberbenz/yachthaven",
  },
  {
    Logo: ShirtIcon,
    title: "Just New Findings",
    description: "A platform to share new findings",
    url: "https://github.com/nawel-SARROUB/E-Shopping",
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
