import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundComponent from "./BackgroundComponent";
type Props = {
  pageInfo: PageInfo;
};

function HeroComponent({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}, the IT Director`,
      "I like learning new thing",
      "I like ...",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundComponent />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover mt-10"
        alt="Sovannborith's profile pic"
        src={urlFor(pageInfo?.heroImage).url()}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
