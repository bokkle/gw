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
    <div
      className="mt-6 flex flex-col items-center justify-center gap-4 
    border"
    >
      <div>
        <h3
          className="break-all text-2xl font-semibold 
        tracking-wide md:text-4xl"
        >
          CA:{' '}
          <span className="text-gradient ">
            0x532f27101965dd16442E59d40670FaF5eBB142E4S
          </span>
        </h3>
      </div>
      <div onClick={() => copyToClipboard(CA)}>
        <HeartButton>Copy CA</HeartButton>
      </div>
    </div>
  );
};

export default ContactAddress;
