import React from "react";
import Sidebar from "../components/Sidebar";
import { Home } from "../components/Home";
import Footer from "../components/Footer";
import sanityClient from "../config/sanityClient";

const index = (props) => {
  console.log(props);
  return (
    <>
      <Sidebar />
      <Home />
      <Footer />
    </>
  );
};

export default index;

export const GetStaticProps = async () => {
  const sanity = await sanityClient.fetch(
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
  return { props: { sanity } };
};
