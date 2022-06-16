import React, { useMemo } from "react";
import Image from "next/image";
import { CgArrowLongDown } from "react-icons/cg";
import { urlFor } from "../lib/urlFor";

const Team = ({ memberProps, teamProps }) => {
  const membersComponent = memberProps.map((member) => {
    let imageUrl = urlFor(member.image).url();
    return (
      <div
        key={member.title}
        className=" bg-white grid grid-rows-5 w-11/12 md:w-full h-[60vh] md:h-[80vh] drop-shadow-xl shadow-xl place-content-center"
      >
        <div data-aos="fade-in" className="relative row-span-2 w-full h-full rounded-full">
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </div>
        <div className="bg-secondary row-span-3 flex flex-col items-center justify-center gap-3">
          <h2 data-aos="fade-in" className="text-3xl uppercase text-primary">
            {member.title}
          </h2>
          <p data-aos="fade-in">{member.position}</p>
          <hr data-aos="fade-in" className="w-[70%] border border-primary mt-2 mb-2" />
          <p data-aos="fade-in" className="px-5 pb-5">
            {member.description}
          </p>
        </div>
      </div>
    );
  });

  const MemoTeamMembers = useMemo(() => membersComponent, [memberProps]);

  return (
    <>
      <header className=" flex flex-col z-10  items-center justify-center h-screen mb-12 mx-auto fixed top-0 md:top-20 left-0 bg-center bg-cover bg-white md:gap-15">
        <div data-aos={"fade-left"} className="text-1xl pb-5 flex items-center mx-auto">
          <hr className="border border-primary w-[15vw]" />
          <p className="uppercase">{teamProps.header}</p>
          <hr className="border border-primary w-[15vw]" />
        </div>
        <h1
          data-aos={"fade-right"}
          className=" sticky p-2 place-self-start text-7xl md:text-8xl md:ml-[15vw] uppercase text-primary"
        >
          {teamProps.title}
        </h1>
        <p
          data-aos={"fade-up"}
          className=" w-10/12 place-self-center md:place-self-end my-10 p-5 md:px-[10vw] text-center text-md md:text-2xl text-black"
        >
          {teamProps.body}
        </p>
        <div className="flex flex-col justify-center items-center gap-2 relative -bottom-12 md:-bottom-[8vh]">
          <p className="text-primary">scroll</p>
          <CgArrowLongDown className=" text-2xl animate-bounce" />
        </div>
      </header>

      <section
        data-aos="fade-in"
        className=" bg-secondary pt-10 grid grid-col md:grid-cols-3 w-full h-full md:px-[5vw] place-items-center place-content-center mx-0 pb-20 gap-10 mt-20 z-20 relative top-[90vh] md:top-[100vh]  rounded-xl  "
      >
        {MemoTeamMembers}
      </section>
    </>
  );
};

export default Team;
