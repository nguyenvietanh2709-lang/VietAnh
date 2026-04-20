import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ Name: '', Email: '', Message: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <div className="bg-[#9e9e9e] p-4 lg:p-8 flex-col text-gray-900 relative">
            <h4 id="contact" className="text-2xl font-bold mb-6">Contact Me</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-8 -mx-4 lg:-mx-8">
                <div className="bg-gray-800 text-white py-8 text-center">
                    <p><i className="fa fa-envelope text-4xl text-gray-300 mb-2"></i></p>
                    <p>email@email.com</p>
                </div>
                <div className="bg-teal-500 text-white py-8 text-center">
                    <p><i className="fa fa-map-marker text-4xl text-gray-300 mb-2"></i></p>
                    <p>Chicago, US</p>
                </div>
                <div className="bg-gray-800 text-white py-8 text-center">
                    <p><i className="fa fa-phone text-4xl text-gray-300 mb-2"></i></p>
                    <p>512312311</p>
                </div>
            </div>
            <hr className="my-6 border-gray-500 opacity-50" />
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Name</label>
                    <input className="w-full border border-gray-400 p-2 outline-none focus:border-black" type="text" name="Name" value={formData.Name} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Email</label>
                    <input className="w-full border border-gray-400 p-2 outline-none focus:border-black" type="email" name="Email" value={formData.Email} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Message</label>
                    <input className="w-full border border-gray-400 p-2 outline-none focus:border-black" type="text" name="Message" value={formData.Message} onChange={handleChange} required />
                </div>
                <button type="submit" className="bg-black text-white hover:bg-gray-300 hover:text-black px-6 py-3 mb-4 transition-colors font-medium cursor-pointer">
                    <i className="fa fa-paper-plane mr-2"></i>Send Message
                </button>
            </form>

            {isModalOpen && (
                <div className="fixed inset-0 !ml-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
                    <div className="bg-white p-8 w-full max-w-md relative border border-gray-300 shadow-xl text-left">
                        <button onClick={() => { setIsModalOpen(false); setFormData({ Name: '', Email: '', Message: '' }); }} className="absolute top-2 right-4 text-3xl font-bold cursor-pointer hover:text-gray-500">&times;</button>
                        <h2 className="text-2xl font-bold mb-6 text-center">Thông tin đã gửi</h2>
                        <div className="mb-4">
                            <strong className="block text-gray-700">Name:</strong>
                            <p className="border-b border-gray-200 pb-2">{formData.Name}</p>
                        </div>
                        <div className="mb-4">
                            <strong className="block text-gray-700">Email:</strong>
                            <p className="border-b border-gray-200 pb-2">{formData.Email}</p>
                        </div>
                        <div className="mb-6">
                            <strong className="block text-gray-700">Message:</strong>
                            <p className="border-b border-gray-200 pb-2 whitespace-pre-wrap">{formData.Message}</p>
                        </div>
                        <button onClick={() => { setIsModalOpen(false); setFormData({ Name: '', Email: '', Message: '' }); }} className="w-full bg-teal-500 text-white py-3 hover:bg-black transition-colors cursor-pointer font-bold">
                            Hoàn tất
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}