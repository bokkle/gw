import Heading from './Heading';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className="herobg flex h-full justify-center">
      <div
        className="mt-20 flex min-h-screen w-screen flex-col border 
      px-2 md:mx-12 lg:flex-row"
      >
        <Heading />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;

// lg:h-screen h-auto max-w-[120rem]
