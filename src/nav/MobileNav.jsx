import { HiXMark } from 'react-icons/hi2';
import { links } from '../constants';

const MobileNav = ({ onToggleMobileMenu }) => {
  return (
    <div className="fixed inset-0 z-30 overflow-hidden bg-slate-900">
      <nav className="h-full">
        <button
          className="absolute right-0 top-0 mr-4 mt-4 
        p-1 text-5xl text-slate-100"
          onClick={onToggleMobileMenu}
        >
          <HiXMark />
        </button>
        <ul
          className="flex h-full flex-col items-center justify-center
        gap-40"
        >
          {links.map((link) => (
            <a href={`#${link}`} key={link} onClick={onToggleMobileMenu}>
              <li className="text-4xl uppercase text-slate-100">{link}</li>
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
