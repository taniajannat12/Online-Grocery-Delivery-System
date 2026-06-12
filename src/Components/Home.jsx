import { GiFruitBowl } from "react-icons/gi";
import Footer from './Footer';

import groceryImg from "../assets/grocery.jpg";


import fruitIcon from "../assets/icon1.svg";
import vegetableIcon from "../assets/icon2.svg";
import berriesIcon from "../assets/icon3.svg";
import nutsIcon from "../assets/icon4.svg";
import beverageIcon from "../assets/icon5.svg";

import aboutImg1 from "../assets/aboutImg1.jpg";

import chooseImg from "../assets/icon6.svg";
import orderImg from "../assets/icon7.svg";
import deliveryImg from "../assets/icon8.svg";
import footerBg from "../assets/footer.jpg";
import { FaAppleAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Groceryhome = () => {
  const categories = [
    { icon: fruitIcon, title: "Fresh Fruit" },
    { icon: vegetableIcon, title: "Vegetables" },
    { icon: berriesIcon, title: "Berries" },
    { icon: nutsIcon, title: "Nuts" },
    { icon: beverageIcon, title: "Beverages" },
  ];
const reviews = [
    { name: "Rahim Ahmed", text: "Excellent service! The vegetables are always super fresh.", rating: 5 },
    { name: "Fatima Begum", text: "Timely delivery and the packaging quality is very good.", rating: 5 },
    { name: "Karim Khan", text: "Best platform for online grocery shopping. Highly recommended!", rating: 4 },
 { name: "Rahima Khan", text: "Excellent service! The Fruits are always super fresh.", rating: 5 },
    { name: "Fatima Jahan", text: "Timely delivery and the packaging quality is best.", rating: 5 },
    { name: "Rohan Shikdar", text: "Best platform for online grocery Delivery shopping. Best!", rating: 5},



  ];
  return (
  <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-16 py-5 bg-white">
        <div className="flex items-center gap-4">
          <GiFruitBowl className="text-6xl text-orange-400" />

          <div>
            <h1 className="text-5xl font-bold leading-none text-gray-800">
              Bacalo
            </h1>

            <p className="mt-1 text-[10px] tracking-[4px] text-gray-500">
              ONLINE GROCERY STORE
            </p>
          </div>
        </div>

       <ul className="flex gap-10 text-lg font-small">
  <li>
    <a
      href="#AboutUs"
      className="hover:text-lime-500 transition duration-300"
    >
      About Us
    </a>
  </li>
 <li>
    <a
      href="#Deals"
      className="hover:text-lime-500 transition duration-300"
    >
      Shop
    </a>
  </li>
  

  <li>
    <a
      href="#Deals"
      className="hover:text-lime-500 transition duration-300"
    >
      Best Deals
    </a>
  </li>

  <li>
    <a
      href="#Contact"
      className="hover:text-lime-500 transition duration-300"
    >
      Contact
    </a>
  </li>
  
   <li>
    <a
      href="#Deals"
      className="hover:text-lime-500 transition duration-300"
    >
     Sign Up
    </a>
  </li>
   <li>
    <a
      href="#Deals"
      className="hover:text-lime-500 transition duration-300"
    >
     Login
    </a>
  </li>
</ul>
      </nav>
  

      {/* Hero Section */}
      <section
        className="h-[90vh] bg-cover  ml-auto bg-center flex items-center"
        style={{
          backgroundImage: `url(${groceryImg})`,
        }}
      >
        <div className="pl-16 max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-lime-500 leading-tight">
            Shop for Groceries
          </h1>

          <h2 className="text-5xl lg:text-6xl font-bold text-black mt-3">
            Online Here
          </h2>

          <p className="text-gray-700 text-xl mt-6 max-w-xl">
            Fresh vegetables, fruits and daily essentials delivered directly to
            your doorstep.
          </p>

          <button className="mt-8 bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-lg font-medium">
            Shop Now
          </button>
        </div>
      </section>

     {/* Category Section */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
     

      <h2 className="text-4xl font-bold text-gray-700 mt-3">
        Shop By Category
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {categories.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          {/* Circle */}
          <div className="w-30 h-30 rounded-full bg-[#eef0e8] flex items-center justify-center hover:scale-105 transition duration-300">
            <img
              src={item.icon}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="mt-6 text-2xl font-bold text-gray-800">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
{/* About Section */}
<section id="AboutUs" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Side Image */}
      <div>
        <img
          src={aboutImg1}
          alt="Fresh Grocery"
          className="w-full max-w-[550px] h-[650px] object-cover rounded-[30px] shadow-xl"
        />
      </div>

      {/* Right Side Content */}
      <div>
        <p className="text-yellow-500 font-semibold text-l">
          About Us
        </p>

        <h2 className="text-1xl lg:text-4xl font-bold text-gray-800 mt-5 leading-tight">
          Fresh Produce Delivered 
        </h2>

        <p className="text-gray-600 text-lg leading-9 mt-8">
          Shop for groceries online and get everything delivered right on
          time. We make your daily routine easier and bring fresh products
          directly to your doorstep.
        </p>

        {/* Feature List */}
      <div className="grid grid-cols-4 gap-y-4 gap-x-3 mt-10">
          {[
            "Vegetables",
            "Fresh Fruit",
            "Canned Goods",
            "Dairy Products",
            "Berries & Nuts",
            "Dried Fruit",
            "Bakery",
            "Beverages",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1"
            >
              <div className="w-6 h-6 rounded-full bg-lime-500 text-white flex items-center justify-center text-sm font-bold">
                ✓
              </div>

              <span className="text-gray-700 text-lg font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-lg leading-9 mt-10">
         We work with the best local farmers and manufacturers. We offer only GMO-free produce at great prices and with complimentary shipping right to your doorstep. Select the items you need and enjoy! 
        </p>

        <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-3">
          Shop Now
  <FaAppleAlt className="text-1xl" />
  
</button>
      </div>

    </div>
  </div>
</section>


    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-lime-500 font-semibold text-lg">
        
          How It Works
        </p>

        <h2 className="text-center text-5xl font-bold text-gray-800 mt-2">
          Dont Worry, We'll Deliver
        </h2>

        <p className="text-center text-gray-600 text-xl mt-4 max-w-4xl mx-auto">
          We work with a number of local farms and grocery stores to deliver
          you the freshest and organic product for your delicious dishes.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-14">

          <div className="text-center">
            <img
              src={chooseImg}
              alt=""
              className="w-20 mx-auto mb-4"
            />

            <h3 className="text-3xl font-bold">
              <span className="text-orange-400">1.</span>{" "}
              Choose Items
            </h3>

            <p className="text-gray-500 text-l mt-8 leading-10">
              Shop online right on this website and select the items you need.
            </p>
          </div>

          <div className="text-center">
            <img
              src={orderImg}
              alt=""
              className="w-20 mx-auto mb-4"
            />

            <h3 className="text-3xl font-bold">
              <span className="text-orange-400">2.</span>{" "}
              Place an Order
            </h3>

            <p className="text-gray-500 text-l mt-8 leading-10">
              Add the items to cart and pay for your order online, then specify
              the delivery time frame.
            </p>
          </div>

          <div className="text-center">
            <img
              src={deliveryImg}
              alt=""
              className="w-20 mx-auto mb-4"
            />

            <h3 className="text-3xl font-bold">
              <span className="text-orange-400">3.</span>{" "}
              Get Your Delivery
            </h3>

            <p className="text-gray-500 text-lg mt-4 leading-8">
              We will deliver your order right in time. We use eco-friendly
              packaging.
            </p>
          </div>

        </div>
      </div>
    </section>




<section className="py-24 bg-gray-50 overflow-hidden">
  <div className="max-w-full mx-auto px-6">
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
    
    {/* এখানে w-max ক্লাসটি যোগ করা খুব জরুরি */}
    <div className="flex gap-8 animate-slide w-max">
      {[...reviews, ...reviews, ...reviews].map((review, index) => (
        <div key={index} className="min-w-[300px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex text-orange-400 mb-4">
             {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
          </div>
          <p className="text-gray-600 mb-6">"{review.text}"</p>
          <h4 className="font-bold text-gray-800">{review.name}</h4>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes slide {
      0% { transform: translateX(0); }
      /* এখানে -33.33% মানে হলো প্রথম ৬টি রিভিউ পার হয়ে পরের ৬টি আসা */
      100% { transform: translateX(-33.33%); }
    }
    .animate-slide {
      animation: slide 30s linear infinite;
    }
    .animate-slide:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>
    

  





  <Footer/>
 </>
  );
};

export default Groceryhome;  