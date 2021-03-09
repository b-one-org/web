//HOME
import HomeHeaderContent from '../content/home/en/HomeHeaderContentEN.js'
import HomeExpAMiddleBlock from '../content/home/en/HomeExpAMiddleBlockEN.json'
import HomeExpAProjects from '../content/home/en/HomeExpAProjectsEN.json'
import HomeExpAProblems from '../content/home/en/HomeExpAProblemsEN.json'
import HomeExpAProblemsContent from '../content/home/en/HomeExpAProblemsEN.js'
import HomeMiddleBlockHomeContent from '../content/home/en/MiddleBlockHomeContentEN'
import HomeExpARecruitment from '../content/home/en/HomeExpARecruitmentEN.json'
import HomeExpAMotivation from '../content/home/en/HomeExpAMotivationEN.json'
import HomeProvocativeMiddleBlock from '../content/home/en/HomeProvocativeMiddleBlockEN.json'
//IMPULSE
import HireHeaderContent from '../content/hire/en/HireHeaderContentEN.js'
import HireAboutExpAContent from '../content/hire/en/AboutExpAEN.js'
import HirePartnerBenefits from '../content/hire/en/HirePartnerBenefitsEN.json'
import HireExpAIndividually from '../content/hire/en/HireExpAIndividuallyEN.json'
import HireExpATeam from '../content/hire/en/HireExpATeamEN.json'
import HireRemoteOnsite from '../content/hire/en/HireRemoteOnsiteEN.json'
import HireExpAMotivated from '../content/hire/en/HireExpAMotivatedEN.json'
import HireExpASkills from '../content/hire/en/HireExpASkillsEN.json'
import HireProvocativeMiddleBlock from '../content/hire/en/HireProvocativeMiddleBlockEN.json'
//ABOUT US
import AboutUsHeaderContent from '../content/about-us/en/AboutUsHeaderContentEN.js'
import AboutUsMisionMiddleBlock from '../content/about-us/en/AboutUsMisionMiddleBlockEN.js'
import AboutUsCulture from '../content/about-us/en/CultureEN.json'
import AboutUsCommunity from '../content/about-us/en/GlobalCommunityEN.json'
import AboutUsNorth from '../content/about-us/en/NorthEN.json'
import AboutUsFrameworkSustainability from '../content/about-us/en/CycleOfSustainabilityEN.json'
//JOIN
import JoinHeaderContent from '../content/join/en/JoinHeaderContentEN.js'
import JoinPrinciples from '../content/join/en/JoinPrinciplesEN.json'
import JoinExpAProjects from '../content/join/en/JoinExpAProjectsEN.json'
import JoinBenefitsExpA from '../content/join/en/JoinBenefitsExpAEN.json'
import JoinExpAProblems from '../content/join/en/JoinExpAProblemsEN.json'
import JoinBenefitsFounders from '../content/join/en/JoinBenefitsFoundersEN.json'
import JoinExpACulture from '../content/join/en/JoinExpACultureEN.json'
import JoinExpALove from '../content/join/en/JoinExpALoveEN.json'
import JoinProvocativeMiddleBlock from '../content/join/en/JoinProvocativeMiddleBlockEN.json'

export default {
    //NAVBAR
    navbar:{
        aboutus:'About us',
        impulse:'Impulse',
        projects:'Projects',
        challenges:'Challenges',
        join:'JOIN',
    },
    //FOOTER
    footer:{
        aboutus:'About us',
        vision:'Vision',
        community:'Community',
        frameworks:'Frameworks',
        expAWho:'Who they are',
        principles:'Principles',
        benefits:'Benefits',
        connect:'Connect',
        contact:'Contact us',
    },
    //HOME
    home:{
        headerTitle: 'EXPLORE THE ALTERNATIVE',
        headerContent: HomeHeaderContent,
        headerButtonOutline: 'BE DISRUPTIVE',
        headerButtonPrimary: 'WORK WITH ExpA',
        middleBlockTitle: 'Who We Are',
        middleBlockContent: HomeMiddleBlockHomeContent,
        cardsTitle: 'What are you looking for?',
        cardsTextCardLeft: 'Become an Explorer of the Alternative',
        cardsTextCardRight: 'Trust us your problem',
        cardsTextCardMiddle: 'Work with ExpA',
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
        headTitle:'Impulse',
        headerTitle:'IMPULSE',
        headerContent:JoinHeaderContent,
        headerButtonText:'WORK WITH ExpA',
        aboutExpATitle:'Who They Are',
        aboutExpAContent:HireAboutExpAContent,
        partnerBenefitsTitle:'Partner Benefits',
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
        headTitle:'About Us',
        headerTitle:'VISION',
        headerContent:AboutUsHeaderContent,
        misionTitle:'What We Do',
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
        headTitle:'Join',
        headerTitle:'IMPACT',
        headerContent:JoinHeaderContent,
        headerButtonText:'BECOME A ExpA',
        principlesTitle:'Principles',
        principlesFeatures:JoinPrinciples.Features,
        workProjectsTitle:JoinExpAProjects.title,
        workProjectsContent:JoinExpAProjects.content,
        expaBenefitsTitle:JoinBenefitsExpA.title,
        expaBenefitsContent:JoinBenefitsExpA.content,
        expaBenefitsFeatures:JoinBenefitsExpA.services,
        workChallengesTitle:JoinExpAProblems.title,
        workChallengesContent:JoinExpAProblems.content,
        foundersBenefitsTitle:'We Are Your Vehicle',
        foundersBenefitsFeatures:JoinBenefitsFounders.Features,
        cultureTitle:JoinExpACulture.title,
        cultureContent:JoinExpACulture.content,
        loveTitle:JoinExpALove.title,
        loveContent:JoinExpALove.content,
        provocativeEndingTitle:JoinProvocativeMiddleBlock.title,
        provocativeEndingContent:JoinProvocativeMiddleBlock.content,
        provocativeEndingButtonText:JoinProvocativeMiddleBlock.buttonText,
    },
}