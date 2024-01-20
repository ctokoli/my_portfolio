import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBarComponent from "./sideBarComponent";
import AboutComponent from './aboutComponent';
import EducationComponent from './educationComponent';
import ProjectComponent from './projectComponent';
import ContactComponent from './contactComponent';
import ExperienceComponent from './experienceComponent';
import MobileMenuComponent from './mobileMenuComponent';


const HomeComponent = () => {
    return ( 
        <Router>
            <div className="home bg-[#0c1225] bg-opacity-80 md:flex ">
                <SideBarComponent />
                <MobileMenuComponent />
                <Routes>
                    <Route path='/' element={<AboutComponent />} />
                    <Route path='/about' element={<AboutComponent />} />
                    <Route path='/education'  element={<EducationComponent />} />
                    <Route path='/projects' element={<ProjectComponent />} />
                    <Route path='/contact' element={< ContactComponent />} />
                    <Route path='/experience' element={< ExperienceComponent />} />
                </Routes>
            </div>
        </Router>
     );
}
 
export default HomeComponent;