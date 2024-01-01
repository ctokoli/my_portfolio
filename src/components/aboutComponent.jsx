const AboutComponent = () => {
    return ( 
        <div className="p-20">
            <div className="w-20 ">
                <h1 className="text-2xl border-pink-500 border-b-2 ">About</h1>
            </div>
            <h1 className=" text-6xl mt-20">Cephas Tokoli</h1>
            <h2 className="mt-5 text-3xl text-pink-500">Full-Stack Developer</h2>
            <p></p>
           <div className="mt-10">
           <button className="bg-pink-500 px-6 py-2">Hire me</button>
           <button className="px-4 py-2 bg-slate-500 bg-opacity-20 ml-4">Know more</button>
           </div>
        </div>
     );
}
 
export default AboutComponent;