import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const IconComponent = () => {
    return ( 
       <div className="mt-20 flex pl-10 [&>*]:text-xl gap-5 [&>*]:opacity-30 icons" >
            <a href="https://www.linkedin.com/in/ctokoli"><BsLinkedin  /></a>
            <a href="https://twitter.com/ctokoli"><FaTwitter /></a>
            <a href="https://github.com/ctokoli"><FaGithub /></a>
            <a href="mailto:matumasie@gmail.com"><BiLogoGmail /></a>
       </div>
     );
}
 
export default IconComponent;