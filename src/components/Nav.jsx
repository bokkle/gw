import { useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import MobileNav from './MobileNav';

const Nav = () => {
  const menuItems = ['about', 'roadmap', 'tokenomics', 'connect wallet'];
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div
      className="mb-12 flex h-20 w-dvw max-w-screen-2xl 
    justify-center border-b border-b-slate-800"
    >
      <nav className="flex w-full items-center justify-between px-4">
        <h1
          className="cursor-pointer text-2xl font-bold uppercase tracking-wide 
          text-slate-100 md:text-4xl"
        >
          Goth Waifu
        </h1>
        <ul
          className="flex gap-12 text-xl font-semibold uppercase 
      text-slate-200 max-lg:hidden"
        >
          {menuItems.map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-pink-400">
              {item}
            </li>
          ))}
        </ul>
        <button
          className="text-4xl text-white md:text-5xl 
          lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <HiBars3BottomRight />
        </button>
        {mobileMenu && (
          <MobileNav
            menuItems={menuItems}
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
      </nav>
    </div>
  );
};

export default Nav;
