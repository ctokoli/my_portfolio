import SideBarComponent from "./sideBarComponent";
import ContentComponent from "./contentComponet";

const HomeComponent = () => {
    return ( 
        <div className="home">
            <SideBarComponent />
            <ContentComponent />
        </div>
     );
}
 
export default HomeComponent;