import toast from 'react-hot-toast';

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
        className="animate-spin-slow absolute inset-0 flex h-full 
      items-center justify-center rounded-xl bg-transparent"
      >
        <div className="w-screen bg-purple-600 text-purple-600">.</div>
        <div className="w-screen bg-cyan-400 text-cyan-400">.</div>
      </div>
      <div
        className="absolute inset-2 z-10 flex items-center justify-center 
        rounded-lg"
      >
        <h3 className="">
          <span className="text-gradient text-sm md:text-2xl lg:text-5xl">
            Hqj5GRGb7gJV6MX8qrskHj7AQLPXfYmS8Qi8SPoMZwyn
          </span>
        </h3>
      </div>
      <div className="absolute bottom-2 left-2 right-2 top-2 rounded-lg bg-slate-900"></div>
    </div>
  );
};

export default ContactAddress;
