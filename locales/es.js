//HOME
import HomeHeaderContent from '../content/home/es/HomeHeaderContentES.js'
import HomeExpAMiddleBlock from '../content/home/es/HomeExpAMiddleBlockES.json'
import HomeExpAProjects from '../content/home/es/HomeExpAProjectsES.json'
import HomeExpAProblems from '../content/home/es/HomeExpAProblemsES.json'
import HomeExpAProblemsContent from '../content/home/es/HomeExpAProblemsES.js'
import HomeMiddleBlockHomeContent from '../content/home/es/MiddleBlockHomeContentES'
import HomeExpARecruitment from '../content/home/es/HomeExpARecruitmentES.json'
import HomeExpAMotivation from '../content/home/es/HomeExpAMotivationES.json'
import HomeProvocativeMiddleBlock from '../content/home/es/HomeProvocativeMiddleBlockES.json'
//IMPULSE
import HireHeaderContent from '../content/hire/es/HireHeaderContentES.js'
import HireAboutExpAContent from '../content/hire/es/AboutExpAES.js'
import HirePartnerBenefits from '../content/hire/es/HirePartnerBenefitsES.json'
import HireExpAIndividually from '../content/hire/es/HireExpAIndividuallyES.json'
import HireExpATeam from '../content/hire/es/HireExpATeamES.json'
import HireRemoteOnsite from '../content/hire/es/HireRemoteOnsiteES.json'
import HireExpAMotivated from '../content/hire/es/HireExpAMotivatedES.json'
import HireExpASkills from '../content/hire/es/HireExpASkillsES.json'
import HireProvocativeMiddleBlock from '../content/hire/es/HireProvocativeMiddleBlockES.json'
//ABOUT US
import AboutUsHeaderContent from '../content/about-us/es/AboutUsHeaderContentES.js'
import AboutUsMisionMiddleBlock from '../content/about-us/es/AboutUsMisionMiddleBlockES.js'
import AboutUsCulture from '../content/about-us/es/CultureES.json'
import AboutUsCommunity from '../content/about-us/es/GlobalCommunityES.json'
import AboutUsNorth from '../content/about-us/es/NorthES.json'
import AboutUsFrameworkSustainability from '../content/about-us/es/CycleOfSustainabilityES.json'
//JOIN
import JoinHeaderContent from '../content/join/es/JoinHeaderContentES.js'
import JoinPrinciples from '../content/join/es/JoinPrinciplesES.json'
import JoinExpAProjects from '../content/join/es/JoinExpAProjectsES.json'
import JoinBenefitsExpA from '../content/join/es/JoinBenefitsExpAES.json'
import JoinExpAProblems from '../content/join/es/JoinExpAProblemsES.json'
import JoinBenefitsFounders from '../content/join/es/JoinBenefitsFoundersES.json'
import JoinExpACulture from '../content/join/es/JoinExpACultureES.json'
import JoinExpALove from '../content/join/es/JoinExpALoveES.json'
import JoinProvocativeMiddleBlock from '../content/join/es/JoinProvocativeMiddleBlockES.json'

