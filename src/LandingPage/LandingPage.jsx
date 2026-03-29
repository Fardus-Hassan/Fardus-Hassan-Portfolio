
import Scroll from '../Components/Scroll';
import BannerEditorial from './Banner/BannerEditorial';
import EditorialPage from '../Editorial/EditorialPage';
import EditorialNav from '../Editorial/EditorialNav';
import EditorialAbout from '../Editorial/EditorialAbout';
import EditorialResume from '../Editorial/EditorialResume';
import EditorialSkills from '../Editorial/EditorialSkills';
import EditorialProjects from '../Editorial/EditorialProjects';
import EditorialContact from '../Editorial/EditorialContact';
import EditorialFooter from '../Editorial/EditorialFooter';

const LandingPage = () => {
    return (
        <EditorialPage>
            <Scroll />
            <EditorialNav />
            <BannerEditorial />
            <EditorialAbout />
            <EditorialResume />
            <EditorialSkills />
            <EditorialProjects />
            <EditorialContact />
            <EditorialFooter />
        </EditorialPage>
    );
};

export default LandingPage;
