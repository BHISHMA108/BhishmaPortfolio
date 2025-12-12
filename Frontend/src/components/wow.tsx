import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
export default function Wow() {
  const navigate = useNavigate();
  return (
    <div className="font-google tracking-wide lg:min-h-screen w-full flex flex-col bg-[url('/ww.png')] bg-cover bg-center relative">
      <div className="skillsdivbg overflow-hidden absolute -z-50 transform scale-150 -translate-y-[200px] h-[700px] w-[700px] blur bg-[url('/cube.png')] bg-cover bg-center"></div>
      <motion.div
        initial={{ filter: "blur(10px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 1.4}}
        viewport={{ once: true }} // important
        className="px-5 sm:px-9 lg:px-28 mt-20 lg:mt-32 mb-20 lg:mb-64 flex flex-col gap-8 items-start"
      >
        <h1 className="font-medium text-5xl md:text-5xl lg:text-6xl text-black">
          Let’s Connect!
        </h1>

        <h2 className="font-light font-afacadit text-3xl md:text-3xl lg:text-5xl text-black">
          Whether it’s a project idea, a collaboration, a job opportunity, or
          just saying hi,
          <br />
          <br />
          I’d love to hear from you. Drop me a message and I’ll get back to you
          soon!
        </h2>

        {/* Connect Button */}
        <a
          onClick={() => navigate("/form")}
          href="#contact"
          className="flex w-48 justify-center rounded-3xl bg-blue-300 border-4 border-blue-500 p-3 items-center text-center text-lg lg:text-2xl font-medium text-black hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out"
        >
          Connect!
        </a>

        {/* Resume Button for Mobile */}
        <a
          target="__blank__"
          href="https://drive.google.com/file/d/1W3Zkl6u6mC3oAeoOAUARjkS_2bo9qDQt/view?usp=sharing"
          className="md:hidden flex w-48 justify-center rounded-3xl bg-blue-300 border-4 border-blue-500 p-3 items-center text-center text-lg lg:text-2xl font-medium text-black hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out"
        >
          Resume
        </a>
      </motion.div>
    </div>
  );
}
