import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const IconComponent = () => {
    return ( 
       <div className="mt-20 flex pl-10 [&>*]:text-xl gap-5 [&>*]:opacity-30" >
            <a href="#"><BsLinkedin  /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><BiLogoGmail /></a>
       </div>
     );
}
 
export default IconComponent;