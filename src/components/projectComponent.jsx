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
    // const [modalIsOpen, setIsOpen] = useState(false)
    // let subtitle;

    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }
    return (
        <div className="exp md:p-24 ">
            <div className=" w-28 ">
                <h1 className="text-2xl ex-h1 border-pink-500 border-b-2 ">Projects</h1>
            </div>
            <div className="projects grid md:grid-cols-3 gap-8 md:gap-x-20 mt-14 m-auto justify-center">
                {data.map((project, index) => (
                    <div key={index} className=" w-80 text-slate-800 mb-5 bg-fuchsia-100 rounded-md" data-tooltip-id="project" data-tooltip-content={project.project_name} >
                        <img className="p-5" src={project.project_image} alt="project image" />
                       <div className="flex flex-col justify-around"> 
                       <div className="pl-5 pr-3">
                            <h2 className=" font-bold">{project.project_name}</h2>
                            <p className="pt-2">{project.description}</p>
                        </div>
                        <div className="pl-5 mt-5 pb-5">
                            <a href={project.link} className="bg-pink-500 px-6 py-2 text-slate-100 mr-5" >View</a>
                            <a href={project.github} className=" bg-slate-500 px-6 py-2 text-slate-100 mr-5">Github</a>
                        </div>
                       </div>
                        {/* <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <button onClick={closeModal}>close</button>
                            <div>
                                <img src={project.project_image} alt="" />
                                <h2 className="">{project.project_name}</h2>
                            </div>
                        </Modal> */}
                    </div>

                ))}
                <Tooltip place="top" effect="solid" id="project" />
            </div>
        </div>
    );
}

export default ProjectComponent;