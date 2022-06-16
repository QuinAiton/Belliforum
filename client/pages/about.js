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
    `*[_type == "team_home"]{
      title, 
      body, 
      header
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
