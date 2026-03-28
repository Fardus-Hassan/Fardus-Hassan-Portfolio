
import About from './About/About';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import Scroll from '../Components/Scroll';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';

const LandingPage = () => {
    return (
        <div className="font-jost liquid-page-bg">
            <div className="relative z-[1]">
                <Scroll></Scroll>
                <Nav></Nav>
                <Banner></Banner>
                <About></About>
                <Resume></Resume>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default LandingPage;