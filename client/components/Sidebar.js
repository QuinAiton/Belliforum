import { useState } from "react";
import SocialButtons from "./SocialButtons";
import Link from "next/link";
import Image from "next/image";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav id="nav" className="z-[999] fixed w-screen h-[7vh] bg-primary">
      {/* Large screen nav */}
      <div
        data-aos="fade-down"
        className="hidden lg:flex h-full  justify-between items-center my-auto w-screen px-10"
      >
        <div className="text-secondary">
          <Image
            src="/assets/belliforumLogo.jpg"
            height={75}
            width={75}
            objectFit="contain"
            className="rounded-full scale-150"
          />
        </div>
        <ul className="w-full flex justify-center gap-6 text-sm place-self-center">
          <li>
            <Link href="/">
              <a className="text-secondary transition hover:text-secondary/75 text-xl">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-secondary transition hover:text-secondary/75 text-xl">About Us</a>
            </Link>
          </li>
        </ul>
        <SocialButtons className="place-self-end" />
      </div>

      {/*slider for mobile screens */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={`lg:hidden z-50 absolute -top-1 right-0 hamburger hamburger--spring${
          showSidebar ? " is-active" : ""
        }`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div
        className={` w-3/4 md:w-1/2 top-0 right-0 bg-primary p-10 pl-10 text-white fixed h-full z-40  ease-in-out duration-300  ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul className=" w-full h-1/2 flex flex-col items-center gap-6 text-sm justify-center">
          <li>
            <Link href="/">
              <a className="text-secondary transition hover:text-secondary/75 text-xl">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-secondary transition hover:text-secondary/75 text-xl">About Us</a>
            </Link>
          </li>
        </ul>
        <SocialButtons />
      </div>
    </nav>
  );
};

export default Sidebar;
