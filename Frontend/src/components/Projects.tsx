import {motion} from "motion/react";


export default function mainSection() {
  return (
    <>
      <motion.div
        id="projects"
        initial={{opacity:0, filter: "blur(10px)"}}   viewport={{ once: true }} // important
 whileInView={{ opacity: 6.5, filter: "blur(0px)"}} transition={{duration:0.4}}  
        className="relative font-google tracking-wider bg-[url('/pro.jpg')] bg-[#384959] bg-blur-lg bg-black/10 bg-contain pb-16 rounded-4xl min-h-screen px-9 mt-11 pt-14"
      >
        <div className=" relative pb-14">
          <h1 className="lg:px-20 text-5xl lg:text-6xl text-black font-medium">
            Projects
          </h1>
        </div>
        <div className="max-w-7xl text-black mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-7 w-full">
          <motion.div initial={{opacity:0, filter: "blur(10px)"}}   viewport={{ once: true }} // important
 whileInView={{ opacity: 2.5, filter: "blur(0px)"}} transition={{duration:0.9}}  className="bg-[url('/pro1.jpg')] bg-center bg-cover min-h-[210px] lg:min-h-[450px] full flex flex-col p-11 gap-2 justify-start pl-3 font-medium text-4xl rounded-3xl ">
            <h1 className="text-4xl lg:text-5xl px-4">EfficienSee</h1>
            <div className="flex justify-start">
              <a
                className="text-[14px] lg:text-2xl text-blue-500 px-4"
                href="https://efficiencsee-frontend.onrender.com/"
                target="__blank__"
              >
                Live Demo
              </a>
              <a
                className="text-[14px] lg:text-2xl text-blue-500 px-4"
                href="https://drive.google.com/file/d/1Cismx_edYMk5Q9LdQ3f0tDOaWV6AwEeO/view?usp=sharing/"
                target="__blank__"
              >
                Video Link
              </a>
            </div>
            <p className="hidden md:block font-extralight text-2xl px-4">
              <span className="text-[15px]">
                <span className="text-red-500 font-medium">TechStack: </span>{" "}
                MERN, JavaScript, Tailwind CSS, Locomotive.js, Shadcn, Machine
                Learning{" "}
              </span>{" "}
              &nbsp; <br />
              <br />
              EfficienSee, an AI-powered Employee Productivity Monitoring System
              designed to track and visualize employee efficiency in real-time.
              The platform includes webcam-based face detection, tab switch
              tracking, and active/inactive time logging. Employees get
              personalized dashboards with 30-day productivity graphs where All logs are securely stored in MongoDB.
            </p>
            <p className="block md:hidden font-extralight text-[17px]  lg:text-2xl p-5">
              <span className="text-[11px] lg:text-[15px]">
                <span className="text-red-500 font-medium">TechStack: </span>{" "}
                MERN, JavaScript, Tailwind CSS, Locomotive.js, Shadcn, Machine
                Learning{" "}
              </span>{" "}
              &nbsp; <br />
              <br />
              EfficienSee is an AI-based productivity tracker with face
              detection, tab monitoring, and activity logging. It offers 30-day
              dashboards for employees and team insights for managers, with all
              data stored securely in MongoDB.
            </p>
          </motion.div>

          <motion.div initial={{opacity:0, filter: "blur(10px)"}}   viewport={{ once: true }} // important
 whileInView={{ opacity: 2.5, filter: "blur(0px)"}} transition={{duration:1.5}}  className="bg-[url('/pro5.jpg')]  bg-center bg-cover w-full p-11 min-h-[250px] lg:min-h-[450px] flex flex-col gap-2 justify-start pl-3 font-medium text-4xl rounded-3xl  ">
            <h1 className="text-4xl lg:text-5xl px-4">Gyansetu</h1>
            <div className="flex justify-start">
              <a
                className="text-[14px] lg:text-2xl text-blue-500 px-4"
                href="https://gyansetu-frontend-latest.onrender.com/"
                target="__blank__"
              >
                Live Demo
              </a>
              <a
                className="text-[14px] lg:text-2xl text-blue-500 px-4"
                href="https://drive.google.com/file/d/1uQ_pCRov4pVcqpecUzF5qLinVJPotySY/view?usp=sharing"
                target="__blank__"
              >
                Video Link
              </a>
            </div>
            <p className="hidden md:block font-extralight text-2xl px-4">
              <span className="text-[15px]">
                {" "}
                <span className="text-red-500 font-medium">TechStack: </span>
                Docker, MERN, JavaScript, Tailwind CSS, Locomotive.js, Shadcn,
                Machine Learning{" "}
              </span>{" "}
              &nbsp; <br />
              <br />
              Gyansetu is a web platform that helps users explore key teachings,
              books, devotional music, and stories from Hinduism, Sikhism,
              Islam, and Christianity. It features curated videos, spiritual
              timelines, translated Hanuman Chalisa, quizzes, and AI-powered
              podcast and story generators. Built with React, Node.js, and
              MongoDB, Gyansetu blends tradition with technology for a modern
              spiritual experience.
            </p>

            <p className="block md:hidden font-extralight text-[17px] lg:text-2xl p-5">
              <span className="text-[11px] lg:text-[15px]">
                {" "}
                <span className="text-red-500 font-medium">TechStack: </span>
                Docker, MERN, JavaScript, Tailwind CSS, Locomotive.js, Shadcn,
                Machine Learning{" "}
              </span>{" "}
              &nbsp; <br />
              <br />
              Gyansetu is a multi-faith platform offering teachings, music,
              stories, timelines, quizzes, and AI-generated content across major
              religions—built with React, Node.js, and MongoDB for a modern
              spiritual experience.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
