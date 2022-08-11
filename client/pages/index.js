import React from "react";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("../components/Sidebar"));
const Home = dynamic(() => import("../components/Home"));
const Footer = dynamic(() => import("../components/Footer"));
const Contact = dynamic(() => import("../components/Contact"));
const MapComponent = dynamic(() => import("../components/MapComponent"));

import sanityClient from "../config/sanityClient";

const index = ({ homeProps, contactProps, disclaimer }) => {
  return (
    <>
      <Sidebar  />
      <Home sanity={homeProps[0]} />
      <section className="grid md:grid-cols-2">
        <Contact sanity={contactProps[0]} />
        <MapComponent contactProps={contactProps[0]} />
      </section>
      <Footer disclaimer={disclaimer[0].disclaimer}/>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const homeProps = await sanityClient.fetch(
    `*[_type == "homepage"]{ 
        subtitle, 
        title, 
        image{
            asset{
                _ref
            }
        },
         home_page_content{ 
            section_one{title,body_one, body_two}, 
            section_two{title, body_one, body_two, actions}, 
            section_three{title,image, body_one, body_two, body_three}, 
            stat_section{stat, stat_image}
        }
    }`
  );
  const contactProps = await sanityClient.fetch(
    `*[_type == "contact"]{ 
      email, 
      location, 
      title
    }`
  );

  const disclaimer = await sanityClient.fetch( 
    `*[_type == "disclaimer"]{ 
      disclaimer
    }`
  )
  return { props: { homeProps, contactProps, disclaimer } };
};
