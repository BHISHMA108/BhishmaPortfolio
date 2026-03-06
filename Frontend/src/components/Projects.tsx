import { motion } from "motion/react";

export default function mainSection() {
  return (
    <>
      <motion.div
        id="projects"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        viewport={{ once: true }} // important
        whileInView={{ opacity: 6.5, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        className="relative font-google tracking-wider bg-[url('/pro.jpg')]  bg-blur-lg bg-black/10 bg-contain pb-16 rounded-4xl min-h-screen px-9 mt-11 pt-14"
      >
        <div className=" relative pb-14">
          <h1 className="lg:px-20 text-5xl lg:text-6xl text-black font-medium">
            Projects
          </h1>
        </div>
        <div className="max-w-7xl h-full text-black mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-7 w-full">
          {/* HERBS MAGIC PROJECT */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className=" bg-[url('/pro5.jpg')] p-11 min-h-[250px] lg:min-h-[450px] flex flex-col gap-2 justify-start pl-3 font-medium text-4xl rounded-3xl"
          >
            <h1 className="text-4xl lg:text-5xl px-4">Herbs Magic</h1>

            <div className="flex  flex-wrap justify-start">
              <a
                className="text-[14px] lg:text-2xl text-blue-500 px-4"
                href="https://www.theherbsmagic.com/"
                target="__blank__"
              >
                Live Demo 1
              </a>
              <a
                className="text-[14px] lg:text-2xl text-blue-500 px-4"
                href="https://webinar.theherbsmagic.com/"
                target="__blank__"
              >
                Live Demo 2
              </a>
              {/* <a
                className="text-[14px] lg:text-2xl text-blue-500 px-4"
                href="https://github.com/BHISHMA108/Herbs_Magic.git"
                target="__blank__"
              >
                GitHub
              </a> */}
            </div>

            {/* Desktop / Tablet */}
            <p className="hidden md:block font-extralight text-2xl px-4">
              <span className="text-[15px]">
                <span className="text-red-500 font-medium">TechStack: </span>
                Next.js, MERN, React Query, Nginx, MongoDB Atlas, Tailwind CSS,
                Razorpay, NodeMailer
              </span>
              <br />
              <br />
              Herbs Magic is a scalable MERN-based e-commerce platform for
              herbal products with integrated webinar and workshop registration.
              The platform includes features like Cart, Wishlist, FAQ,
              responsive UI, and a Meditation & Yoga registration module with
              Razorpay payments. All data and logs are securely stored in
              MongoDB, and the system is deployed using Nginx with reverse proxy
              and load balancing to support 500+ active users.
            </p>

            {/* Mobile */}
            <p className="block md:hidden font-extralight text-[17px] lg:text-2xl p-5">
              <span className="text-[11px] lg:text-[15px]">
                <span className="text-red-500 font-medium">TechStack: </span>
                Next.js, MERN, React Query, Nginx, MongoDB Atlas, Tailwind CSS,
                Razorpay
              </span>
              <br />
              <br />
              E-commerce platform for herbal products with webinar registration
              and online payments. Features include Cart, Wishlist, responsive
              UI, and a Yoga & Meditation booking module with Razorpay, fully
              integrated into a unified MERN backend and deployed via Nginx on a
              subdomain.
            </p>
          </motion.div>

          {/* EFFICIENSEE */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            viewport={{ once: true }} // important
            whileInView={{ opacity: 2.5, filter: "blur(0px)" }}
            transition={{ duration: 0.9 }}
            className="bg-[url('/pro5.jpg')] bg-center bg-cover min-h-[210px] lg:min-h-[450px] h-full flex flex-col p-11 gap-2 justify-start pl-3 font-medium text-4xl rounded-3xl "
          >
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
                MERN, Framer Motion, JavaScript, Firebase, Tailwind CSS, Flask,
                Locomotive.js, ShadcnUI, Machine Learning{" "}
              </span>{" "}
              &nbsp; <br />
              <br />
              EfficienSee, an AI-powered Employee Productivity Monitoring System
              designed to track and visualize employee efficiency in real-time.
              The platform includes webcam-based face detection, tab switch
              tracking, and active/inactive time logging. Employees get
              personalized dashboards with 30-day productivity graphs where All
              logs are securely stored in MongoDB.
            </p>
            <p className="block md:hidden font-extralight text-[17px]  lg:text-2xl p-5">
              <span className="text-[11px] lg:text-[15px]">
                <span className="text-red-500 font-medium">TechStack: </span>{" "}
                MERN, Framer Motion, JavaScript, Tailwind CSS, Locomotive.js,
                ShadcnUI, Machine Learning{" "}
              </span>{" "}
              &nbsp; <br />
              <br />
              EfficienSee is an AI-based productivity tracker with face
              detection, tab monitoring, and activity logging. It offers 30-day
              dashboards for employees and team insights for managers, with all
              data stored securely in MongoDB.
            </p>
          </motion.div>

          {/* GYANSETU */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            viewport={{ once: true }} // important
            whileInView={{ opacity: 2.5, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="bg-[url('/pro1.jpg')]  bg-center bg-cover w-full p-11 min-h-[250px] lg:min-h-[450px] flex flex-col gap-2 justify-start pl-3 font-medium text-4xl rounded-3xl  "
          >
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
                Docker, MERN, Framer Motion, JavaScript, Firebase, OpenAI API,
                Tailwind CSS, Locomotive.js, ShadcnUI, ML{" "}
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
                Docker, MERN, Framer Motion, JavaScript, Firebase, OpenAI API,
                Tailwind CSS, Locomotive.js, ShadcnUI, Machine Learning{" "}
              </span>{" "}
              &nbsp; <br />
              <br />
              Gyansetu is a multi-faith platform offering teachings, music,
              stories, timelines, quizzes, and AI-generated content across major
              religions—built with React, Node.js, and MongoDB for a modern
              spiritual experience.
            </p>
          </motion.div>
          <motion.div className=" w-full p-11 min-h-[30px] lg:min-h-[450px] flex flex-col gap-2 justify-start pl-3 font-medium text-4xl rounded-3xl  ">
          <div className="text-4xl font-">More projects are coming soon...</div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
