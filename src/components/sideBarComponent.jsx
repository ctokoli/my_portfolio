import NavComponent from "./navComponent";
import IconComponent from "./iconsComponent";
const SideBarComponent = () => {
    return ( 
        <div className="sidebar  w-1/6 bg-slate-600 bg-opacity-10">
           <NavComponent />
           <IconComponent />
        </div>
     );
}
 
export default SideBarComponent;