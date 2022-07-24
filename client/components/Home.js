import React, { useEffect } from "react";

import { urlFor } from "../lib/urlFor";

export const Home = ({ sanity }) => {
  const homeImage = urlFor(sanity.image).url();
  const statImage = urlFor(sanity.home_page_content.stat_section.stat_image).url();
  const sectionThreeImage = urlFor(sanity.home_page_content.section_three.image).url();
  return (
    <>
      <header
        style={{ backgroundImage: `url(${homeImage})` }}
        className="z-10 relative flex items-center justify-center h-screen mb-12 bg-scroll md:bg-fixed bg-center bg-cover"
      >
        <div className="z-20 relative w-full h-screen bg-black bg-opacity-40 flex flex-col gap-5b justify-center items-center p-5 text-white">
          <h1 data-aos="fade-up" className="text-7xl md:text-8xl">
            {sanity.title}
          </h1>
          <hr data-aos="fade-up" className="w-[30vw] border border-secondary mt-2 mb-5" />
          <p data-aos="fade-up" className="text-2xl">
            {sanity.subtitle.subOne}
          </p>
          <p data-aos="fade-up" className="text-2xl">
            {sanity.subtitle.subTwo}
          </p>
        </div>
      </header>
      <div className="my-40 z-20 relative border-separate rounded-xl  ">
        <div className=" flex flex-col justify-center items-center max-w-lg m-auto mt-40 ">
          <p data-aos="fade-left" className="text-3xl text-primary">
            {sanity.home_page_content.section_one.title.one}
          </p>
          <p data-aos="fade-right" className="text-3xl text-primary">
            {sanity.home_page_content.section_one.title.two}
          </p>
          <p data-aos="fade-left" className="text-3xl text-primary">
            {sanity.home_page_content.section_one.title.three}
          </p>
          <hr data-aos="fade-right" className="w-1/2 border border-primary mt-2" />
        </div>
        <p
          className="my-10 p-5 md:p-10 md:px-[20vw] text-start text-md md:text-xl"
          data-aos="fade-in"
        >
          {sanity.home_page_content.section_one.body}
        </p>
      </div>
      <section
        style={{ backgroundImage: `url(${statImage})` }}
        className=" flex items-center justify-center h-[40vh] md:h-[60vh] mb-12 bg-scroll md:bg-fixed bg-center bg-cover "
      >
        <div className="-z-0 w-full h-[40vh] md:h-[60vh] bg-scroll md:bg-fixed bg-black bg-opacity-40 flex flex-col gap-5b justify-center items-center p-5 text-white">
          <p className="-z-10 p-2 md:p-5 text-center text-3xl md:text-5xl md:fixed top-1/2">
            {sanity.home_page_content.stat_section.stat}
          </p>
        </div>
      </section>
      <div className="my-40 z-20 relative">
        <div className=" flex flex-col justify-center items-center max-w-lg m-auto ">
          <p data-aos="fade-left" className="text-3xl text-center text-primary">
            {sanity.home_page_content.section_two.title}
          </p>
          <hr data-aos="fade-right" className="w-[30vw] border border-primary mt-2" />
        </div>
        <p data-aos="fade-left" className=" p-5 md:p-10 md:px-[20vw] text-start text-md md:text-xl">
          {sanity.home_page_content.section_two.body}
        </p>
      </div>
      <section
        style={{ backgroundImage: `url(${sectionThreeImage})` }}
        className="z-10 relative flex items-center justify-center h-screen bg-scroll md:bg-fixed bg-center bg-cover"
      >
        <div className="z-20 relative w-full h-screen bg-black bg-opacity-[55%] flex flex-col  justify-center items-center text-white">
          <h1 data-aos="fade-right" className="text-4xl md:text-4xl px-10">
            {sanity.home_page_content.section_three.title}
          </h1>
          <hr data-aos="fade-left" className="w-[30vw] border border-secondary mt-2 mb-5" />
          <p
            data-aos="fade-right"
            className=" p-5 md:p-10 md:px-[20vw] text-start text-md md:text-xl"
          >
            {sanity.home_page_content.section_three.body}
          </p>
        </div>
      </section>
    </>
  );
};
