/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { ArtecIcon } from "./icons/ArtecIcon";
import Link from "next/link";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Jaber benzeggouta
        </h2>
        <h3 className="text-3xl font-caption">Software developer</h3>
        <p className="text-base">
          I'm a fullstack developer and this is my Portfolio <br />
          currently working at{" "}
          <Link href="https://artec-int.com/" target="_blank">
            <Code className="inline-flex items-center gap-1">
              {" "}
              <ArtecIcon className="inline" size={16} /> Artec-int
            </Code>
          </Link>
          <br /> Living in{" "}
          <Code className="display-inline flex inline-flex items-center gap-1">
            <img
              src="/image/Flag_of_France.png"
              alt="france flag"
              style={{ width: 16, height: "auto" }}
            />{" "}
            France, Paris
          </Code>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="/image/profile-photo.jpg"
          alt="Jaber Benzeggouta"
          className="w-full h-auto rounded-full max-w-xs max-md:w-56 m-auto"
        />
      </div>
    </Section>
  );
};
