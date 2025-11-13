import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center mb-6 flex flex-col gap-5 justify-between items-start md:flex-row">
                <div className="w-fit text-start">
                    <h2 className="footer-title text-2xl font-bold text-indigo-400 mb-4 after:bg-indigo-800">
                        Portfolio
                    </h2>
                    <p className="text-start max-w-[190px]">
                        Berpengalaman 5+ tahun dalam pengembangan web, ahli
                        frontend, backend, dan arsitektur aplikasi.
                    </p>
                </div>
                <div className="w-fit">
                    <h2 className="footer-title text-2xl font-bold text-indigo-400 mb-4 after:bg-indigo-800">
                        Link cepat
                    </h2>
                    <div className="flex flex-col items-start gap-2">
                        {["home", "about", "projects", "services", "contact"].map(item => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="navbar-a w-fit relative capitalize text-indigo-50 hover:text-indigo-500 transition-colors duration-300 after:bg-indigo-600"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-fit">
                    <h2 className="footer-title text-2xl font-bold text-indigo-400 mb-4 after:bg-indigo-800">
                        Sosial media
                    </h2>
                    <div className="flex justify-center gap-4">
                        {[
                            <i class='fa-brands fa-linkedin px-1 text-xl'></i>,
                            <i class='fa-brands fa-github px-1 text-xl'></i>,
                            <i class='fa-brands fa-instagram px-1 text-xl'></i>
                        ].map(icon => (
                            <a
                                key={icon}
                                href={"#${icon}"}
                                className="w-fit relative bg-indigo-800 p-1 rounded-xl capitalize text-indigo-50 hover:bg-indigo-600 transition-colors duration-300 after:bg-indigo-600"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-center">
                © {new Date().getFullYear()} Dannys. Hak cipta dilindungi.
            </p>
        </footer>
    );
}

export default Footer;
