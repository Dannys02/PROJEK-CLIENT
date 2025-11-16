import React, { useState, useEffect } from "react";

function Navbar() {
    const [click, setClick] = useState(false);

    const clicked = e => {
        e.stopPropagation();
        setClick(!click);
    };

    const outClick = () => {
        setClick(false);
    };

    useEffect(() => {
        document.addEventListener("click", outClick);
        return () => {
            document.removeEventListener("click", outClick);
        };
    }, []);

    return (
        <header className="header fixed w-full shadow-sm px-4 z-[50] border-b border-indigo-300">
            <div className="container mx-auto py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-indigo-600">
                    Portfolio
                </a>

                {/* Menu Desktop */}
                <nav
                    className={`nav-main rounded-lg z-[45] fixed top-[100%] transition-transform duration-300 ${
                        click ? "translate-y-[0]" : "translate-y-[-130%]"
                    } left-1/2 translate-x-[-50%] bg-indigo-500 py-9 px-7 flex flex-col w-[90%] gap-3 md:relative md:left-0 md:translate-x-0 md:bg-transparent md:translate-y-0 md:flex md:w-fit md:p-0 md:flex-row md:gap-0 md:space-x-8`}
                >
                    {["home", "about", "projects", "services", "contact"].map(
                        item => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="navbar-a relative inline-block w-fit capitalize text-white md:text-black hover:text-white after:bg-white md:hover:text-indigo-500 transition-colors duration-300 md:after:bg-indigo-600"
                            >
                                {item}
                            </a>
                        )
                    )}
                </nav>

                <button
                    onClick={clicked}
                    className="md:hidden flex flex-col justify-between text-gray-600 w-6 h-5 focus:outline-none"
                >
                    <span className="w-full  bg-indigo-600 p-[1.5px] rounded-sm"></span>
                    <span className="w-full  bg-indigo-600 p-[1.5px] rounded-sm"></span>
                    <span className="w-full bg-indigo-600 p-[1.5px] rounded-sm"></span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;
