import AboutButtons from './AboutButtons';
import AboutHeading from './AboutHeading';
import ContactAddress from './ContactAddress';

const About = () => {
  return (
    <div
      id="about"
      className="mt-12 flex justify-center p-2 text-slate-100 md:mt-24"
    >
      <div className="flex max-w-7xl flex-col gap-20">
        <AboutHeading />
        <ContactAddress />
        <AboutButtons />
      </div>
    </div>
  );
};

// :)
export default About;
