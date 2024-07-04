
import About from './About/About';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';

const LandingPage = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <div className='md:h-[97px] sm:h-[92px] h-[76px]'></div>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default LandingPage;