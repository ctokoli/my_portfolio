import NavComponent from "./navComponent";
import IconComponent from "./iconsComponent";
const SideBarComponent = () => {
    return ( 
        <div className="sidebar md:h-screen w-1/5 bg-slate-600 bg-opacity-10 ">
           <NavComponent />
           <IconComponent />
        </div>
     );
}
 
export default SideBarComponent;