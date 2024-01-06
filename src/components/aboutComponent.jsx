const AboutComponent = () => {
    return ( 
        <div className="p-24">
            <div className="w-20">
                <h1 className="text-2xl border-pink-500 border-b-2">About</h1>
            </div>
            <h1 className=" text-6xl mt-20">Cephas Tokoli</h1>
            <h2 className="mt-5 text-3xl text-pink-500">Full-Stack Developer</h2>
            <div className=" w-8/12 mt-3 opacity-60 ">
                <p className="text-2xl leading-9 "> I&apos;m a  𝗙𝘂𝗹𝗹-𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 and Mentor with a experience in Frontend and Backend Development spanning 10 years in the IT industry. Proficient in JavaScript, React, Ruby on Rails, Flutter, and Node.js.  Throughout my  career, I&apos;ve transitioned through different roles and developed more than 50+ websites using WordPress, Reactjs and other tools.</p>
            </div>
           <div className="mt-10">
            <button className="bg-pink-500 px-6 py-2">Hire me</button>
            <button className="px-4 py-2 bg-slate-500 bg-opacity-20 ml-4">Download Resume</button>
           </div>
        
        </div>
     );
}
 
export default AboutComponent;