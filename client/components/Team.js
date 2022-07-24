import React, { useMemo } from "react";
import Image from "next/image";
import { CgArrowLongDown } from "react-icons/cg";
import { urlFor } from "../lib/urlFor";

const Team = ({ memberProps, teamProps }) => {
  const { about_us_content: content } = teamProps;
  const aboutContentArray = Object.values(content);

  const aboutContent = aboutContentArray.map((section) => {
    const imageConverter = urlFor(section.image).url();
    return (
      <section
        key={section.title}
        style={{ backgroundImage: `url(${imageConverter})` }}
        className="z-10 relative flex items-center justify-center h-screen bg-scroll md:bg-fixed bg-center bg-cover"
      >
        <div className="z-20 relative w-full h-screen bg-black bg-opacity-[60%] flex flex-col gap-5b justify-center items-center p-5 text-white">
          <h1 data-aos="fade-right" className="text-4xl md:text-4xl">
            {section.title}
          </h1>
          <hr data-aos="fade-left" className="w-[30vw] border border-secondary mt-2 mb-5" />
          <p
            data-aos="fade-right"
            className="p-2 md:px-[20vw] text-left text-md md:text-xl last:mb-20 "
          >
            {section.body}
          </p>
        </div>
      </section>
    );
  });

  const membersComponent = memberProps.map((member) => {
    let imageUrl = urlFor(member.image).url();
    return (
      <div
        key={member.title}
        className=" bg-white grid grid-rows-5 w-full md:full h-[70vh] md:h-[50vh]  place-content-center shadow-xl"
      >
        <div className="relative row-span-2 w-full h-full">
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </div>
        <div className="bg-secondary row-span-3 flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl uppercase text-primary">{member.title}</h2>
          <p>{member.position}</p>
          <hr className="w-[70%] border border-primary mt-2 mb-2" />
          <p className="px-5 pb-5 text-center">{member.description}</p>
        </div>
      </div>
    );
  });
  const MemoTeamMembers = useMemo(() => membersComponent, [memberProps]);

  return (
    <>
      <header className="flex flex-col z-10  items-center justify-center h-screen my-12 mx-auto fixed top-0 md:top-20 left-0 bg-center bg-cover bg-white md:gap-20 px-5 md:px-0">
        <div
          data-aos={"fade-left"}
          className="text-1xl pb-5 flex items-center justify-center mx-auto"
        >
          <hr className="border border-primary w-[15vw] mr-1" />
          <p className="uppercase">{teamProps.header}</p>
          <hr className="border border-primary w-[15vw] ml-1" />
        </div>
        <h1
          data-aos={"fade-right"}
          className="sticky text-6xl md:text-8xl mx-auto uppercase text-primary text-end"
        >
          {teamProps.title}
        </h1>
        <p
          data-aos={"fade-up"}
          className=" w-full place-self-center my-10 md:px-[10vw] text-xl md:text-2xl text-black font-light text-center"
        >
          {teamProps.hero_content}
        </p>
        <div className="flex flex-col justify-center items-center gap-2 relative -bottom-[15vh] md:-bottom-[0vh] xxl:-bottom-[12vh]">
          <p className="text-primary">scroll</p>
          <CgArrowLongDown className=" text-primary text-2xl animate-bounce" />
        </div>
      </header>

      <section className="relative top-[100vh]">{aboutContent}</section>

      <section className=" bg-secondary grid grid-col w-full h-full place-items-center place-content-center mx-0 pb-20 gap-10  z-20 relative top-[90vh] md:top-[100vh]  rounded-xl  ">
        <div>
          <div className="mt-20 flex flex-col justify-center items-center gap-5 ">
            <h2 className="text-center text-5xl text-primary">Meet Our Team Of Experts</h2>
            <hr className="border border-primary w-[35vw]" />
          </div>
          <div className="grid grid-col md:grid-cols-3 gap-10 place-items-center place-content-center p-5 md:p-10 md:w-5/6 md:mx-auto rounded-xl   ">
            {MemoTeamMembers}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 relative -bottom-12 md:-bottom-[5vh]">
          <p className="text-primary"></p>
          <CgArrowLongDown className="text-primary text-2xl animate-bounce" />
        </div>
      </section>
    </>
  );
};

export default Team;
