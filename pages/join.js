import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

import loadable from '@loadable/component';
import Container from '../components/Container';
import Head from 'next/head'

import ExpAProjects from '../content/join/en/JoinExpAProjectsEN.json'
import ExpAProblems from '../content/join/en/JoinExpAProblemsEN.json'
import Culture from '../content/join/en/JoinExpACultureEN.json'
import Love from '../content/join/en/JoinExpALoveEN.json'


const Header = loadable(() => import('../components/Header'));
const MiddleBlockButton = loadable(() => import('../components/MiddleBlockButton'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));
const Services = loadable(() => import('../components/Services'));


const Join = () => {
  const router = useRouter();
  const { locale } = router;
  const t=locale==='en' ? en: es;

  return (
    <>
      <Head>
        <title>BOne - {t.join.headTitle}</title>
        <link rel="shortcut icon" href="/circle-regular.svg" />
      </Head>
      <Container>
        <Header
        activateButton={true}
        buttonText={t.join.headerButtonText}
        btnStyle={'btn--outline'}
        img={'/images/expa-2.jpg'}
        title={t.join.headerTitle}
        content={t.join.headerContent}
        buttonLink={"https://airtable.com/shrCuV6CA4uhuZtTv"}
        />
        <Features
        title={t.join.principlesTitle}
        data={t.join.principlesFeatures}
        />
        <ContentBlock
        left={false}
        img={ExpAProjects.img}
        title={t.join.workProjectsTitle}
        content={t.join.workProjectsContent}
        />
        <Services
        title={t.join.expaBenefitsTitle}
        content={t.join.expaBenefitsContent}
        data={t.join.expaBenefitsFeatures}
        />
        <ContentBlock
        left={true}
        img={ExpAProblems.img}
        title={t.join.workChallengesTitle}
        content={t.join.workChallengesContent}
        />
        <Features
        title={t.join.foundersBenefitsTitle}
        data={t.join.foundersBenefitsFeatures}
        />
        <ContentBlock
        left={true}
        img={Culture.img}
        title={t.join.cultureTitle}
        content={t.join.cultureContent}
        />
        <ContentBlock
        left={false}
        img={Love.img}
        title={t.join.loveTitle}
        content={t.join.loveContent}
        />
        <MiddleBlockButton
        title={t.join.provocativeEndingTitle}
        content={t.join.provocativeEndingContent}
        buttonText={t.join.provocativeEndingButtonText}
        buttonLink={"https://airtable.com/shrCuV6CA4uhuZtTv"}
        />
      </Container>
    </>
  );
}

export default Join;