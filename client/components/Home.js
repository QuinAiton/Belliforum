import React, { useEffect } from "react";

import { urlFor } from "../lib/urlFor";

export const Home = ({ sanity }) => {
  const homeImage = urlFor(sanity.image).url();
  const statImage = urlFor(sanity.home_page_content.stat_section.stat_image).url();
  const sectionThreeImage = urlFor(sanity.home_page_content.section_three.image).url();

  const {home_page_content} = sanity
  const {section_one, section_two, section_three, stat_section}=home_page_content
  console.log(section_three)



const section_one_body_one = section_one.body_one.map((body)=>{ 
return (
    <p   key={body}
          className="md:md:px-[15vw] px-[5vw] mt-3 text-start text-md md:text-xl text-center"
          data-aos="fade-in"
        >
          {body}
        </p>
)
}) 

const section_two_actions = section_two.actions.map((action)=>{ 
       return(
         <li key={action} data-aos="fade-up" className="p-3 text-center text-md md:text-xl">
          {action} 

        </li>
        )
      })

const section_three_body_two = section_three.body_two.map((body)=>{ 
       return(
         <li key={body} data-aos="fade-up" className=" pb-2 text-start text-md md:text-xl">
          {body}
        </li>
        )
      })



  return (
    <>
      <header
        style={{ backgroundImage: `url(${homeImage})` }}
        className="z-10 relative flex items-center justify-center h-screen mb-12 bg-scroll md:bg-fixed bg-center bg-cover"
      >
        <div className="z-20 relative w-full h-screen bg-black bg-opacity-40 flex flex-col gap-5b justify-center items-center p-5 text-white text-center">
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

      <section className="my-20 z-20 relative border-separate rounded-xl md:px-[15vw] px-[5vw]  ">
        <div className=" flex flex-col justify-center items-center max-w-lg m-auto">
          <p data-aos="fade-left" className="text-3xl text-primary">
            {section_one.title[0]}
          </p>
          <p data-aos="fade-right" className="text-3xl text-primary">
            {section_one.title[1]}
          </p>
          <p data-aos="fade-left" className="text-3xl text-primary">
            {section_one.title[2]}
          </p>
          <hr data-aos="fade-right" className="w-[80vw] border border-primary mt-5" />
        </div>
        <div className="mt-10 ">
      {section_one_body_one}
        </div>
        <div className="mt-20 ">
        <p
          className="md:px-[10vw] mt-3 text-start text-md md:text-xl text-center"
          data-aos="fade-in"
        >
          {section_one.body_two[0]}
        </p>
          <p
          className="md:px-[10vw] mt-5 text-start text-md md:text-2xl text-center text-primary"
          data-aos="fade-in"
        >
          {section_one.body_two[1]}
        </p>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${statImage})` }}
        className=" flex items-center justify-center h-[40vh] md:h-[60vh] mb-12 bg-scroll md:bg-fixed bg-center bg-cover "
      >
        <div className="-z-0 w-full h-[40vh] md:h-[60vh] bg-scroll md:bg-fixed bg-black bg-opacity-40 flex flex-col gap-5b justify-center items-center p-5 text-white">
          <p className="-z-10 p-2 md:p-5 text-center text-3xl md:text-5xl md:fixed top-1/2">
            {stat_section.stat}
          </p>
        </div>
      </section>

      <section className="my-20 z-20 relative md:px-[15vw] px-[5vw] flex flex-col justify-center items-center  ">
        <div className=" flex flex-col justify-center items-center max-w-lg m-auto">
          <p data-aos="fade-left" className="text-3xl text-center text-primary">
            {section_two.title}
          </p>
          <hr data-aos="fade-right" className="w-[80vw] border border-primary mt-2" />
        </div>
        <p data-aos="fade-in" className="text-center text-lg md:text-xl mb-20 mt-5">
          {section_two.body_one}
        </p>
        <p data-aos="fade-in" className="text-center text-md md:text-xl">
          {section_two.body_two}
        </p>
        <ul className="p-5 md:px-[10vw] text-left flex flex-col justify-center items-center ">{section_two_actions} </ul>
      
      </section>

      <section
        style={{ backgroundImage: `url(${sectionThreeImage})` }}
        className="z-10 relative flex items-center justify-center h-screen bg-scroll md:bg-fixed bg-center bg-cover mt-20"
      >
        <div className="z-20 relative w-full h-screen bg-black bg-opacity-[55%] flex flex-col justify-center items-center text-white md:px-[15vw] px-[5vw]">
          <h1 data-aos="fade-right" className="text-4xl md:text-4xl px-10 mt-40 text-center">
            {section_three.title}
          </h1>
          <hr data-aos="fade-left" className="w-[80vw] border border-secondary mt-2 mb-5" />
          <p
            data-aos="fade-in"
            className=" p-5 md:p-10 md:px-[10vw] text-center text-md md:text-xl"
          >
            {section_three.body_one}
          </p>
          <ul
            data-aos="fade-in"
            className=" p-5 md:p-10 md:px-[10vw] text-center text-md md:text-xl"
          >
            {section_three_body_two}         
           </ul>
               <p
            data-aos="fade-in"
            className=" p-5  text-start text-md md:text-xl mb-40 text-center  "
          >
            {section_three.body_three}
          </p>
        </div>
      </section>
    </>
  );
};
