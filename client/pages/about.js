import React from "react";
import Sidebar from "../components/Sidebar";
import Team from "../components/Team";
import Footer from "../components/Footer";
import sanityClient from "../config/sanityClient";

const about = ({ teamProps, memberProps }) => {
  return (
    <div className="absolute">
      <Sidebar />
      <Team teamProps={teamProps[0]} memberProps={memberProps} />
      <div>
        <Footer isRelative={true} />
      </div>
    </div>
  );
};

export default about;

export const getStaticProps = async () => {
  const teamProps = await sanityClient.fetch(
    `*[_type == "about_us"]{
      title, 
      hero_content, 
      header, 
  about_us_content{ 
section_1{title,body},
section_2{title,body},
section_3{title,body},
section_4{title,body}
}
    }`
  );
  const memberProps = await sanityClient.fetch(
    `*[_type == "team_members"]{ 
      image, 
      position, 
      description,
      title
    }`
  );
  return { props: { teamProps, memberProps } };
};
