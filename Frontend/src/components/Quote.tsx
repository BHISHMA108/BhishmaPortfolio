const Quote = () => {
  return (
    <div className="flex flex-wrap min-h-[100px] md:min-h-[300px] my-16 lg:min-h-[400px] h-auto text-black font-bold w-full justify-center p-7 items-center text-center font-cur">
      <span className="relative z-10 text-4xl md:text-6xl lg:text-7xl">
        "Every
      </span>{" "}
      <span
        className="group relative text-4xl md:text-6xl lg:text-7xl font-google font-extralight rounded-3xl m-3
          text-rose-600
          transition duration-700 ease-in-out
          hover:text-white hover:bg-rose-600
          active:text-white active:bg-rose-600
          focus:text-white focus:bg-rose-600
          px-2 py-1 cursor-pointer"
      >
        &nbsp; Error &nbsp;
      </span>
      <span className="relative z-10 text-4xl md:text-6xl lg:text-7xl">
        is a hidden mentor."
      </span>
    </div>
  );
};

export default Quote;
