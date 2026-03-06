import { motion } from "motion/react";

const aboutMe = () => {
  return (
    <div
      id="aboutme"
      className="relative -z-10 flex gap-4 font-google px-9 lg:my-16 lg:px-28 min-h-[600px] md:min-h-[560px] lg:min-h-[650px] w-full  items-center bg--500 bg-cover"
    >
      <div className="w-full flex">
        <motion.div
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }} // important
          transition={{ duration: 2.5 }}
          className=" h-full lg:min-h-[450px]  bg-[url('/.jpg')] bg-cover bg-center p-7 border border-lb-4 my-9 sm:my-0 rounded-4xl w-full"
        >
          <h1 className="text-4xl lg:text-6xl font-medium mb-6">About Me</h1>
          <p className="hidden md:block text-[18px] md:text-2xl lg:text-3xl font-normal tracking-wider text-justify ">
            I’m Uday Dandekar, a final-year engineering student at VIT Pune with
            hands-on experience building scalable web applications using React,
            Tailwind CSS, Docker, and the MERN stack. I have worked as a
            Frontend Developer Intern at Herbs Magic, contributed to
            production-grade projects such as GyanSetu and EfficienSee, and
            served as a Google Student Ambassador. I’m particularly interested
            in frontend development and enjoy building interactive, responsive
            UIs with AI-driven features to solve real-world engineering
            problems.
          </p>
          <p className="block md:hidden text-2xl  lg:text-3xl tracking-wider   ">
            I’m Uday Dandekar, a frontend-focused software developer and final
            year engineering student at VIT Pune, specializing in React,
            Tailwind CSS, and Docker. I’ve interned at Herbs Magic, served as a
            Google Student Ambassador, and have built projects like GyanSetu and
            EfficienSee.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className="flex ml-5 relative  flex-col hidden lg:block justify-start items-center  md:text-3xl lg:text-7xl w-full rounded-4xl bg-[url('/count.jpg')] bg-cover bg-center "
        >
          <div className="flex relative flex-col ml-7 h-full justify-center items-start">
            <div className="p-4 flex justify-between items-center">
              <span className="pr-6">11+</span>
              <span className="lg:text-3xl text-2xl">
                React Projects Completed
              </span>
              <br />
            </div>

            <div className="p-4 flex justify-between items-center">
              <span className="pr-6">5+</span>
              <span className="lg:text-3xl text-2xl">
                MERN Projects Completed
              </span>
              <br />
            </div>

            <div className="p-4 flex justify-between items-center">
              <span className="pr-2">5⭐</span>
              <span className="lg:text-3xl text-2xl">
                Java & Problem Solver on HackerRank
              </span>
              <br />
            </div>
            {/* <div className="p-4 flex justify-between items-center">
          <span className="pr-5">5⭐</span>
          <span className="lg:text-3xl text-2xl">Problem Solving</span>
          <br />
        </div> */}
            <div className="p-4 flex justify-between items-center">
              <span className="pr-5">460+</span>
              <span className="lg:text-3xl text-2xl">
                LeetCode Problems Solved
              </span>
              <br />
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="pr-5">1691+</span>
              <span className="lg:text-3xl text-2xl"> Rating in Leetcode</span>
              <br />
            </div>
            {/* <div>
          <span>15+</span>
          <span> Projects Completed</span>
          <br />
        </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default aboutMe;
