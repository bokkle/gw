import { links } from '../constants';

const NavLinks = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex h-full w-full items-center gap-12">
        {links.map((link) => (
          <li
            key={link}
            className="cursor-pointer text-2xl font-semibold capitalize
            tracking-wide transition-all hover:text-pink-400"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
