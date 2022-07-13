import React, { useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
const Contact = ({ sanity, formSubmitHandler }) => {
  return (
    <div className=" relative z-20 w-full px-4 py-0 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 data-aos="fade-right" className="text-center text-4xl mt-20 mb-10 text-primary">
            {sanity.title}
          </h1>
          <div data-aos="fade-left" className="flex items-end gap-2">
            <GrLocationPin className="text-xl text-primary" />
            <p>{sanity.location}</p>
          </div>
          <div data-aos="fade-right" className="flex items-end gap-2">
            <MdMarkEmailRead className="text-xl text-primary" />
            <a href="mailto:grant@levupfinancials.com">{sanity.email}</a>
          </div>
        </div>
        <form
          data-aos="fade-in"
          action="https://formsubmit.co/quinaiton@hotmail.com"
          method="POST"
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg "
        >
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://belliforum.com" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_subject" value="New message from Belliforum.com!" />
          <div>
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="FirstName"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:ring-1 focus:ring-primary focus:border-primary "
                placeholder="John"
                required
              />
            </div>
            <label htmlFor="email" className="text-sm font-medium">
              Last Name
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="LastName"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Phone #
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="phone"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                name="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Enter email"
                required
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Message
            </label>

            <div className="relative mt-1">
              <textarea
                type="text"
                name="message"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Enter Message"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg border hover:bg-secondary hover:text-primary hover:border-primary transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
