import Heading from './Heading';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className="h-auto bg-slate-900 px-2 pt-32 text-white lg:h-screen">
      <Heading />
      <HeroImage />
    </div>
  );
};

export default Hero;
