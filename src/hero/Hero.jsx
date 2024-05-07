import Heading from './Heading';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className="flex h-full justify-center border border-yellow-500">
      <div
        className="flex min-h-screen max-w-[120rem] flex-col gap-10 border 
     border-red-500 px-2 lg:flex-row"
      >
        <Heading />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;

// lg:h-screen h-auto
