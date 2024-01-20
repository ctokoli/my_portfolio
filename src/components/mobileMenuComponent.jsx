import { useState } from "react";

const MobileMenuComponent = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
      };

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <button
                id="menuToggle"
                className="lg:hidden bg-gray-800 p-4 text-white focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Mobile Menu */}
            <div
                id="mobileMenu"
                className={`lg:hidden fixed top-0 left-0 w-full z-40 h-full bg-gray-900 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } transition-opacity ease-in-out duration-300`}
            >
                <div className="p-4">
                    {/* Close Button */}
                    <button
                        className="text-white float-right text-2xl focus:outline-none"
                        onClick={closeMobileMenu}
                    >
                        &times;
                    </button>

                    {/* Your mobile menu content goes here */}
                    <ul className="text-white text-2xl ">
                        <li>
                            <a href="/" className="block py-3 hover:bg-slate-800">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/experience" className="block py-3 hover:bg-slate-800">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="/education" className="block py-3 hover:bg-slate-800">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="block py-3 hover:bg-slate-800">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-3 hover:bg-slate-800">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Your webpage content goes here */}

        </>
    )
};

export default MobileMenuComponent;