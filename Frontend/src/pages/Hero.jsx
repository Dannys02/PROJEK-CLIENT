import React, { useState, useEffect } from 'react';

const PortfolioHome = () => {

    return (
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-white">
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Hi, I'm <span className="text-indigo-600">Dannys Martha F</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                        Full Stack Developer
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-lg">
                        Saya seorang pengembang web yang bersemangat dalam menciptakan solusi digital yang inovatif dan fungsional.
                        Saya berfokus pada pengembangan aplikasi web modern dengan teknologi terbaru.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Lihat Proyek
                        </a>
                        <a
                            href="#contact"
                            className="hubungiSaya relative z-[2] overflow-hidden border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 hover:text-white transition-colors after:z-[0] duration-300 after:bg-indigo-600"
                        >
                            <span className="relative z-[3]">Hubungi Saya</span>
                        </a>
                    </div>
                </div>
                <div className="relative md:w-1/2 flex justify-center items-center">
                    <div className='absolute rounded-full border border-black'></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-black">
                        <img
                            src="https://i.pinimg.com/736x/cf/bc/62/cfbc6290a8c664fc99290d458acc3e1c.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHome;