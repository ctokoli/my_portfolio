import data from "./projectData";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
// import Modal from 'react-modal';
// import { useState } from "react";

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

const ProjectComponent = () => {
    
    return (
        <div className="exp md:p-24 ">
            <div className=" w-28 ">
                <h1 className="text-2xl ex-h1 border-pink-500 border-b-2 ">Projects</h1>
            </div>
            <div className="projects grid md:grid-cols-3 gap-8 md:gap-x-20 mt-14 m-auto justify-center">
                {data.map((project, index) => (
                    <div key={index} className="w-80 text-slate-800 mb-5 bg-fuchsia-100 rounded-md animate__animated animate__zoomIn duration-500 delay-200" data-tooltip-id="project" data-tooltip-content={project.project_name} >
                        <img className="p-5" src={project.project_image} alt="project image" />
                       <div className="flex flex-col justify-around"> 
                       <div className="pl-5 pr-3">
                            <h2 className="font-bold">{project.project_name}</h2>
                            <p className="pt-2">{project.description}</p>
                        </div>
                        <div className="pl-5 pr-3 mt-5">
                            <h3 className="font-bold">Tech Stack</h3>
                            <p>{project.tech_stack}</p>
                        </div>
                        <div className="pl-5 mt-5 pb-5">
                            <a href={project.link} target="_blank" className="bg-pink-500 px-6 py-2 text-slate-100 mr-5" >View</a>
                            <a href={project.github} target="_blank" className=" bg-slate-500 px-6 py-2 text-slate-100 mr-5">Github</a>
                        </div>
                       </div>
                    
                    </div>

                ))}
                <Tooltip place="top" effect="solid" id="project" />
            </div>
        </div>
    );
}

export default ProjectComponent;