import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Intro() {
  const mouseCursor = useRef<HTMLDivElement>(null);

useEffect(() => {
  const el = mouseCursor.current;
  if (!el) return;

  // baseline style
  Object.assign(el.style, {
    position: "fixed",
    left: "0px",
    top: "0px",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: "9",
  });

  // cursor target coordinates
  let targetX = 0;
  let targetY = 0;

  // actual coordinates (for smooth lerp)
  let currentX = 0;
  let currentY = 0;

  const smoothFactor = 0.12; // smaller = more smooth

  const onMove = (e: MouseEvent) => {
    targetX = e.clientX;
    targetY = e.clientY;
  };

  window.addEventListener("mousemove", onMove);

  // GSAP quick setters
  const setLeft = gsap.quickSetter(el, "left", "px");
  const setTop = gsap.quickSetter(el, "top", "px");

  // animation loop (lerp)
  const animate = () => {
    currentX += (targetX - currentX) * smoothFactor;
    currentY += (targetY - currentY) * smoothFactor;

    setLeft(currentX);
    setTop(currentY);

    requestAnimationFrame(animate);
  };
  animate();

  // hover in/out scaling
  const onEnter = () => gsap.to(el, { scale:2, duration: 0.9, ease: "power2.out" });
  const onLeave = () => gsap.to(el, { scale: 0, duration: 0.9, ease: "power2.out" });

  window.addEventListener("mouseenter", onEnter);
  window.addEventListener("mouseleave", onLeave);

  // initial size
  gsap.set(el, { scale: 1.6 });

  return () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseenter", onEnter);
    window.removeEventListener("mouseleave", onLeave);
  };
}, []);


  return (
    <div
      id="home"
    className="relative font-google min-h-screen w-full bg-center bg-[url('/firstbg.png')] bg-cover flex flex-col justify-center overflow-x-hidden">
      <div
        ref={mouseCursor}
        className="border rounded-4xl h-11 w-11 bg-[url('/cursor.png')] bg-cover pointer-events-none
        r-cursor"
        style={{
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: "1px",
          // remove Tailwind positioning classes here to avoid conflicts
        }}
      />
      <div className="z-10  relative top-0 left-0 text-7xl md:text-8xl lg:text-9xl flex justify-start items-center font-medium pl-9 overflow-hidden">
        <span className="relative z-10 text-black font-google">Hi, I’m</span>
      </div>

      <div className="z-10 flex justify-start items-center font-google relative h-[240px] md:h-[270px] lg:h-[380px] text-8xl md:text-[110px] lg:text-[151px] pl-3 md:pl-21 lg:pl-50 items-baseline overflow-hidden">
        <span className="relative z-10 text-[#ff2828] font-cur">
          Bhishma Dandekar,
        <span className=" font-google text-black font-extralight text-2xl md:text-3xl lg:text-3xl hidden lg:block z-10">aka Uday</span>
        </span>
      </div>
      <span className="text-2xl block lg:hidden pl-7 lg:pl-14 z-10">aka Uday</span>
      <div className="z-10">
        <p className="text-4xl font-google text-black font-light pl-7 lg:pl-14 pt- lg:pl-50">
          Passionate Software Developer
        </p>
      </div>
    </div>
  );
}
