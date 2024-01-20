import TimelineComponents from "./timelineComponent";

const ExperienceComponent = () => {
    return ( 
        <div className="exp md:p-24 ">
           <div className=" w-36 ">
             <h1 className="text-2xl ex-h1  border-pink-500 border-b-2 ">Experiences</h1>
           </div>
            <TimelineComponents />
        </div>
     );
}
 
export default ExperienceComponent;