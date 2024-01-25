import StacksComponents from "./stacks";

const AboutComponent = () => {
    return ( 
        <div className="about md:w-8/12 md:p-24 sm:p-10">
            <div className="w-20 mt-5">
                <h1 className="text-2xl border-pink-500 border-b-2">About</h1>
            </div>
            <h1 className=" text-5xl  mt-5 animate__animated animate__fadeInDown duration-500 delay-200">Cephas Tokoli</h1>
            <h2 className="mt-5 text-3xl text-pink-500 animate__animated animate__fadeInDown duration-500 delay-200">Full-Stack Developer</h2>
            <div className="bg-size md:max-w-24 mt-3 opacity-60 animate__animated animate__slideInLeft duration-500 delay-200">
                <p className=" md:text-xl md:leading-9 "> I&apos;m a Full-Stack Engineer and Mentor with a strong background in software development with over 4 years of hands-on experience in both frontend and backend development. Skilled in JavaScript, React, Ruby on Rails, and Node.js.</p>
                <p className="md:text-xl md:leading-9 "> Excelled in remote pair programming and mentoring roles. Actively involved in the development of 50+ projects using Reactjs and other tools.</p>
            </div>
             <div>
                <h2 className="mt-5 text-2xl text-pink-500 animate__animated animate__fadeInDown duration-500 delay-200 ">Tech Stacks</h2>
                <StacksComponents />
            </div>
           <div className="mt-10 animate__animated animate__slideInLeft duration-500 delay-200">
            <a href="mailto:matumasie@gmail.com" className="bg-pink-500 px-6 py-2">Hire me</a>
            <a href="https://docs.google.com/document/d/11iauSLc-i97ssgNfGcGQPXuSEMkOCzHZbxFalAEykMM/edit?usp=sharing" className="px-4 py-2 bg-slate-500 bg-opacity-20 ml-4">Download Resume</a>
           </div>
          
        </div>
     );
}
 
export default AboutComponent;