import React, { useState } from 'react';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [email, setEmail] = useState('');
  const [subscribedPlan, setSubscribedPlan] = useState('');

  const handleSignUpClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert('Cám ơn bạn đã đăng kí dịch vụ.');
    setSubscribedPlan(selectedPlan);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 lg:p-8 pt-0 mb-8 text-gray-700 relative">
      <h4 className="text-xl font-bold mb-6">How much I charge</h4>
      {/* Pricing Tables */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <ul className={`${subscribedPlan === 'Basic' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-white border-gray-300'} text-center hover:shadow-xl transition-all opacity-90 hover:opacity-100 flex flex-col border`}>
          <li className={`${subscribedPlan === 'Basic' ? 'bg-green-600' : 'bg-gray-900'} text-white text-2xl py-8 transition-colors`}>Basic</li>
          <li className="py-4 border-b border-gray-200">Web Design</li>
          <li className="py-4 border-b border-gray-200">Photography</li>
          <li className="py-4 border-b border-gray-200">1GB Storage</li>
          <li className="py-4 border-b border-gray-200">Mail Support</li>
          <li className={`py-6 border-b border-gray-200 transition-colors ${subscribedPlan === 'Basic' ? 'bg-green-100' : 'bg-gray-50'}`}>
            <h2 className="text-3xl font-normal mb-1">$ 10</h2>
            <span className="text-gray-500">per month</span>
          </li>
          <li className={`py-6 mt-auto transition-colors ${subscribedPlan === 'Basic' ? 'bg-green-200' : 'bg-gray-100'}`}>
            <button onClick={() => handleSignUpClick('Basic')} className="bg-teal-500 text-white hover:bg-black hover:text-white px-6 py-3 transition-colors cursor-pointer">{subscribedPlan === 'Basic' ? 'Đã Chọn' : 'Sign Up'}</button>
          </li>
        </ul>

        <ul className={`${subscribedPlan === 'Pro' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-white border-gray-300'} text-center hover:shadow-xl transition-all opacity-90 hover:opacity-100 flex flex-col border`}>
          <li className={`${subscribedPlan === 'Pro' ? 'bg-green-600' : 'bg-teal-500'} text-white text-2xl py-8 transition-colors`}>Pro</li>
          <li className="py-4 border-b border-gray-200">Web Design</li>
          <li className="py-4 border-b border-gray-200">Photography</li>
          <li className="py-4 border-b border-gray-200">50GB Storage</li>
          <li className="py-4 border-b border-gray-200">Endless Support</li>
          <li className={`py-6 border-b border-gray-200 transition-colors ${subscribedPlan === 'Pro' ? 'bg-green-100' : 'bg-gray-50'}`}>
            <h2 className="text-3xl font-normal mb-1">$ 25</h2>
            <span className="text-gray-500">per month</span>
          </li>
          <li className={`py-6 mt-auto transition-colors ${subscribedPlan === 'Pro' ? 'bg-green-200' : 'bg-gray-100'}`}>
            <button onClick={() => handleSignUpClick('Pro')} className="bg-teal-500 text-white hover:bg-black hover:text-white px-6 py-3 transition-colors cursor-pointer">{subscribedPlan === 'Pro' ? 'Đã Chọn' : 'Sign Up'}</button>
          </li>
        </ul>

        <ul className={`${subscribedPlan === 'Premium' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-white border-gray-300'} text-center hover:shadow-xl transition-all opacity-90 hover:opacity-100 flex flex-col border`}>
          <li className={`${subscribedPlan === 'Premium' ? 'bg-green-600' : 'bg-gray-900'} text-white text-2xl py-8 transition-colors`}>Premium</li>
          <li className="py-4 border-b border-gray-200">Web Design</li>
          <li className="py-4 border-b border-gray-200">Photography</li>
          <li className="py-4 border-b border-gray-200">Unlimited Storage</li>
          <li className="py-4 border-b border-gray-200">Endless Support</li>
          <li className={`py-6 border-b border-gray-200 transition-colors ${subscribedPlan === 'Premium' ? 'bg-green-100' : 'bg-gray-50'}`}>
            <h2 className="text-3xl font-normal mb-1">$ 25</h2>
            <span className="text-gray-500">per month</span>
          </li>
          <li className={`py-6 mt-auto transition-colors ${subscribedPlan === 'Premium' ? 'bg-green-200' : 'bg-gray-100'}`}>
            <button onClick={() => handleSignUpClick('Premium')} className="bg-teal-500 text-white hover:bg-black hover:text-white px-6 py-3 transition-colors cursor-pointer">{subscribedPlan === 'Premium' ? 'Đã Chọn' : 'Sign Up'}</button>
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 !ml-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
          <div className="bg-white p-8 w-full max-w-md relative border border-gray-300 shadow-xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-4 text-3xl font-bold cursor-pointer hover:text-gray-500">&times;</button>
            <h2 className="text-2xl font-bold mb-4">Gói {selectedPlan}</h2>
            <p className="mb-4 text-sm">Vui lòng để lại email:</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 p-3 mb-4 outline-none focus:border-teal-500"
                placeholder="Nhập email..."
              />
              <button type="submit" className="w-full bg-teal-500 text-white py-3 hover:bg-black transition-colors cursor-pointer font-bold">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
