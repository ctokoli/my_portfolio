import StacksComponents from "./stacks";

const AboutComponent = () => {
    return ( 
        <div className="about md:w-8/12 md:p-24 sm:p-10">
            <div className="w-20 mt-5">
                <h1 className="text-2xl border-pink-500 border-b-2">About</h1>
            </div>
            <h1 className=" text-5xl  mt-5 ">Cephas Tokoli</h1>
            <h2 className="mt-5 text-3xl text-pink-500">Full-Stack Developer</h2>
            <div className="bg-size md:max-w-24 mt-3 opacity-60 ">
                <p className=" md:text-xl md:leading-9 "> I&apos;m a  𝗙𝘂𝗹𝗹-𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 and Mentor with a experience in Frontend and Backend Development spanning 10 years in the IT industry. Proficient in JavaScript, React, Ruby on Rails, Flutter, and Node.js.  Throughout my  career, I&apos;ve transitioned through different roles and developed more than 50+ websites using WordPress, Reactjs and other tools.</p>
            </div>
             <div>
                <h2 className="mt-5 text-2xl text-pink-500">Tech Stacks</h2>
                <StacksComponents />
            </div>
           <div className="mt-10">
            <a href="mailto:matumasie@gmail.com" className="bg-pink-500 px-6 py-2">Hire me</a>
            <a href="https://docs.google.com/document/d/11iauSLc-i97ssgNfGcGQPXuSEMkOCzHZbxFalAEykMM/edit?usp=sharing" className="px-4 py-2 bg-slate-500 bg-opacity-20 ml-4">Download Resume</a>
           </div>
          
        </div>
     );
}
 
export default AboutComponent;