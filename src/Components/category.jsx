// import fruitIcon from "../assets/fruit.png";
// import vegetableIcon from "../assets/vegetable.png";
// import berriesIcon from "../assets/berries.png";
// import nutsIcon from "../assets/nuts.png";
// import beverageIcon from "../assets/beverage.png";

// const Category = () => {
//   const categories = [
//     {
//       icon: fruitIcon,
//       title: "Fresh Fruit",
//     },
//     {
//       icon: vegetableIcon,
//       title: "Vegetables",
//     },
//     {
//       icon: berriesIcon,
//       title: "Berries",
//     },
//     {
//       icon: nutsIcon,
//       title: "Nuts",
//     },
//     {
//       icon: beverageIcon,
//       title: "Beverages",
//     },
//   ];

//   return (
//     <section
//       id="category"
//       className="py-24 bg-[#f8f8f5]"
//     >
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="text-orange-500 font-semibold text-lg">
//             Categories
//           </p>

//           <h2 className="text-5xl font-bold text-gray-800 mt-3">
//             Shop By Category
//           </h2>

//           <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//             Explore our wide range of fresh groceries,
//             fruits, vegetables and daily essentials.
//           </p>
//         </div>

//         {/* Category Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//           {categories.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
//             >
//               <div className="w-28 h-28 mx-auto rounded-full bg-[#eef3e7] flex items-center justify-center">
//                 <img
//                   src={item.icon}
//                   alt={item.title}
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>

//               <h3 className="mt-6 text-xl font-bold text-gray-800">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;




import { Link } from 'react-router-dom'; // Link ইমপোর্ট করুন
import fruitIcon from "../assets/fruit.png";
import vegetableIcon from "../assets/vegetable.png";
import berriesIcon from "../assets/berries.png";
import nutsIcon from "../assets/nuts.png";
import beverageIcon from "../assets/beverage.png";

const Category = () => {
  const categories = [
    { icon: fruitIcon, title: "Fruits", path: "/category/Fruits" },
    { icon: vegetableIcon, title: "Vegetables", path: "/category/Vegetables" },
    { icon: berriesIcon, title: "Berries", path: "/category/Berries" },
    { icon: nutsIcon, title: "Nuts", path: "/category/Nuts" },
    { icon: beverageIcon, title: "Drinks & Snacks", path: "/category/Drinks & Snacks" },
  ];

  return (
    <section id="category" className="py-24 bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg">Categories</p>
          <h2 className="text-5xl font-bold text-gray-800 mt-3">Shop By Category</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((item, index) => (
            <Link 
              to={item.path} 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center block"
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-[#eef3e7] flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;