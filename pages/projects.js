
import loadable from '@loadable/component';
import Container from '../components/Container';
import Footer from '../components/Footer';


const Header = loadable(() => import('../components/Header'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));
const Services = loadable(() => import('../components/Services'));


const Projects = () => {
  return (
    <>
      <Container>
        <h3 className='projects'>We are working on this...</h3>;
      </Container>
    </>
  );
}

export default Projects;