import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white p-4 lg:p-8 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-normal mb-6">FOOTER</h3>
                        <p className="mb-4 text-sm leading-relaxed">Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        <p className="text-sm">Powered by <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="underline hover:text-gray-300">Tailwind CSS</a></p>
                    </div>

                    <div>
                        <h3 className="text-xl font-normal mb-6">BLOG POSTS</h3>
                        <ul className="flex flex-col gap-0 border-t border-gray-700">
                            <li className="flex items-center gap-4 hover:bg-gray-700 p-4 border-b border-gray-700 cursor-pointer transition-colors">
                                <img src="https://www.w3schools.com/w3images/workshop.jpg" className="w-[50px] object-cover" alt="Image" />
                                <div>
                                    <span className="text-lg block">Lorem</span>
                                    <span className="text-sm">Sed mattis nunc</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 hover:bg-gray-700 p-4 border-b border-gray-700 cursor-pointer transition-colors">
                                <img src="https://www.w3schools.com/w3images/gondol.jpg" className="w-[50px] object-cover" alt="Image" />
                                <div>
                                    <span className="text-lg block">Ipsum</span>
                                    <span className="text-sm">Praes tinci sed</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-normal mb-6">POPULAR TAGS</h3>
                        <p className="flex flex-wrap gap-1">
                            <span className="bg-black text-white px-2 py-1 text-sm font-semibold mb-1">Travel</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">New York</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">London</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">IKEA</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">NORWAY</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">DIY</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">Ideas</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">Baby</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">Family</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">News</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">Clothing</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">Shopping</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">Sports</span>
                            <span className="bg-gray-600 text-white px-2 py-1 text-[12px] mb-1">Games</span>
                        </p>
                    </div>

                </div>
            </footer>

            <div className="bg-black text-white text-center py-8">
                Powered by <a href="https://tailwindcss.com" title="Tailwind CSS" target="_blank" className="hover:opacity-75 underline" rel="noreferrer">Tailwind CSS</a>
            </div>
        </>
    );
}