import { FaTwitter, FaDiscord } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-12 flex h-48 flex-col justify-evenly bg-slate-950">
      <div
        className="flex justify-center gap-10 text-5xl text-slate-100 
      lg:gap-14 lg:text-6xl"
      >
        <FaTelegramPlane className="cursor-pointer hover:text-[#0088cc] active:scale-95" />
        <FaDiscord className="cursor-pointer hover:text-[#7289DA] active:scale-95" />
        <FaTwitter className="cursor-pointer hover:text-[#1DA1F2] active:scale-95" />
      </div>
      <p className="text-center tracking-wide text-slate-300">
        All Rights Reserved &copy; {new Date().getFullYear()} Goth Waifu
      </p>
    </footer>
  );
};

export default Footer;
// :) :)
