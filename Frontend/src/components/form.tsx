import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";

const Form = () => {
  const mouseCursor = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input changes
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // FRONTEND VALIDATION
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }
    if (formData.message.length < 10) {
      alert("Message must be at least 10 characters.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post(
        "https://bhishmaportfolio.onrender.com/api/form",
        formData
      );

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error: any) {
      if (error.response) {
        // Backend validation error
        alert(error.response.data.error || "Error submitting form.");
        console.error("Backend error:", error.response.data);
      } else {
        // Network or other error
        alert("Network or server error.");
        console.error("Error submitting form:", error);
      }
    }
  }

  // Cursor animation
  useEffect(() => {
    const el = mouseCursor.current;
    if (!el) return;

    Object.assign(el.style, {
      position: "fixed",
      left: "0px",
      top: "0px",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      zIndex: "999",
    });

    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;
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

    // Hover effect for interactive elements
    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseenter", () =>
        gsap.to(mouseCursor.current, { scale: 2, duration: 0.3 })
      );
      el.addEventListener("mouseleave", () =>
        gsap.to(mouseCursor.current, { scale: 1, duration: 0.3 })
      );
    });

    gsap.set(el, { scale: 1.6 });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="flex h-screen ">
        <div className="flex absolute z-30 justify-start items-center">
          <span
            onClick={() => navigate("/")}
            className="flex p-7 gap-2 justify-center items-start hover-target cursor-pointer"
          >
            <img className="object-cover h-6" src="/gobackicon.png" alt="" />
            <p className="text-blue-600 font-bold font-google">Go Back</p>
          </span>
        </div>
        <div className="relative z-0 lg:mt-5 lg:p-9 min-h-[600px] font-google w-full flex flex-col justify-center items-center ">
          <div
            ref={mouseCursor}
            className="border relative z-50 rounded-4xl h-11 w-11 bg-[url('/star.png')] bg-center bg-cover pointer-events-none newcursor"
            style={{
              borderColor: "white",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          />

          <form
            onSubmit={handleSubmit}
            className="transition bg-[url('/formbgglass.jpg')] w-full py-7 duration-700 delay-100 ease-in-out flex justify-center bg-center bg-cover items-center rounded-4xl"
          >
            <div className="flex items-center w-full justify-center">
              <div className="p-11 md:mx-9 w-full rounded-4xl flex flex-col gap-4 backdrop-blur-2xl bg-white/20">
                <h1 className="text-3xl font-bold">Form</h1>

                {/* Name */}
                <div>
                  <div className="h-8 gap-1 flex items-center">
                    <img
                      className="object-cover w-6 h-6"
                      src="/personicon.png"
                      alt=""
                    />
                    <h3>Name</h3>
                  </div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 rounded-md"
                  />
                </div>

                {/* Phone */}
                <div>
                  <div className="h-8 gap-1 flex items-center">
                    <img
                      className="object-cover w-6 h-6"
                      src="/contacticon.png"
                      alt=""
                    />
                    <h3>Phone</h3>
                  </div>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full p-2 rounded-md"
                  />
                </div>

                {/* Email */}
                <div>
                  <div className="h-8 gap-1 flex items-center">
                    <img
                      className="object-cover w-6 h-6"
                      src="/emailicon.png"
                      alt=""
                    />
                    <h3>Email</h3>
                  </div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="h-8 gap-1 flex items-center">
                    <img
                      className="object-cover w-6 h-6"
                      src="/messageicon.png"
                      alt=""
                    />
                    <h3>Message</h3>
                  </div>
                  <input
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your message"
                    className="w-full p-2 rounded-md"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="hover-target rounded-3xl bg-blue-300 border-4 border-blue-600 text-black hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out p-2"
                >
                  Submit
                </button>
              </div>
              <div className="h-full w-full hidden lg:block font-ameora font-bold text-9xl">
                "Let’s Make Something{" "}
                <span className="font-ameora text-9xl underline hover:text-blue-600 brightness-200 -underline-offset-4 hover:underline-offset-4 transition-all duration-700 delay-75 ease-in-out hover:text-shadow-blue-900 ">Great<br /></span>
                Together"
              </div>
              {/* <span className="font-cur  text-9xl underline hover:text-rose-600 brightness-200 -underline-offset-4 hover:underline-offset-4 transition-all duration-700 delay-75 ease-in-out "></span> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
