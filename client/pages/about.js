import React from "react";
import Sidebar from "../components/Sidebar";
import Team from "../components/Team";
import Footer from "../components/Footer";
const about = () => {
  return (
    <div className="absolute">
      <Sidebar />
      <Team />
      <div>
        <Footer isRelative={true} />
      </div>
    </div>
  );
};

export default about;
