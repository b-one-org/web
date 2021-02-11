import '../styles/global.css'

/*import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';*/

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import '../styles/Button.css'
import '../styles/Cards.css'
import '../styles/Navbar.css'
import '../styles/ContentBlock.css'
import '../styles/Header.css'
import '../styles/Features.css'
import '../styles/Footer.css'
import '../styles/Services.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}