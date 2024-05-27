import { links } from '../constants';

const NavLinks = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex h-full w-full items-center gap-12">
        {links.map((link) => (
          <li
            className="cursor-pointer text-2xl font-semibold capitalize
            tracking-wide transition-all hover:text-pink-400"
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
