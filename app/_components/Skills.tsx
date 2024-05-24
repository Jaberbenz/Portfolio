import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { PhpIcon } from "./icons/PhpIcon";
import { OpenaiIcon } from "./icons/OpenaiIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-10">
        <div className="flex flex-col gap-2">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code> I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.{" "}
          </p>
        </div>
        {/* <div className="flex flex-col gap-2">
          <PhpIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code> I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.{" "}
          </p>
        </div> */}
        <div className="flex flex-col gap-2 ">
          <OpenaiIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            AI Integration
          </h3>
          <p className="text-sm text-muted-foreground">
            I am an expert of interating AI in your applications to create a
            perfect <u>user experience.</u>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <TailwindIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> application <i>in seconds</i> using{" "}
            <Code> TailwindCSS </Code>
          </p>
        </div>
      </div>
    </Section>
  );
};
