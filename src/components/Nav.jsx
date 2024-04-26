const Nav = () => {
  const menuItems = ['about', 'roadmap', 'tokenomics'];

  return (
    <div className="mb-12 flex h-20 justify-center border-b border-b-slate-800">
      <nav className="flex w-full max-w-7xl items-center justify-between px-8">
        <h1
          className="cursor-pointer text-4xl font-bold uppercase tracking-wide 
      text-slate-100"
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
      </nav>
    </div>
  );
};

export default Nav;
