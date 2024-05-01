import AboutButtons from './AboutButtons';

const About = () => {
  return (
    <div className="flex justify-center border text-slate-100">
      <div className="max-w-7xl">
        <h1 className="text-center text-2xl lg:text-5xl">
          One of the world&apos;s most valuable assets &mdash; the goth waifu
        </h1>
        <div className="mt-6 flex justify-center border border-blue-500">
          <div
            className="gothshadow cursor-pointer rounded-xl bg-indigo-800 
          bg-opacity-30 p-4 backdrop-blur-sm transition-all hover:scale-105"
          >
            <h3 className="text-2xl font-semibold tracking-wide">
              CA:{' '}
              <span className="hidden md:inline-block">
                0x532f27101965dd16442E59d40670FaF5eBB142E4
              </span>
            </h3>
          </div>
        </div>
        <AboutButtons />
      </div>
    </div>
  );
};

export default About;
