import React, { useMemo } from "react";
import Image from "next/image";
import { CgArrowLongDown } from "react-icons/cg";
import { urlFor } from "../lib/urlFor";

const Team = ({ memberProps, teamProps }) => {
  const { about_us_content: content } = teamProps;
  const aboutContentArray = Object.values(content);
  const aboutContent = aboutContentArray.map((section, index) => {
    const imageConverter = urlFor(section.image).url();
    return (
      <div
        className={`flex flex-col md:flex-row  h-[80vh] w-full
        ${index % 2 === 0 ? "  bg-secondary flex-row-reverse" : " bg-primary flex-row"}`}
      >
        <div className={`md:w-1/2 h-1/2 md:h-full relative`}>
          <Image src={`${imageConverter}`} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col my-auto gap-10 place-self-center md:p-20 md:w-1/2 ">
          <h4
            className={`text-5xl text-center 
            ${index % 2 === 0 ? " text-primary " : " text-secondary "}`}
          >
            {section.title}
          </h4>
          <p
            className={`text-xl text-center font-light 
            ${index % 2 === 0 ? " text-primary " : " text-secondary "}`}
          >
            {section.body}
          </p>
        </div>
      </div>
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
          <p className="px-5 pb-5">{member.description}</p>
        </div>
      </div>
    );
  });
  const MemoTeamMembers = useMemo(() => membersComponent, [memberProps]);

  return (
    <>
      <header className="flex flex-col z-10  items-center justify-center h-screen mb-12 mx-auto fixed top-0 md:top-20 left-0 bg-center bg-cover bg-white md:gap-20">
        <div data-aos={"fade-left"} className="text-1xl pb-5 flex items-center mx-auto">
          <hr className="border border-primary w-[15vw] mr-3" />
          <p className="uppercase">{teamProps.header}</p>
          <hr className="border border-primary w-[15vw] ml-3" />
        </div>
        <h1
          data-aos={"fade-right"}
          className=" sticky p-2 place-self-start text-7xl md:text-8xl mx-auto md:ml-[20vw] uppercase text-primary"
        >
          {teamProps.title}
        </h1>
        <p
          data-aos={"fade-up"}
          className=" w-5/6 place-self-center md:place-self-end my-10 p-5 md:px-[10vw] text-center text-xl md:text-2xl text-black font-light"
        >
          {teamProps.hero_content}
        </p>
        <div className="flex flex-col justify-center items-center gap-2 relative -bottom-[20vh] md:-bottom-[0vh] xxl:-bottom-[12vh]">
          <p className="text-primary">scroll</p>
          <CgArrowLongDown className=" text-primary text-2xl animate-bounce" />
        </div>
      </header>

      <div className=" bg-secondary pt-10 grid grid-col w-full h-full place-items-center place-content-center mx-0 pb-20 gap-10 mt-20 z-20 relative top-[90vh] md:top-[100vh]  rounded-xl  ">
        <section className="mb-20">{aboutContent}</section>
        <section>
          <div>
            <div className="mt-20 flex flex-col justify-center items-center gap-5 ">
              <h2 className="text-center text-5xl text-primary">Meet Our Team Of Experts</h2>
              <hr className="border border-primary w-[35vw]" />
            </div>
            <div className="grid grid-col md:grid-cols-3 gap-10 place-items-center place-content-center p-5 md:p-10 md:w-5/6 md:mx-auto   ">
              {MemoTeamMembers}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 relative -bottom-12 md:-bottom-[5vh]">
            <p className="text-primary"></p>
            <CgArrowLongDown className="text-primary text-2xl animate-bounce" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
