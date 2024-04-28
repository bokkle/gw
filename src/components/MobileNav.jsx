import { HiXMark } from 'react-icons/hi2';

const MobileNav = ({ menuItems, mobileMenu, setMobileMenu }) => {
  return (
    <div className="absolute inset-0 z-50 overflow-hidden bg-slate-900">
      <nav className="h-full">
        <ul
          className="flex h-full flex-col items-center justify-center 
        gap-32 text-4xl"
        >
          {menuItems.map((item) => (
            <li
              key={item}
              className="font-semibold uppercase tracking-wide 
            text-slate-100"
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          className="absolute right-5 top-5 text-5xl 
        text-slate-100"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <HiXMark />
        </button>
      </nav>
    </div>
  );
};

export default MobileNav;
