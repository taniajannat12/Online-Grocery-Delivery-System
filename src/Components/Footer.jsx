

// export default Footer;
import { GiFruitBowl } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
     
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GiFruitBowl className="text-5xl text-orange-400" />
            <h1 className="text-4xl font-bold">Bacalo</h1>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8">
            Shop for groceries online at Bacalo and get everything delivered right in time. 
            We offer non-GMO farm produce from the best local producers.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp, FaEnvelope].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-orange-400 flex items-center justify-center rounded cursor-pointer hover:bg-orange-500 transition">
                <Icon className="text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Navigation</h3>
          <ul className="space-y-4 text-gray-400">
            {/* Link গুলোকে Link কম্পোনেন্ট দিয়ে মুড়িয়ে দিন */}
            <li><Link to="/" className="hover:text-lime-500 transition">Home</Link></li>
            <li><Link to="/category/Fruits" className="hover:text-lime-500 transition">Shop</Link></li>
            <li><Link to="/Contact" className="hover:text-lime-500 transition">Contact Us</Link></li>
            <li><Link to="/SignPage" className="hover:text-lime-500 transition">Sign Up</Link></li>
            <li><Link to="/Cart" className="hover:text-lime-500 transition">Cart</Link></li>
            <li><Link to="/Checkout" className="hover:text-lime-500 transition">Checkout</Link></li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Contacts</h3>
          <div className="space-y-6 text-gray-400">
            <div>
              <p className="font-bold text-white">Address</p>
              <p>1010 3rd Ave, New York</p>
            </div>
            <div>
              <p className="font-bold text-white">Phone</p>
              <p>+1 (234) 567 89 00</p>
            </div>
            <div>
              <p className="font-bold text-white">E-mail</p>
              <p>bacalo@email.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm text-center">
        <p>© Created by Bacalo | All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;