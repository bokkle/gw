import waifuGif from '../assets/ttwaifu-nowm.gif';

const Hero = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div
        className="bg w-[300px] overflow-hidden rounded-xl 
      bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-400 p-1"
      >
        <img src={waifuGif} className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
