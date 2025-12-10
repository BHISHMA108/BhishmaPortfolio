const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col font-google tracking-wide justify-center px-1 lg:px-36"
    >
      <div className="min-h-screen w-full rounded-2xl bg-white md:bg-[url('/letter.jpg')] bg-center bg-cover justify-center items-center">
        <div className="flex flex-col w-full lg:px-20 md:py-[110px] relative gap-5">
          <h1 className="text-6xl pl-7 md:text-8xl lg:text-9xl mb-[40px] font-cur text-rose-600 relative md:mx-[100px]">
            Experience
          </h1>

          {/* Experience Block 1 */}
          <div className="group relative overflow-hidden flex flex-col justify-center min-h-[250px] md:min-h-[300px] text-black rounded pr-5 bg-cover border-transparent hover:border-t-2 hover:border-b-2 hover:border-pink-700 transition-all duration-700 ease-in-out">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[url('/gsa.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 ease-in-out"></div>
            {/* Content */}
            <div className="relative   px-5 md:px-24">
              <h2 className="text-3xl lg:text-4xl font-semibold transition-colors duration-700 ease-in-out">
                Google Student Ambassador at Google
              </h2>
              <p className="mt-2">
                <span className="font-bold">Location:</span> Pune, Maharashtra, India (Remote) <br />
                <span className="font-bold">Duration:</span> August 2025 – Present
              </p>
              <p className="mt-4 text-[15px] lg:text-[18px] list-disc">
                ● Built the responsive frontend of the Herbs Magic website using React.js and Tailwind CSS, ensuring mobile-first design and smooth user interactions.
                <br />
                ● Collaborated closely with design and backend teams to implement UI/UX improvements, optimize performance, and maintain clean, reusable component-based architecture.
                <br />
                ● Integrated dynamic content using APIs and contributed to accessibility and SEO enhancements.
              </p>
            </div>
          </div>

          {/* Experience Block 2 */}
          <div className="group relative overflow-hidden flex flex-col justify-center min-h-[250px] md:min-h-[300px] text-black rounded pr-5 bg-cover border-transparent hover:border-t-2 hover:border-b-2 hover:border-pink-700 transition-all duration-700 ease-in-out">
            <div className="absolute inset-0 bg-[url('/gsa.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 ease-in-out"></div>
            <div className="relative   px-5 md:px-24">
              <h2 className="text-3xl lg:text-4xl font-semibold transition-colors duration-700 ease-in-out">
                Frontend Developer Intern At Herbs Magic
              </h2>
              <p>
                <span className="font-bold">Location:</span> Pune, Maharashtra, India (Remote) <br />
                <span className="font-bold">Duration:</span> March 2025 – August 2025 (6 mos)
              </p>
              <p className="mt-4 text-[15px] lg:text-[18px]">
                ● Represented Google as a Student Ambassador at VIT Pune by leading campus outreach initiatives, organizing hands-on workshops, and hosting interactive events. Successfully onboarded and engaged 200+ new users through QR-based signups, technical sessions, and community-driven activities, fostering awareness and adoption of Google’s products and ecosystem.
              </p>
            </div>
          </div>

          {/* Experience Block 3 */}
          <div className="group relative overflow-hidden flex flex-col justify-center min-h-[250px] md:min-h-[300px] text-black rounded pr-5 bg-cover border-transparent hover:border-t-2 hover:border-b-2 hover:border-pink-700 transition-all duration-700 ease-in-out">
            <div className="absolute inset-0 bg-[url('/gsa.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 ease-in-out"></div>
            <div className="relative   px-5 md:px-24">
              <h2 className="text-3xl lg:text-4xl font-semibold transition-colors duration-700 ease-in-out">
                Campus Ambassador Intern at Devtown
              </h2>
              <p>
                <span className="font-bold">Location:</span> Pune, Maharashtra, India (Remote) <br />
                <span className="font-bold">Duration:</span> Feb 2025 – Feb 2025 (1 month)
              </p>
              <p className="mt-4 text-[15px] lg:text-[18px]">
                ● Served as a liaison between Devtown and my campus, promoting workshops, events, and learning initiatives. Helped strengthen the student tech community by sharing updates, networking opportunities, and industry insights. Developed marketing, leadership, and community-building skills while managing outreach and engagement activities.
              </p>
            </div>
          </div>

          {/* Experience Block 4 */}
          <div className="group relative overflow-hidden flex flex-col justify-center min-h-[250px] md:min-h-[350px] text-black rounded pr-5 bg-cover border-transparent hover:border-t-2 hover:border-b-2 hover:border-pink-700 transition-all duration-700 ease-in-out">
            <div className="absolute inset-0 bg-[url('/gsa.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 ease-in-out"></div>
            <div className="relative   px-5 md:px-24">
              <h2 className="text-3xl lg:text-4xl font-semibold transition-colors duration-700">
                Game Dev+, VIT Pune
              </h2>
              <p>
                <span className="font-bold">Location:</span> Pune, Maharashtra, India <br />
                <span className="font-bold">Duration:</span> Nov 2023 – Jun 2025 (1 yr 8 mos)
              </p>

              <div className="w-full md:w-[86%] mt-4">
                <p className="text-[18px] lg:text-2xl font-semibold">Level Designing and Ideation Head</p>
                <p className="text-base">Part-time · Aug 2024 – Jun 2025 · 11 Months</p>
                <p className="text-[15px] lg:text-[18px]">● Spearheaded the creation of innovative game levels, incorporating user feedback. Coordinated brainstorming sessions, mentored junior members, and enhanced gameplay.</p>

                <br />

                <p className="text-[18px] lg:text-2xl font-semibold">Level Designing and Ideation Coordinator</p>
                <p className="text-base">Part-time · Nov 2023 – Sep 2024 · 11 Months</p>
                <p className="text-[15px] lg:text-[18px]">● Assisted in conceptualizing and designing engaging game levels aligned with gameplay mechanics. Facilitated cross-functional team discussions and refined level flow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
