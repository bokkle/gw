import AboutButtons from './AboutButtons';
import AboutHeading from './AboutHeading';
import ContactAddress from './ContactAddress';
import { Slide } from 'react-awesome-reveal';

const About = () => {
  return (
    <div
      id="about"
      className="mt-12 flex justify-center p-2 text-slate-100 md:mt-24"
    >
      <div className="flex max-w-7xl flex-col gap-20">
        <Slide direction="up" duration={1000} fraction={0.2} triggerOnce>
          <AboutHeading />
          <ContactAddress />
          <AboutButtons />
        </Slide>
      </div>
    </div>
  );
};

export default About;
