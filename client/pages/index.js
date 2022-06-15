import React from "react";
import Sidebar from "../components/Sidebar";
import { Home } from "../components/Home";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MapComponent from "../components/MapComponent";
import sanityClient from "../config/sanityClient";

const index = ({ homeProps, contactProps }) => {
  return (
    <>
      <Sidebar />
      <Home sanity={homeProps[0]} />
      <section className="grid md:grid-cols-2">
        <Contact sanity={contactProps[0]} />
        <MapComponent />
      </section>
      <Footer />
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
            section_one{body, title}, 
            section_two{body, title}, 
            section_three{body,title,image}, 
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
  return { props: { homeProps, contactProps } };
};
