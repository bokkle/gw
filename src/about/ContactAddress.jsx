import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import toast from 'react-hot-toast';

const ContactAddress = () => {
  const CA = '0x532f27101965dd16442E59d40670FaF5eBB142E4';
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard', {
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
  //:)

  return (
    <div className="mt-6 flex justify-center">
      <div
        onClick={() => copyToClipboard(CA)}
        className="cursor-pointer rounded-xl  
          bg-opacity-30 p-4 ring ring-purple-300 
          transition-all focus:outline-none 
          focus:ring focus:ring-purple-500 active:scale-95 
          active:ring active:ring-purple-500"
      >
        <h3
          className="flex items-center text-2xl font-semibold
        tracking-wide md:text-2xl"
        >
          CA:
          <span className="ml-2 hidden md:inline-block">
            0x532f27101965dd16442E59d40670FaF5eBB142E4{' '}
          </span>
          <span className="ml-2 inline-block text-4xl">
            <HiOutlineClipboardDocument />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ContactAddress;
