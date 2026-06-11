
import { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('bKash'); // Default selected

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Secure Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
    
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-700 mb-6 border-b pb-2">Billing Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none" />
              <input type="text" placeholder="Mobile Number" className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none" />
              <input type="email" placeholder="Email Address" className="w-full border-gray-200 border rounded-xl p-4 col-span-1 md:col-span-2 focus:ring-2 focus:ring-green-500 outline-none" />
              <input type="text" placeholder="Shipping Address" className="w-full border-gray-200 border rounded-xl p-4 col-span-1 md:col-span-2 focus:ring-2 focus:ring-green-500 outline-none" />
            </div>
          </div>
        </div>

      
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-4">
            <h3 className="text-lg font-bold text-gray-700 mb-6">Payment Method</h3>
            
            <div className="space-y-4">
              {['bKash', 'Nagad', 'Rocket'].map((method) => (
                <div 
                  key={method} 
                  className={`border-2 rounded-xl p-4 cursor-pointer transition ${paymentMethod === method ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}
                  onClick={() => setPaymentMethod(method)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">{method}</span>
                    <input type="radio" checked={paymentMethod === method} readOnly className="accent-green-600" />
                  </div>
                </div>
              ))}
            </div>

        
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
              <p className="font-semibold mb-2">Send payment to:</p>
              <p className="font-bold text-lg text-green-700 mb-3">01XXX-XXXXXX</p>
              <input 
                type="text" 
                placeholder="Enter Transaction ID" 
                className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-green-500 outline-none" 
              />
            </div>

            <button className="w-full mt-8 bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition shadow-lg shadow-green-200">
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;