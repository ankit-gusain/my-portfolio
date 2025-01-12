import { useState } from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  // State for showing the resume
  const [showResume, setShowResume] = useState(false);

  // Function to toggle the visibility of the resume
  const handleShowResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div>
      <div className="mt-48 max-w-[1200px] mx-auto relative px-6 me-20">
        {/* Centered Image */}
        <motion.div
          className="flex justify-center items-center" // Ensure both horizontal and vertical centering
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={profilepic} className="w-[300px] md:w-[450px] mx-auto" />
        </motion.div>
      </div>


      {/* Content Below Image */}
      <motion.div
        className="flex flex-col items-center text-center mt-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <TypeAnimation
          sequence={["Fullstack Dev", 1000, "Learner", 1000, "Explorer", 1000, "Problem Solver", 1000, "Tech Geek", 1000]}
          speed={50}
          repeat={Infinity}
          className="font-bold text-gray-400 text-xl md:text-5xl not-italic mb-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-purple-500 md:text-7xl text-5xl tracking-tight mb-4"
        >
          HEY, I AM <br />
          <span className="text-gray-400">ANKIT</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gray-300 max-w-[300px] md:max-w-[600px] md:text-2xl text-lg mb-6"
        >
          I am a passionate Web developer and Problem Solver.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center gap-6 mt-4"
        >
          {/* Button to show resume */}
          <motion.button
            onClick={handleShowResume}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
            className="cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
          >
            View Resume
          </motion.button>

          <div className="flex gap-6 flex-row text-4xl md:text-5xl text-purple-400 ">
            <motion.a whileHover={{ scale: 1.2 }}
              href="https://github.com/ankit-gusain" >
              <AiOutlineGithub />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/ankitsingh235475/" >
              <AiOutlineLinkedin />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }}
              href="https://instagram.com/chilypotato" >
              <AiOutlineInstagram />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-wrap justify-center items-center py-24 px-12 md:px-0 w-full"
      >
        <p className="text-gray-200 text-2xl md:text-4xl text-center mb-6 md:mb-0">My Tech Stack</p>
        <div className="flex flex-wrap justify-center items-center">
          <DiHtml5 className="text-orange-600 mx-2 text-5xl md:text-7xl" />
          <DiCss3 className="text-blue-600 mx-2 text-5xl md:text-7xl" />
          <DiJavascript1 className="text-yellow-500 mx-2 text-5xl md:text-7xl" />
          <DiReact className="text-blue-500 mx-2 text-5xl md:text-7xl" />
          <DiNodejsSmall className="text-green-500 mx-2 text-5xl md:text-7xl" />
          <DiJava className="text-orange-600 mx-2 text-5xl md:text-7xl" />
        </div>
      </motion.div>

      {/* Shiny Effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>

      {/* Resume Modal */}
      {
        showResume && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg max-w-[800px] w-full">
              <h2 className="text-xl font-semibold mb-4">My Resume</h2>
              <iframe
                src="https://drive.google.com/file/d/1pAy3Px5QzSB1SBCzNxUkHjiMXeyfP3S4/view?usp=sharing"
                width="100%"
                height="500"
                allow="autoplay"
                className="mb-4"
              />
              <button
                onClick={handleShowResume}
                className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default Hero;
