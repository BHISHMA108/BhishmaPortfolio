
const aboutMe = () => {
  return (
    <div
      id="aboutme"
      className='relative font-google px-9 lg:px-28 min-h-[600px] md:min-h-[560px] lg:min-h-[650px] w-full flex flex-col justify-center items-center bg-[url("/aboutbg.png")] bg-cover'
    >
      <div className="z-10">
        <h1 className="text-4xl lg:text-6xl font-medium mb-6">About Me</h1>
        <p className="hidden md:block text-2xl lg:text-3xl font-normal tracking-wider text-justify ">
          Hi, I’m Uday Dandekar, a frontend developer and engineering student at
          VIT Pune, specializing in React.js, Tailwind CSS, and modern web
          development. I enjoy building clean, responsive interfaces and
          exploring AI and 3D web technologies like Three.js and React Three
          Fiber. Currently, I’m working at Herbs Magic as Frontend Intern and
          contributing to projects like Gyansetu and EfficienSee, blending tech
          with purpose. I'm always eager to learn, create, and solve real-world
          problems through code.
        </p>
        <p className="block md:hidden text-2xl lg:text-3xl font-extralight tracking-wider text-just  ">
          I’m Uday Dandekar, a frontend developer and engineering student at VIT
          Pune. I specialize in React.js, Tailwind CSS, and UI development, with
          a growing interest in AI and 3D web technologies. Currently, I work as
          a Frontend Intern at Herbs Magic and contribute to impactful projects
          like Gyansetu and EfficienSee.
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
