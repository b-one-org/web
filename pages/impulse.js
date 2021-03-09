
import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

import loadable from '@loadable/component';
import Container from '../components/Container';
import Head from 'next/head'

import HireExpAIndividually from '../content/hire/en/HireExpAIndividuallyEN.json'
import HireExpATeam from '../content/hire/en/HireExpATeamEN.json'
import ExpASkills from '../content/hire/en/HireExpASkillsEN.json'
import ExpAMotivated from '../content/hire/en/HireExpAMotivatedEN.json'


const Header = loadable(() => import('../components/Header'));
const MiddleBlockButton = loadable(() => import('../components/MiddleBlockButton'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));


const Impulse = () => {
  const router = useRouter();
  const { locale } = router;
  const t=locale==='en' ? en: es;

  return (
    <>
      <Head>
        <title>BOne - {t.hire.headTitle}</title>
        <link rel="shortcut icon" href="/circle-regular.svg" />
      </Head>
      <Container>
      <Header
        activateButton={true}
        buttonText={t.hire.headerButtonText}
        btnStyle={'btn--outline'}
        img={'/images/header-hire.jpg'}
        title={t.hire.headerTitle}
        content={t.hire.headerContent}
        buttonLink={"https://airtable.com/shrRYInHwVlgOx1o8"}
        />
        <MiddleBlock
        title={t.hire.aboutExpATitle}
        content={t.hire.aboutExpAContent}
        />
        <Features
        title={t.hire.partnerBenefitsTitle}
        data={t.hire.partnerBenefitsFeatures}
        />
        <ContentBlock
        left={false}
        img={HireExpAIndividually.img}
        title={t.hire.expAIndividuallyTitle}
        content={t.hire.expAIndividuallyContent}
        />
        <ContentBlock
        left={true}
        img={HireExpATeam.img}
        title={t.hire.expATeamTitle}
        content={t.hire.expATeamContent}
        />
        <MiddleBlock
        title={t.hire.remoteOnsiteTitle}
        content={t.hire.remoteOnsiteContent}
        />
        <ContentBlock
        left={true}
        img={ExpASkills.img}
        title={t.hire.expASkillsTitle}
        content={t.hire.expASkillsContent}
        />
        <ContentBlock
        left={false}
        img={ExpAMotivated.img}
        title={t.hire.expAMotivatedTitle}
        content={t.hire.expAMotivatedContent}
        />
        <MiddleBlockButton
        title={t.hire.provocativeEndingTitle}
        content={t.hire.provocativeEndingContent}
        buttonText={t.hire.provocativeEndingButtonText}
        buttonLink={"https://airtable.com/shrRYInHwVlgOx1o8"}
        />
      </Container>
    </>
  );
}

export default Impulse;