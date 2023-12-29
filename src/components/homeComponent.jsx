import SideBarComponent from "./sideBarComponent";
import ContentComponent from "./contentComponet";

const HomeComponent = () => {
    return ( 
        <div className="home bg-[#0c1225] opacity-80 md:flex">
            <SideBarComponent />
            <ContentComponent />
        </div>
     );
}
 
export default HomeComponent;