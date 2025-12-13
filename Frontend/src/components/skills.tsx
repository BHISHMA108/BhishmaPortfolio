import {motion} from 'motion/react';

function Skills() {

  return (
    <div id="skills" className="min-h-screen font-google relative bg-[url('/skillbg.png')] bg-cover">
        <h1 className=' relative z-10 px-9 lg:px-28 text-5xl lg:text-6xl font-medium'>Skills</h1>

        <div className="skillsdivbg absolute -z-50 transform scale-350 translate-y-[600px] translate-x-[1100px] h-[700px] w-[700px] blur bg-[url('/skillsbg.png')] bg-cover bg-center">

        </div>


      <div className="grid grid-row-2 sm:grid-row-3 md:grid-cols-6 md:gap-7 items-center relative p-[20px] md:p-[100px]">
        <motion.div 
        
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="col-span-2 hover:bg-[#006EBB] hover:shadow-2xl hover:shadow-[#006EBB] active:bg-[#006EBB] active:shadow-2xl active:shadow-[#006EBB] focus:bg-[#006EBB] focus:shadow-2xl focus:shadow-[#006EBB] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904941/docker_hhj0oa.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl"
            loading="lazy"
            alt=""
          />
        </motion.div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#00D9FD] hover:shadow-2xl hover:shadow-[#00D9FD] active:bg-[#00D9FD] active:shadow-2xl active:shadow-[#00D9FD] focus:bg-[#00D9FD] focus:shadow-2xl focus:shadow-[#00D9FD] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904959/react_ncpzdd.jpg"
            className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#E44D26] hover:shadow-2xl hover:shadow-[#E44D26] active:bg-[#E44D26] active:shadow-2xl active:shadow-[#E44D26] focus:bg-[#E44D26] focus:shadow-2xl focus:shadow-[#E44D26] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904952/image_dg3fhi.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="col-span-2 hover:bg-[#323330] hover:shadow-2xl hover:shadow-[#323330] active:bg-[#323330] active:shadow-2xl active:shadow-[#323330] focus:bg-[#323330] focus:shadow-2xl focus:shadow-[#323330] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904955/JavaScript_gtbnbl.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-[#F0DB4F] rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#2965F1] hover:shadow-2xl hover:shadow-[#2965F1] active:bg-[#2965F1] active:shadow-2xl active:shadow-[#2965F1] focus:bg-[#2965F1] focus:shadow-2xl focus:shadow-[#2965F1] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904942/css_hgwdtk.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="col-span-3 p-2 rounded-3xl bg-white/5 backdrop-blur-md
    transition duration-500 hover:bg-gradient-to-r 
    hover:from-purple-500/40 hover:via-blue-900/40 hover:to-cyan-700/40
    active:bg-gradient-to-r active:from-purple-500/40 active:via-blue-900/40 active:to-cyan-700/40
    focus:bg-gradient-to-r focus:from-purple-500/40 focus:via-blue-900/40 focus:to-cyan-700/40
    hover:shadow-xl hover:shadow-purple-700/70
    active:shadow-xl active:shadow-purple-700/70
    focus:shadow-xl focus:shadow-purple-700/70 transition-all duration-300 ease-in-out">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904981/three_ptx4vy.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-black rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#FFFFFF] hover:shadow-2xl sha hover:shadow-blue-700 active:bg-[#FFFFFF] active:shadow-2xl active:shadow-blue-700 focus:bg-[#FFFFFF] focus:shadow-2xl focus:shadow-blue-700 transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904982/ts_y6kwvd.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-[#3178C6] rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#CA3132] hover:shadow-2xl hover:shadow-[#CA3132]  active:bg-[#CA3132] active:shadow-2xl active:shadow-[#CA3132] focus:bg-[#CA3132] focus:shadow-2xl focus:shadow-[#CA3132] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904953/java_ukwfxu.svg"
            className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="col-span-2 hover:bg-[#000000] hover:shadow-2xl hover:shadow-black active:bg-[#000000] active:shadow-2xl active:shadow-black focus:bg-[#000000] focus:shadow-2xl focus:shadow-black transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904943/ex_kgubdo.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#333333] hover:shadow-xl hover:shadow-[#8FC708] active:bg-[#333333] active:shadow-xl active:shadow-[#8FC708] focus:bg-[#333333] focus:shadow-xl focus:shadow-[#8FC708] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904957/node_fabyal.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-[#8FC708] rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="col-span-2 hover:bg-[#00ED64] hover:shadow-2xl hover:shadow-[#00ED64] active:bg-[#00ED64] active:shadow-2xl active:shadow-[#00ED64] focus:bg-[#00ED64] focus:shadow-2xl focus:shadow-[#00ED64] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904956/mongo_vbqdfg.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-[#001E2B] rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#FFFFFF] hover:shadow-xl hover:shadow-[#FF6C37] active:bg-[#FFFFFF] active:shadow-xl active:shadow-[#FF6C37] focus:bg-[#FFFFFF] focus:shadow-xl focus:shadow-[#FF6C37] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904958/postman_eeqqa6.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-[#FF6C37] rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="hover:bg-[#00D9FD] hover:shadow-2xl hover:shadow-[#00D9FD] active:bg-[#00D9FD] active:shadow-2xl active:shadow-[#00D9FD] focus:bg-[#00D9FD] focus:shadow-2xl focus:shadow-[#00D9FD] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904976/tailwind_xg9i3w.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-[#161D2D] rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

        <div 
          onTouchStart={(e)=>e.currentTarget.classList.add("!scale-[1.03]")}
          onTouchEnd={(e)=>e.currentTarget.classList.remove("!scale-[1.03]")}
          className="col-span-2 hover:bg-[#000000] hover:shadow-2xl hover:shadow-[#000000] active:bg-[#000000] active:shadow-2xl active:shadow-[#000000] focus:bg-[#000000] focus:shadow-2xl focus:shadow-[#000000] transition duration-500 p-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904942/github_hdjwrz.png"
            className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl"
            loading="lazy"
            alt=""
          />
        </div>

      </div>
    </div>
  );
}

export default Skills;
