import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

import loadable from '@loadable/component';
import Container from '../components/Container';
import Head from 'next/head'

import Culture from '../content/about-us/en/CultureEN.json'
import Community from '../content/about-us/en/GlobalCommunityEN.json'
import CycleOfSustainability from '../content/about-us/en/CycleOfSustainabilityEN.json'

const Header = loadable(() => import('../components/Header'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t=locale==='en' ? en: es;
  return (
    <>
      <Head>
        <title>BOne - {t.about.headTitle}</title>
        <link rel="shortcut icon" href="/circle-regular.svg" />
      </Head>
      <Container>
        <Header
        img={'/images/sunrise-5.jpg'}
        title={t.about.headerTitle}
        content={t.about.headerContent}
        />
        <MiddleBlock
        title={t.about.misionTitle}
        content={t.about.misionContent}
        />
        <ContentBlock
        left={true}
        img={Culture.img}
        title={t.about.cultureTitle}
        content={t.about.cultureContent}
        />
        <ContentBlock
        left={false}
        img={Community.img}
        title={t.about.communityTitle}
        content={t.about.communityContent}
        />
        <MiddleBlock
        title={t.about.northTitle}
        content={t.about.northContent}
        />
        <ContentBlock
        left={false}
        img={CycleOfSustainability.img}
        title={t.about.frameworkSustainabilityTitle}
        content={t.about.frameworkSustainabilityContent}
        />
      </Container>
    </>
  );
}

export default About;