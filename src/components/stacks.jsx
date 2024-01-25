import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiTsnode } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRubyonrails } from "react-icons/si";
import { LiaLaravel } from "react-icons/lia";
import { TbFileTypeSql } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import { SiAwsamplify } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaGit } from "react-icons/fa";
import { DiJira } from "react-icons/di";
import { SiStorybook } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'




const StacksComponents = () => {
    return (
        <div className="animate__animated animate__fadeInUp duration-500 delay-200">
            <div className="flex mt-5 [&>*]:cursor-pointer [&>*]:text-3xl justify-between  max-w-24  opacity-40">
                <FaGithub data-tooltip-id="stacks"  data-tooltip-content="Github" />
                <FaReact data-tooltip-id="stacks"  data-tooltip-content="Reactjs" />
                <SiFlutter data-tooltip-id="stacks"  data-tooltip-content="Flutter" />
                <SiRedux data-tooltip-id="stacks"  data-tooltip-content="Redux" />
                <SiTsnode data-tooltip-id="stacks"  data-tooltip-content="TypeScript" />
                <DiNodejs data-tooltip-id="stacks"  data-tooltip-content="Nodejs" />
                <SiJavascript data-tooltip-id="stacks"  data-tooltip-content="JavaScript" />
                <TbBrandNextjs data-tooltip-id="stacks"  data-tooltip-content="Nextjs"/>
                
            </div>
            <div className="flex mt-5 [&>*]:cursor-pointer [&>*]:text-3xl justify-between  max-w-24  opacity-40">
                <SiRubyonrails data-tooltip-id="stacks"  data-tooltip-content="Ruby on Rails"/>
                <LiaLaravel data-tooltip-id="stacks"  data-tooltip-content="Laravel" />
                <TbFileTypeSql  data-tooltip-id="stacks"  data-tooltip-content="SQL"/>
                <TbApi data-tooltip-id="stacks"  data-tooltip-content="API"/>
                <FaAws className="text-9xl" data-tooltip-id="stacks"  data-tooltip-content="AWS" />
                <DiFirebase data-tooltip-id="stacks"  data-tooltip-content="Firebase"/>
                <SiAwsamplify data-tooltip-id="stacks"  data-tooltip-content="AWS Amplify"/>
                <SiMongodb data-tooltip-id="stacks"  data-tooltip-content="Mongo DB" />
            </div>
            <div className="flex mt-5 [&>*]:cursor-pointer [&>*]:text-3xl justify-between  max-w-24  opacity-40">
                <GrGraphQl data-tooltip-id="stacks"  data-tooltip-content="GraphQl"/>
                <FaGit  data-tooltip-id="stacks"  data-tooltip-content="Git"/> 
                <DiJira data-tooltip-id="stacks"  data-tooltip-content="Jira" />
                <SiStorybook data-tooltip-id="stacks"  data-tooltip-content="Storybook" />
                <SiTailwindcss className="text-9xl"  data-tooltip-id="stacks"  data-tooltip-content="Tailwind CSS"/>
                <SiBootstrap data-tooltip-id="stacks"  data-tooltip-content="Bootstrap" />
                <SiJest data-tooltip-id="stacks"  data-tooltip-content="Jest" />
                <SiExpo  data-tooltip-id="stacks"  data-tooltip-content="Expo"/>
            </div>
            <Tooltip place="top" effect="solid" id="stacks" />
        </div>
    );
}

export default StacksComponents;