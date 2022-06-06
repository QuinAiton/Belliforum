
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import SocialButtons from "./SocialButtons";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <nav id="nav" className="z-30 fixed w-screen h-[5vh] bg-primary" >
            {/* Large screen nav */}
            <div className="hidden lg:flex justify-between items-center w-screen px-10">
                <div className="text-secondary">LOGO HERE</div>
                <ul className="w-full flex justify-center gap-6 text-sm">
                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            About
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Careers
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            History
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Services
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Blog
                        </a>
                    </li>
                </ul>
                <SocialButtons />
            </div>


            {/*slider for mobile screens */}
            <button onClick={() => setShowSidebar(!showSidebar)} className={`lg:hidden z-50 absolute -top-1 right-0 hamburger hamburger--spring${showSidebar ? " is-active" : ""}`} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div
                className={` w-3/4 md:w-1/2 top-0 right-0 bg-primary p-10 pl-10 text-white fixed h-full z-40  ease-in-out duration-300  ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <ul className=" w-full h-1/2 flex flex-col items-center gap-6 text-sm justify-center">
                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            About
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Careers
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            History
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Services
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a className="text-secondary transition hover:text-secondary/75 text-xl" href="/">
                            Blog
                        </a>
                    </li>
                </ul>
                <SocialButtons />
            </div>
        </nav>
    );
};

export default Sidebar;
