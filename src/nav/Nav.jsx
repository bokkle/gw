import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import NavLinks from './NavLinks';

const Nav = ({ onToggleMobileMenu }) => {
  return (
    <div
      className="fixed z-10 flex w-full justify-center 
      border-b border-b-slate-200 text-slate-100 backdrop-blur-sm"
    >
      <div
        className="flex w-full max-w-[1500px] justify-between 
       px-3 py-4"
      >
        <h1
          className="cursor-pointer text-2xl font-bold uppercase tracking-wide
        lg:text-4xl"
        >
          Goth Waifu
        </h1>
        <NavLinks />
        <button
          className="text-3xl text-slate-100 lg:hidden"
          onClick={onToggleMobileMenu}
        >
          <HiMiniBars3BottomLeft />
        </button>
      </div>
    </div>
  );
};

export default Nav;
