
import About from './About/About';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import Scroll from '../Components/Scroll';
import Footer from './Footer/Footer';

const LandingPage = () => {
    return (
        <div className=''>
            <Scroll></Scroll>
            <Nav></Nav>
            <div id='home' className='md:h-[97px] sm:h-[92px] h-[76px]'></div>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;