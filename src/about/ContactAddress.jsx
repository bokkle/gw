import toast from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';

const ContactAddress = () => {
  const CA = 'Hqj5GRGb7gJV6MX8qrskHj7AQLPXfYmS8Qi8SPoMZwyn';
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Address copied', {
        style: {
          fontSize: '22px',
          marginTop: '50px',
        },
      });
    } catch (err) {
      toast.error('Failed to copy', {
        style: {
          fontSize: '22px',
          marginTop: '50px',
        },
      });
    }
  };

  return (
    <div
      onClick={() => copyToClipboard(CA)}
      className="relative h-[100px] max-w-7xl cursor-pointer overflow-hidden rounded-xl"
    >
      <div
        className="absolute inset-0 flex h-full animate-spin-slow 
      items-center justify-center rounded-xl bg-transparent"
      >
        <div className="w-screen bg-purple-600 text-purple-600">.</div>
        <div className="w-screen bg-cyan-400 text-cyan-400">.</div>
      </div>
      <div
        className="absolute inset-2 z-10 flex items-center justify-center 
        rounded-lg"
      >
        <h3 className="flex items-center p-2">
          <span className="text-gradient p-2 text-sm md:text-2xl lg:text-4xl">
            Hqj5GRGb7gJV6MX8qrskHj7AQLPXfYmS8Qi8SPoMZwyn
          </span>
          <span className="ml-3 hidden text-4xl text-orange-300 lg:block">
            <BiCopy />
          </span>
        </h3>
      </div>
      <div className="absolute bottom-2 left-2 right-2 top-2 rounded-lg bg-slate-900"></div>
    </div>
  );
};

export default ContactAddress;
