import React from "react";

function Footer() {
    const icons = [
        {
            icon: "fa-brands fa-linkedin",
            link: "#"
        },
        {
            icon: "fa-brands fa-github",
            link: "#"
        },
        {
            icon: "fa-brands fa-instagram",
            link: "#"
        },
        {
            icon: "fa-brands fa-tiktok",
            link: "#"
        }
    ];
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
                        {[
                            "home",
                            "about",
                            "projects",
                            "services",
                            "contact"
                        ].map(item => (
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
                    <div className="flex gap-5">
                        {icons.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="relative bg-transparent rounded-md text-indigo-50"
                            >
                                <i
                                    className={`${item.icon} text-2xl transition-colors duration-300 hover:text-indigo-500`}
                                ></i>
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
