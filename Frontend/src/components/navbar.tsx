import { useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navItems = [
    { name: "About me", id: "aboutme" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
    { name: "Contacts", id: "contacts" },
    {
      name: "Resume",
      id: null,
      link: "https://drive.google.com/file/d/1W3Zkl6u6mC3oAeoOAUARjkS_2bo9qDQt/view?usp=sharing",
    },
  ];

  const refs = navItems.map(() => useRef(null));

  const handleHover = (index: number) => {
    gsap.to(refs[index].current, {
      borderBottomColor: "#6A89A7",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverOut = (index: number) => {
    gsap.to(refs[index].current, {
      borderBottomColor: "transparent",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="hidden md:block">
      <div
        className="font-google w-full fixed top-0 left-0 z-50 
                    bg-white/40 backdrop-blur-md
                    flex justify-center gap-6 items-center 
                    h-[60px] text-[16px] text-black"
      >
        {navItems.map((item, index) => (
          <p
            key={item.name}
            ref={refs[index]}
            onClick={() => {
              if (item.id) {
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHoverOut(index)}
            className=" border-b-2 border-transparent cursor-pointer"
          >
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
