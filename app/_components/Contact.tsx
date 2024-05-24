import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex max-md:flex-col gap-10 w-full">
        <ContactCard
          className="flex-1 h-15"
          name="Jaber Benzeggouta"
          description="Github"
          image="/image/profile-photo.jpg"
          mediumImage="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
        />
        <ContactCard
          className="flex-1"
          name="Jaber Benzeggouta"
          description="Linkedin"
          image="/image/profile-photo.jpg"
          mediumImage="https://www.habitat44.org/wp-content/uploads/2020/06/53-533322_linked-in-logo-linkedin-logo-png-images-free.jpg"
        />
        <ContactCard
          className="flex-1 "
          name="jaberksh3012@gmail.com"
          description="Email me for any inquiries"
          image="/image/profile-photo.jpg"
          mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
        />
      </div>
    </Section>
  );
};
