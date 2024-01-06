const NavComponent = () => {
    return ( 
        <div className="nav mt-20">
            <ul className="[&>li]:p-8 [&>li]:text-xl [&>li]:tracking-wider [&>li]:font-light [&>li]:cursor-pointer">
                <li className="hover:bg-slate-600 hover:bg-opacity-10"><a href="/about">About</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"> <a href="/experience">Experiences</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"> <a href="/education">Education</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"><a href="/projects">Projects</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"><a href="/contact">Contact</a></li>
            </ul>
        </div>
     );
}
 
export default NavComponent;