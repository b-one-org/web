import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

import Container from '../components/Container';
import Head from 'next/head'

import loadable from '@loadable/component';

import HeroSection from '../components/HeroSection';

import ExpAProjects from '../content/home/en/HomeExpAProjectsEN.json'
import ExpAProblems from '../content/home/en/HomeExpAProblemsEN.json'
//import MiddleBlockHomeContent from '../content/home/MiddleBlockHomeContent'
//import ExpAMiddleBlock from '../content/home/HomeExpAMiddleBlockEN.json'
import ExpARecruitment from '../content/home/en/HomeExpARecruitmentEN.json'
import ExpAMotivation from '../content/home/en/HomeExpAMotivationEN.json'

const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const Cards = loadable(() => import('../components/Cards'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t=locale==='en' ? en: es;

  return (
    <>
      <Head>
        <title>BOne</title>
        <link rel="shortcut icon" href="/circle-regular.svg" />
      </Head>
      <Container>
        <HeroSection 
        title={t.home.headerTitle}
        content={t.home.headerContent}
        textButtonOutline={t.home.headerButtonOutline}
        textButtonPrimary={t.home.headerButtonPrimary}
        />
        <MiddleBlock 
        title={t.home.middleBlockTitle}
        content={t.home.middleBlockContent}
        />
        <Cards 
        title={t.home.cardsTitle}
        textCardLeft={t.home.cardsTextCardLeft}
        textCardRight={t.home.cardsTextCardRight}
        textCardMiddle={t.home.cardsTextCardMiddle}
        />
        <ContentBlock
        img={ExpAProjects.img}
        left={true}
        title={t.home.expAProjectsTitle}
        content={t.home.expAProjectsContent}
        />
        <ContentBlock
        img={ExpAProblems.img}
        left={false}
        title={t.home.expAProblemsTitle}
        content={t.home.expAProblemsContent}
        />
        <MiddleBlock 
        title={t.home.expAMiddleBlockTitle}
        content={t.home.expAMiddleBlockContent}
        />
        <ContentBlock
        img={ExpARecruitment.img}
        left={true}
        title={t.home.expARecruitmentTitle}
        content={t.home.expARecruitmentContent}
        />
        <ContentBlock
        img={ExpAMotivation.img}
        left={false}
        title={t.home.expAMotivationTitle}
        content={t.home.expAMotivationContent}
        />
        <MiddleBlock 
        title={t.home.provocativeMiddleBlockTitle}
        content={t.home.provocativeMiddleBlockContent}
        />
      </Container>
    </>
  );
}

export default Index
