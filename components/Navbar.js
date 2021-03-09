import { useState, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link'
import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router=useRouter()
  const { locale } = router;
  const t=locale==='en' ? en: es;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [selectLanguage, setSelectLanguage] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      setSelectLanguage(false);
    } else {
      setButton(true);
      setSelectLanguage(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', showButton);
  }

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname,router.pathname,{ locale })
    
  }

  return (
    <>
      <nav className='navbar'>
        <Link href='/' onClick={closeMobileMenu}>
          <a className='navbar-logo'>
            <img className='navbar-logo-img' src='logo.svg'/>
          </a>
        </Link>
        <div className='navbar-container'>
          <div className='navbar-menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes:faBars}/>
          </div>
          <ul className={click ? 'navbar-nav-menu active' : 'navbar-nav-menu'}>
            <li className='navbar-nav-item'>
              <Link href='/about' onClick={closeMobileMenu}>
                <a className='navbar-nav-links'>{t.navbar.aboutus}</a>
              </Link>
            </li>
            <li className='navbar-nav-item'>
              <Link
                href='/impulse'
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links'>{t.navbar.impulse}</a>
              </Link>
            </li>
            <li className='navbar-nav-item'>
              <Link
                href="https://www.notion.so/boneorg/Job-Board-2b1cd9bc860b442aa4f92f332891ae29"
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links'>{t.navbar.projects}</a>
              </Link>
            </li>
            <li className='navbar-nav-item'>
              <Link
                href='https://www.notion.so/boneorg/Challenge-e8a10a70b85e413fba5c721c34695e91'
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links'>{t.navbar.challenges}</a>
              </Link>
            </li>
            <li>
              <Link
                href='/join'
                className='navbar-nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links-mobile'>{t.navbar.join}</a>
              </Link>
            </li>
          </ul>
          {button && <Button linkTo="/join" buttonStyle='btn--outline'>{t.navbar.join}</Button>}
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className='navbar-nav-language'
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
