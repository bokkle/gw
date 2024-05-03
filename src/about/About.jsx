import AboutButtons from './AboutButtons';
import AboutHeading from './AboutHeading';
import ContactAddress from './ContactAddress';

const About = () => {
  return (
    <div className="mt-12 flex justify-center border text-slate-100">
      <div className="flex max-w-7xl flex-col gap-10">
        <AboutHeading />
        <ContactAddress />
        <AboutButtons />
      </div>
    </div>
  );
};

export default About;
