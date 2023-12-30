const NavComponent = () => {
    return ( 
        <div className="nav mt-20">
            <ul className="[&>li]:p-10 [&>li]:text-xl [&>li]:tracking-wider [&>li]:font-light [&>li]:cursor-pointer">
                <li className="hover:bg-slate-600 hover:bg-opacity-10"><a href="#">About</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"> <a href="#">Experiences</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"> <a href="#">Education</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"><a href="#">Projects</a></li>
                <li className="hover:bg-slate-600 hover:bg-opacity-10"><a href="#">Contact</a></li>
            </ul>
        </div>
     );
}
 
export default NavComponent;