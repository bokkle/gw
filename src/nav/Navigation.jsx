import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import MobileNav from './MobileNav';
import Nav from './Nav';

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    if (!mobileMenu) {
      setMobileMenu(true);
      disablePageScroll();
    } else {
      setMobileMenu(false);
      enablePageScroll();
    }
  };

  return (
    <>
      <Nav onToggleMobileMenu={toggleMobileMenu} />
      {mobileMenu && <MobileNav onToggleMobileMenu={toggleMobileMenu} />}
    </>
  );
};

export default Navigation;
