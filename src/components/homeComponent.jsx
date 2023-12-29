import SideBarComponent from "./sideBarComponent";
import ContentComponent from "./contentComponet";

const HomeComponent = () => {
    return ( 
        <div className="home bg-amber-500">
            <SideBarComponent />
            <ContentComponent />
        </div>
     );
}
 
export default HomeComponent;