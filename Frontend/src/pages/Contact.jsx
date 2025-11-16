import React from "react";

function Contact() {
    const socials = [
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
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Hubungi Saya
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Tertarik untuk berkolaborasi atau memiliki pertanyaan?
                    Jangan ragu untuk menghubungi saya.
                </p>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 mb-2"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="Nama lengkap Anda"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="email@contoh.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 mb-2"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="Tulis pesan Anda di sini..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-indigo-50 rounded-xl p-8 h-full">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">
                                Informasi Kontak
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-lg mr-4">
                                        <i class="fas fa-phone w-6 h-6 text-indigo-600 text-center"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">
                                            Telepon
                                        </h4>
                                        <p className="text-gray-600">
                                            +62 851 2234 9965
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-lg mr-4">
                                        <i class="fas fa-envelope w-6 h-6 text-indigo-600 text-center"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">
                                            Email
                                        </h4>
                                        <p className="text-gray-600">
                                            Dannys@example.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-lg mr-4">
                                        <i class="fas fa-map-marker-alt w-6 h-6 text-indigo-600 text-center"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">
                                            Lokasi
                                        </h4>
                                        <p className="text-gray-600">
                                            Banyuwangi, Jawa Timur
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-indigo-100">
                                <h4 className="font-medium text-gray-800 mb-2">
                                    Ikuti Saya
                                </h4>
                                <div className="flex space-x-4">
                                    {socials.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            className="p-3 rounded-lg text-indigo-600 hover:text-indigo-800 hover:shadow-md transition-all duration-300"
                                        >
                                            <i
                                                className={`${item.icon} text-3xl transition-colors duration-300`}
                                            ></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
