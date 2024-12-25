import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";


const Contact = () => {
  return (
    <div className="px-6 max-w-[1200px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="flex flex-col items-center text-center">
          {/* About Me Section */}
          <div className="mb-8">
            <h3 className="text-5xl font-bold text-gray-300 mb-4">
              About <span className="text-primary-color">Me</span>
            </h3>
            <hr className="border-t-2 border-primary-color w-32 mx-auto mb-6" />
          </div>

          {/* Description */}
          <div className="text-gray-300 leading-8 w-11/12 lg:w-8/12 mx-auto mb-12">
            <p>
              Hi, I'm Ankit! 👋 I'm an MCA student at GGSIPU, USICT College, who
              loves to bring ideas to life through code. I'm passionate about
              Java and JavaScript.
            </p>
            <p className="mt-4">
              With over 300+ coding challenges under my belt, I enjoy tackling
              complex problems and building efficient solutions. I have
              hands-on experience with JavaScript, React, Swing, JDBC, MySQL,
              and frameworks like Bootstrap and Tailwind CSS. I also love
              helping others debug and optimize their code—it’s a win-win for
              learning and growing together! Let’s create something amazing! 🚀
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 bg-gray-800/50 p-8 rounded-lg shadow-lg">
            <p className="text-gray-100 font-bold text-xl mb-4">Let’s Connect!</p>
            <form
              action="https://getform.io/f/aejjmmkb"
              method="POST"
              id="form"
            >
              <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-4 w-full rounded-md border border-purple-600 py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email ..."
                name="email"
                className="mb-4 w-full rounded-md border border-purple-600 py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                className="mb-4 w-full rounded-md border border-purple-600 py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-md border-white text-white font-semibold text-xl bg-gray-600 hover:bg-secondary-color focus:ring-4 focus:ring-primary-color transition duration-300"
              >
                Send Message
              </button>
              <div className="text-gray-300 leading-8 w-11/12 lg:w-8/12 mx-auto mb-12">
                <p>
                  Don't worry even if error comes i have your messages even if the error comes
                </p>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
