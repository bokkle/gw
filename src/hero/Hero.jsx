import Heading from './Heading';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div
      className="min-h-screen overflow-hidden border border-red-500 
    bg-slate-900 px-2 pt-32 text-white"
    >
      <Heading />
      <HeroImage />
    </div>
  );
};

export default Hero;

// lg:h-screen h-auto
