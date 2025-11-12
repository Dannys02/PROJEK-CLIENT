import React from 'react';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Aplikasi E-commerce",
            description: "Platform e-commerce dengan fitur lengkap untuk penjualan online",
            image: "https://i0.wp.com/gits.id/wp-content/uploads/2021/02/Hijup-scaled-1.jpg?resize=800%2C397&ssl=1",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            title: "Sistem Manajemen Konten",
            description: "CMS custom dengan antarmuka drag-and-drop yang intuitif",
            image: "https://www.seoptimer.com/storage/images/2024/01/5107-what%20is%20a%20cms.png",
            tags: ["Vue.js", "PHP", "MySQL"]
        },
        {
            id: 3,
            title: "Aplikasi Mobile Finansial",
            description: "Aplikasi mobile untuk manajemen keuangan pribadi",
            image: "https://www.zohowebstatic.com/sites/zweb/images/creator/app-deck/financial-management-software-ss2.png",
            tags: ["React Native", "Firebase", "Redux"]
        }
    ];

    return (
        < section id="projects" className="py-16 bg-gray-50" >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Proyek Terbaru</h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Berikut adalah beberapa proyek yang telah saya kerjakan, menunjukkan kemampuan dan pengalaman
                    saya dalam pengembangan web.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center mt-2 text-indigo-50 rounded-lg py-3 px-6 bg-indigo-600 font-medium hover:bg-indigo-800 transition-colors duration-300"
                                >
                                    Lihat Detail
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center"
                    >
                        Lihat Semua Proyek
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Projects;