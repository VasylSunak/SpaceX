import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import Menu from '../Menu/Menu';
import CloseIcon from '../../icons/close-icon.svg';
import StarlinkLogo from '../../icons/starlink-logo.svg';
import HumburgerIcon from '../../icons/humburger-icon.svg';

export default function Sidebar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize.bind(this));
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize.bind(this));
    }
  }, []);

  const handleResize = () => {
    const isMobileScreen = window.innerWidth <= 620;
    setIsMobileView(isMobileScreen);
  }

  const MenuIcon = isMenuOpen ? CloseIcon : HumburgerIcon;

  return (
    <div className="sidebar">
        <div className="sidebar__header">
          <img alt='logo' className="sidebar__logo" src={StarlinkLogo} />

          {isMobileView &&
            <img alt='menu' onClick={handleToggleMenu} className="sidebar__humberger" src={MenuIcon} />}
        </div>
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  )
}