export default {
    //NAVBAR
    navbar:{
        aboutus:'Nosotros',
        impulse:'Impulsar',
        projects:'Proyectos',
        challenges:'Desafios',
        join:'UNIRSE',
    },
    //FOOTER
    footer:{
        aboutus:'Nosotros',
        vision:'Visión',
        community:'Comunidad',
        frameworks:'Marcos de referencia',
        expAWho:'Quienes son',
        principles:'Principios',
        benefits:'Beneficios',
        connect:'Conectar',
        contact:'Contactanos',
    },
    //HOME
    home:{
        headerTitle: 'EXPLORA LO ALTERNATIVO',
        headerContent: HomeHeaderContent,
        headerButtonOutline: 'SE DISRUPTIVO',
        headerButtonPrimary: 'TRABAJA CON ExpA',
        middleBlockTitle: 'Quiénes Somos',
        middleBlockContent: HomeMiddleBlockHomeContent,
        cardsTitle: 'Qué estas buscando?',
        cardsTextCardLeft: 'Conviértete en un Explorador de lo Alternativo',
        cardsTextCardRight: 'Confíanos tu problema',
        cardsTextCardMiddle: 'Trabaja con ExpA',
        expAProjectsTitle: HomeExpAProjects.title,
        expAProjectsContent: HomeExpAProjects.content,
        expAProblemsTitle: HomeExpAProblems.title,
        expAProblemsContent: HomeExpAProblemsContent,
        expAMiddleBlockTitle:HomeExpAMiddleBlock.title,
        expAMiddleBlockContent:HomeExpAMiddleBlock.content,
        expARecruitmentTitle: HomeExpARecruitment.title,
        expARecruitmentContent: HomeExpARecruitment.content,
        expAMotivationTitle: HomeExpAMotivation.title,
        expAMotivationContent: HomeExpAMotivation.content,
        provocativeMiddleBlockTitle:HomeProvocativeMiddleBlock.title,
        provocativeMiddleBlockContent:HomeProvocativeMiddleBlock.content,
    },
    //IMPULSE
    hire:{
        headTitle:'Impulsar',
        headerTitle:'IMPULSAR',
        headerContent:HireHeaderContent,
        headerButtonText:'TRABAJA CON ExpA',
        aboutExpATitle:'Quiénes Son',
        aboutExpAContent:HireAboutExpAContent,
        partnerBenefitsTitle:'Beneficios de Socio',
        partnerBenefitsFeatures:HirePartnerBenefits.Features,
        expAIndividuallyTitle:HireExpAIndividually.title,
        expAIndividuallyContent:HireExpAIndividually.content,
        expATeamTitle:HireExpATeam.title,
        expATeamContent:HireExpATeam.content,
        remoteOnsiteTitle:HireRemoteOnsite.title,
        remoteOnsiteContent:HireRemoteOnsite.content,
        expASkillsTitle:HireExpASkills.title,
        expASkillsContent:HireExpASkills.content,
        expAMotivatedTitle:HireExpAMotivated.title,
        expAMotivatedContent:HireExpAMotivated.content,
        provocativeEndingTitle:HireProvocativeMiddleBlock.title,
        provocativeEndingContent:HireProvocativeMiddleBlock.content,
        provocativeEndingButtonText:HireProvocativeMiddleBlock.buttonText,
    },
    //ABOUT US
    about:{
        headTitle:'Nosotros',
        headerTitle:'VISIÓN',
        headerContent:AboutUsHeaderContent,
        misionTitle:'Qué Hacemos',
        misionContent:AboutUsMisionMiddleBlock,
        cultureTitle:AboutUsCulture.title,
        cultureContent:AboutUsCulture.content,
        communityTitle:AboutUsCommunity.title,
        communityContent:AboutUsCommunity.content,
        northTitle:AboutUsNorth.title,
        northContent:AboutUsNorth.content,
        frameworkSustainabilityTitle:AboutUsFrameworkSustainability.title,
        frameworkSustainabilityContent:AboutUsFrameworkSustainability.content,

    },
    //JOIN
    join:{
        headTitle:'Unirse',
        headerTitle:'IMPACTA',
        headerContent:JoinHeaderContent,
        headerButtonText:'CONVIÉRTETE EN UN ExpA',
        principlesTitle:'Principios',
        principlesFeatures:JoinPrinciples.Features,
        workProjectsTitle:JoinExpAProjects.title,
        workProjectsContent:JoinExpAProjects.content,
        expaBenefitsTitle:JoinBenefitsExpA.title,
        expaBenefitsContent:JoinBenefitsExpA.content,
        expaBenefitsFeatures:JoinBenefitsExpA.services,
        workChallengesTitle:JoinExpAProblems.title,
        workChallengesContent:JoinExpAProblems.content,
        foundersBenefitsTitle:'Somos Tu Vehículo',
        foundersBenefitsFeatures:JoinBenefitsFounders.Features,
        cultureTitle:JoinExpACulture.title,
        cultureContent:JoinExpACulture.content,
        loveTitle:JoinExpALove.title,
        loveContent:JoinExpALove.content,
        provocativeEndingTitle:JoinProvocativeMiddleBlock.title,
        provocativeEndingContent:JoinProvocativeMiddleBlock.content,
        provocativeEndingButtonText:JoinProvocativeMiddleBlock.buttonText,
    }

}