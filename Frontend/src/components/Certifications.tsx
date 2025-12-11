
const Certifications = () => {
  const certificates = [
    "/nvidia.png",
    "/meta.png",
    "/c1.png",
    "/iit.png",
    "/c4.png",
    "/link1.png",
    "/c2.png",
    "/merit.png",
    "/c3.png",
    "/link2.png",
    "/jp.png",
    "/c5.png",
    "/ot1.png",
    "/c6.png",
    "/aspire.png",
    "/c7.png",
    "/dev.png",
    "/cisco1.png",
    "/postman.png",
    "/Certificate.png",
  ];

  return (
    <div id="certifications" className="relative w-full font-google min-h-screen bg-cover py-20 overflow-hidden">
      <h1 className="z-10 relative px-9 lg:px-28 text-5xl font-medium lg:text-6xl text-black mb-12">
        Certifications
      </h1>

      {/* Slider Wrapper */}
      <div className="relative w-full h-[411px] rounded-4xl bg-[url('/cert.png')]  bg-[#7A97FF]/10 overflow-hidden bg-center shadow-lg">
        {/* Infinite Sliding Track */}
        <div className="flex gap-16 items-center animate-slide w-max h-[410px] ">
          {[...certificates, ...certificates].map((src, index) => (
            <div
              key={index}
              className="group relative min-w-[350px] max-w-[350px] h-[290px] bg-pi border-2 border-[#88BDF2] shadow-xl rounded-2xl bg-cover 
              bg-center p-5 hover:scale-125 transition-all duration-500 ease-in-out"
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out"
              ></div>

              {/* Certificate image */}
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="relative w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
