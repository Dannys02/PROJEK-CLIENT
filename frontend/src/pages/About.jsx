import React from 'react';

function About() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Tentang Saya</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <div className="w-88 h-88 rounded-full overflow-hidden border-4 border-indigo-100">
                            <img
                                src="https://i.pinimg.com/736x/cf/bc/62/cfbc6290a8c664fc99290d458acc3e1c.jpg"
                                alt="About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3 md:pl-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Latar Belakang & Keahlian</h3>
                        <p className="text-gray-600 mb-6">
                            Saya memiliki pengalaman lebih dari 5 tahun dalam pengembangan web. Saya ahli dalam
                            berbagai teknologi frontend dan backend, serta memiliki kemampuan dalam merancang
                            arsitektur aplikasi yang scalable dan maintainable.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design', 'Laravel'].map((skill) => (
                                <div key={skill} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-center hover:bg-indigo-100">
                                    {skill}
                                </div>
                            ))}
                        </div>

                        <a
                            href="#"
                            className="CV inline-flex items-center overflow-hidden bg-indigo-50 after:bg-indigo-600 py-3 px-6 rounded-lg text-indigo-600 hover:shadow-lg hover:shadow-indigo-600 font-medium transition-colors duration-300"
                        >
                            Unduh CV
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;