import { HiOutlineClipboardDocument } from 'react-icons/hi2';

const ContactAddress = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div
        className="cursor-pointer rounded-xl  
          bg-opacity-30 p-4 ring ring-purple-300 
          backdrop-blur-sm transition-all hover:scale-105"
      >
        <h3
          className="flex items-center text-2xl font-semibold
        tracking-wide md:text-3xl"
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
