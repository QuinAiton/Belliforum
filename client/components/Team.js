import React, { useMemo } from "react";
import Image from "next/image";
import { CgArrowLongDown } from "react-icons/cg";
import { urlFor } from "../lib/urlFor";

const Team = ({ memberProps, teamProps }) => {
  const { about_us_content: content } = teamProps;
  const aboutContentArray = Object.values(content);
  const aboutContent = aboutContentArray.map((section, index) => {
    return (
      <div
        className={`${
          index % 2 === 0 ? "bg-primary " : "bg-secondary "
        }grid grid-cols-2 place-content-center mb-20 h-[80vh] w-full p-40`}
      >
        <div className={`${index % 2 === 0 ? "col-start-2 " : "col-start-1 "}`}></div>
        <div className={`flex flex-col gap-10`}>
          <h4
            className={`text-5xl text-center ${
              index % 2 === 0 ? "text-secondary " : "text-primary "
            }`}
          >
            {section.title}
          </h4>
          <p
            className={`text-xl text-center font-light ${
              index % 2 === 0 ? "text-secondary " : "text-primary "
            }`}
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
        className=" bg-white grid grid-rows-5 w-11/12 md:w-full h-[60vh] md:h-[80vh] drop-shadow-xl shadow-xl place-content-center"
      >
        <div className="relative row-span-2 w-full h-full rounded-full">
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
          className=" sticky p-2 place-self-start text-7xl md:text-8xl md:ml-[15vw] uppercase text-primary"
        >
          {teamProps.title}
        </h1>
        <p
          data-aos={"fade-up"}
          className=" w-10/12 place-self-center md:place-self-end my-10 p-5 md:px-[10vw] text-center text-md md:text-2xl text-black font-light"
        >
          {teamProps.hero_content}
        </p>
        <div className="flex flex-col justify-center items-center gap-2 relative -bottom-12 md:-bottom-[8vh]">
          <p className="text-primary">scroll</p>
          <CgArrowLongDown className=" text-primary text-2xl animate-bounce" />
        </div>
      </header>

      <div className=" bg-secondary pt-10 grid grid-col w-full h-full place-items-center place-content-center mx-0 pb-20 gap-10 mt-20 z-20 relative top-[90vh] md:top-[100vh]  rounded-xl  ">
        <section>{aboutContent}</section>
        <section>
          <div>
            <div className="my-20 flex flex-col justify-center items-center gap-5 ">
              <h2 className="text-center text-5xl text-primary">Meet Our Team Of Experts</h2>
              <hr className="border border-primary w-[35vw]" />
            </div>
            <div className="grid grid-col md:grid-cols-3 gap-10 place-items-center place-content-center p-10">
              {MemoTeamMembers}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 relative -bottom-12 md:-bottom-[8vh]">
            <p className="text-primary"></p>
            <CgArrowLongDown className="text-primary text-2xl animate-bounce" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
