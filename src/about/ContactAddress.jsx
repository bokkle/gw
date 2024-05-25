import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import HeartButton from '../ui/HeartButton';

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

  return (
    <div className="relative h-[100px] max-w-7xl border rounded-xl">
      <div
        className="animate-spin-slow absolute inset-0 flex h-full 
      items-center justify-center rounded-xl bg-transparent"
      >
        <div className="w-screen bg-purple-600">.</div>
        {/* <div className="w-1/3"></div> */}
        <div className="w-screen bg-cyan-400">.</div>
      </div>
      <div
        className="absolute inset-2 z-10 flex items-center justify-center 
        rounded-lg border bg-transparent"
      >
        <h3 className="border text-sm">
          CA:
          <span>0x532f27101965dd16442E59d40670FaF5eBB142E4</span>
        </h3>
      </div>
      <div className="absolute border border-red-400 bottom-1 left-1 right-1 top-1 bg-slate-900 rounded-lg"></div>
    </div>
  );
};

export default ContactAddress;

/* <div onClick={() => copyToClipboard(CA)}>
        <HeartButton>Copy CA</HeartButton>
      </div> */
