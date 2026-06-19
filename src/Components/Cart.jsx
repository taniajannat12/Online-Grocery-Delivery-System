
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mt-24 mb-6">Shopping Cart</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-yellow-400">
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-4 flex items-center gap-4">
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">✕</button>
                <span>{item.name}</span>
              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button 
        onClick={() => navigate('/checkout')} 
        className="mt-6 bg-green-700 text-white px-6 py-3 rounded"
      >
        Proceed to Checkout
      </button>
    </div>
    <Footer/>
    </>
  );
};
export default Cart;