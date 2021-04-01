
import Button from './Button';
import Link from 'next/link'
import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t=locale==='en' ? en: es;
  return (
    <div className='footer-container'>
      {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button linkTo='/' buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>*/}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{t.footer.aboutus}</h2>
            <Link href='/about' exact>{t.footer.vision}</Link>
            <Link href='/about'>{t.footer.community}</Link>
            <Link href='/about'>{t.footer.frameworks}</Link>
          </div>
          <div className='footer-link-items'>
            <h2>ExpA</h2>
            <Link href='/join'>{t.footer.expAWho}</Link>
            <Link href='/join'>{t.footer.principles}</Link>
            <Link href='/join'>{t.footer.benefits}</Link>
          </div>
          <div className='footer-link-items'>
            <h2>{t.footer.connect}</h2>
            <Link href='https://airtable.com/shrvo0dz6nvEEXMIl'>{t.footer.contact}</Link>
            <Link href='https://www.instagram.com/b.one.ig/'>Instagram</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section className='footer-social-media'>
        <div className='footer-social-media-wrap'>
          <div className='footer-social-logo'>
            <Link href='/'>
              <img className='footer-social-logo-img' src='logo.svg'/>
            </Link>
          </div>
          <small className='footer-website-rights'>BOne © 2021</small>
          <div className='footer-social-icons'>
            <Link
              href='https://www.instagram.com/b.one.ig/'
              target='_blank'
              aria-label='Instagram'
            >
              <a className='footer-social-icon-link'>
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </Link>
            <Link
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a className='footer-social-icon-link'>
                <FontAwesomeIcon icon={faYoutube}/>
              </a>
            </Link>
            <Link
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a className='footer-social-icon-link'>
                <FontAwesomeIcon icon={faLinkedinIn}/>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
