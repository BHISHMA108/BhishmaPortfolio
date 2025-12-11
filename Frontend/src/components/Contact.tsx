import { useState } from "react";

function Contacts() {
  const [Heart, setHeart] = useState(true);

  return (
    <div
      id="contacts"
      className="relative flex flex-col justify-around min-h-[500px] px-9 lg:px-16 font-google py-[10px] w-full  md:min-h-[491px] bg-[url('/contact.png')] bg-center  bg-cover "
    >
      <h1 className="z-10 text-5xl lg:text-5xl font-medium font-google text-black relative mt-12">
        Contacts
      </h1>
      <div className="relative z-10 flex justify-center flex-col pt-[20px] rounded-lg py-4 gap-2">
        <div className="flex gap-2 justify-start items-center">
        <img className=" w-9 h-9" src="/email.png" alt="" />
        <p className="text-blue-900">
          <span className="lg:text-[21px] text-[16px] font-bold gap-2 text-black">
            Email:
          </span>{" "}
          <a
            className="md:text-[16px] lg:text-[21px]"
            href="uday.dandekar.dev@gmail.com"
            target="_blank"
          >
            uday.dandekar.dev@gmail.com
          </a>
        </p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <img className=" w-9 h-9" src="/github.png" alt="" />
        <p className="text-blue-900">
          <span className="font-bold text-[16px] lg:text-[21px] text-black">
            Github:{" "}
          </span>{" "}
          <a
            className="md:text-[16px] lg:text-[21px]"
            href="https://github.com/BHISHMA108"
            target="_blank"
          >
            https://github.com/BHISHMA108
          </a>
        </p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <img className=" w-9 h-9" src="/linkedin.png" alt="" />
        <p className="text-blue-900">
          <span className="font-bold text-[16px] lg:text-[21px] text-black">
            LinkedIn:{" "}
          </span>{" "}
          <a
            className="md:text-[16px] lg:text-[21px]"
            href="https://www.linkedin.com/in/uday-dandekar/"
            target="_blank"
          >
            https://www.linkedin.com/in/uday-dandekar/
          </a>
        </p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <img className=" w-9 h-9" src="/portfolio.png" alt="" />
        <p className="text-blue-900">
          <span className="font-bold text-[16px] lg:text-[21px] text-black">
            Portfolio:{" "}
          </span>{" "}
          <a
            className="text-[14px] md:text-[16px] pr-72 lg:text-[21px]"
            href="https://bhishma-portfolio.vercel.app/"
            target="_blank"
          >
            Bhishma's Portfolio Website
          </a>
        </p>
        </div>
      </div>

      <div
        className="relative z-10 flex text-2xl px-11 md:text-3xl items-center  lg:text-4xl font-normal text-[#FF2828] justify-center font-google"
        onMouseEnter={() => setHeart(false)}
        onMouseLeave={() => setHeart(true)}

        /* ✅ Added for mobile devices */
        onTouchStart={() => setHeart(false)}
        onTouchEnd={() => setHeart(true)}
      >
        <p>
          Made with <button>{Heart ? "💗" : "💕"}</button> and Curiousity by
          Uday
        </p>
      </div>
    </div>
  );
}

export default Contacts;
