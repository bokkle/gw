import { FaSquareXTwitter, FaTelegram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="mt-12 flex h-48 flex-col justify-evenly bg-slate-950">
      <div className="flex justify-center gap-8">
        <FaSquareXTwitter
          className="cursor-pointer text-6xl 
        text-slate-100 transition-all hover:scale-105 active:scale-95"
        />
        <FaTelegram
          className="cursor-pointer text-6xl text-slate-100 
        transition-all hover:scale-105 active:scale-95"
        />
      </div>
      <p className="text-center tracking-wide text-slate-300">
        copyright &copy; {new Date().getFullYear()} Goth Waifu Studios
      </p>
    </footer>
  );
};

export default Footer;
