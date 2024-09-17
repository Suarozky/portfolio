"use client";
import { useState } from "react";


const About = () => {
  const [selectedButton, setSelectedButton] = useState("BiMap");
  const [aboutText, setAboutText] = useState(
    <>
      Hi, I’m Brayan, although on different platforms you can find me as{" "}
      <span className="font-black underline">Suarozky</span> or{" "}
      <span className="font-black underline">Brayaaaan</span>. I am a developer
      passionate about <span className="font-black underline">Full-stack</span>{" "}
      and interface design. I love working with modern technologies to create
      unique and effective web experiences. With a focus on usability and
      detail, I strive to build websites that are not only visually appealing
      but also <span className="font-black underline">functional</span> and{" "}
      <span className="font-black underline">efficient</span>.
    </>,
  );

  const handleButtonClick = (buttonType: any) => {
    setSelectedButton(buttonType);

    switch (buttonType) {
      case "BiMap":
        setAboutText(
          <>
            Hi, I’m Brayan, although on different platforms you can find me as{" "}
            <span className="font-black underline">Suarozky</span> or{" "}
            <span className="font-black underline">Brayaaaan</span>. I am a
            developer passionate about{" "}
            <span className="font-black underline">Full-stack</span> and
            interface design. I love working with modern technologies to create
            unique and effective web experiences. With a focus on usability and
            detail, I strive to build websites that are not only visually
            appealing but also{" "}
            <span className="font-black underline">functional</span> and{" "}
            <span className="font-black underline">efficient </span>.
          </>,
        );
        break;
      case "BiJoystick":
        setAboutText(
          <>
            I’m also an avid gamer and enjoy spending my free time exploring new
            worlds and challenges in various video games. This passion for
            gaming often inspires my work in development, as I constantly seek
            to create <span className="font-black underline">immersive</span>{" "}
            and <span className="font-black underline">interactive</span> user
            experiences.
          </>,
        );
        break;
      case "BiUser":
        setAboutText(
          <>
            As a person, I value{" "}
            <span className="font-black underline">continuous learning</span>{" "}
            and <span className="font-black underline">personal growth</span>. I
            am always looking for opportunities to expand my knowledge, whether
            it’s through formal education, online courses, or experimenting with
            new technologies in my projects.
          </>,
        );
        break;
      default:
        //@ts-ignore
        setAboutText("");
    }
  };

  return (
    <>
      <div className="h-1 w-full" id="About"></div>
      <div className="flex h-screen w-full max-w-screen-xl flex-row items-center justify-center"></div>
    </>
  );
};

export default About;
