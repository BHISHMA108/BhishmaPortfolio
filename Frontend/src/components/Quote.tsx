import { motion } from "motion/react"


const Quote = () => {
  return (
    <motion.div
  initial={{ filter: "blur(10px)" }}
  whileInView={{ filter: "blur(0px)" }}
  transition={{ duration: 1.4 }}
  viewport={{ once: true }} // important
     className="flex flex-wrap min-h-[100px] md:min-h-[300px] my-16 lg:min-h-[400px] h-auto text-black font-bold w-full justify-center p-7 items-center text-center font-ameora">
      <span className="relative z-10 text-4xl md:text-6xl lg:text-7xl">
        "Every
      </span>{" "}
      <span
        className="group relative text-4xl md:text-6xl lg:text-7xl font-afacad font-extralight rounded-3xl m-3
          text-red-600
          transition duration-700 ease-in-out
          hover:text-white hover:bg-blue-600
          active:text-white active:bg-blue-600
          focus:text-white focus:bg-blue-600
          px-2 py-1 cursor-pointer"
      >
        &nbsp; Error &nbsp;
      </span>
      <span className="relative z-10 text-4xl md:text-6xl lg:text-7xl">
        is a hidden mentor."
      </span>
    </motion.div>
  );
};

export default Quote;
