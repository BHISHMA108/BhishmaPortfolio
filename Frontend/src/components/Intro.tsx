import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react"

export default function Intro() {
  const mouseCursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mouseCursor.current;
    if (!el) return;

    Object.assign(el.style, {
      position: "fixed",
      left: "0px",
      top: "0px",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      zIndex: "10",
    });

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const smoothFactor = 0.12;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    const setLeft = gsap.quickSetter(el, "left", "px");
    const setTop = gsap.quickSetter(el, "top", "px");

    const animate = () => {
      currentX += (targetX - currentX) * smoothFactor;
      currentY += (targetY - currentY) * smoothFactor;

      setLeft(currentX);
      setTop(currentY);

      requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () =>
      gsap.to(el, { scale: 2, duration: 0.9, ease: "power2.out" });
    const onLeave = () =>
      gsap.to(el, { scale: 0, duration: 0.9, ease: "power2.out" });

    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    gsap.set(el, { scale: 1.6 });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={mouseCursor}
        className="border relative z-30 rounded-4xl h-11 w-11 bg-[url('/star.png')] bg-center bg-cover pointer-events-none newcursor"
        style={{
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: "1px",
        }}
      />

    <div
      id="home"
      className="relative z-0 font-afacad rounded-bl-4xl min-h-screen w-full bg-center bg-[url('/intro2.png')] bg-transparent bg-cover flex flex-col justify-center"
    >
        <div className="skillsdivbg  absolute -z-50 transform scale-50 -translate-x-[450px] -translate-y-[100px] h-[700px] w-[700px] blur-xl bg-[url('/tube.png')] bg-cover bg-center">

        </div>
        <div className="skillsdivbgrev overflow-hidden absolute z-[9999] transform scale-105 translate-x-[990px] translate-y-[300px] h-[700px] w-[700px] blur-xl bg-[url('/sphere.png')] bg-cover bg-center">
{/* bottom right */}
        </div>
        <div className="skillsdivbg overflow-hidden absolute -z-50 transform scale-75 translate-x-[600px] -translate-y-[300px] h-[700px] w-[700px] blur-xl bg-[url('/cone.png')] bg-cover bg-center">
{/* middle */}
        </div>

      <div className="flex flex-col justify-center gap-6 md:gap-9 items-center text-center px-4">

        {/* Hi, I'm */}
        <motion.span initial={{opacity:0, filter: "blur(10px)"}} animate={{ opacity: 2.5, filter: "blur(0px)"}} transition={{duration:1}}  className="text-4xl md:text-6xl lg:text-8xl">Hi, I’m</motion.span>

        {/* Uday + Bhishma */}
        <span className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <motion.span initial={{opacity: 0, filter: "blur(10px)"}} animate={{opacity: 2.5, filter: "blur(0px)"}} transition={{duration:1, delay: 0.5}} className="rounded-3xl text-5xl md:text-7xl lg:text-[160px]">
            Uday Dandekar,
          </motion.span>

          <motion.span initial={{opacity: 0, filter: "blur(10px)"}} animate={{opacity: 2.5, filter: "blur(0px)"}} transition={{duration:1, delay: 0.5}} className="relative -z-40 text-2xl md:text-3xl lg:text-4xl">
            aka Bhishma
          </motion.span>
        </span>

        {/* Subtitle */}
        <motion.span initial={{opacity: 0, filter: "blur(10px)"}} animate={{opacity: 2.5, filter: "blur(0px)"}} transition={{duration:1, delay: 0.9}} className="text-2xl md:text-4xl lg:text-5xl text-gray-900">
          A Passionate Software Developer
        </motion.span>
      </div>
    </div>
    </>
  );
}
