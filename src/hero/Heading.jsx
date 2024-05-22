const Heading = () => {
  return (
    <div
      className="flex flex-col  items-center justify-center 
      border text-slate-100 lg:flex-1"
    >
      <h1 className="text-center text-5xl capitalize drop-shadow-md md:text-7xl lg:text-8xl">
        Artificial intelligence meets
        <br />
        <span className="text-gradient"> goth waifu&apos;s</span>
        <br />
      </h1>
      <hr className="my-4 w-1/2 opacity-50" />
      <h3 className="text-center text-2xl capitalize md:text-3xl">
        companionship. dark charm. tailored to you.
      </h3>
    </div>
  );
};

export default Heading;
