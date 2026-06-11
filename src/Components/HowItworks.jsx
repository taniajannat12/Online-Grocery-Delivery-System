import chooseImg from "../assets/icon6.svg";
import orderImg from "../assets/icon7.svg";
import deliveryImg from "../assets/icon8.svg";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-lime-500 font-semibold text-lg">
          How It Works
        </p>

        <h2 className="text-center text-6xl font-bold text-gray-800 mt-2">
          Dont Worry, We'll Deliver
        </h2>

        <p className="text-center text-gray-600 text-xl mt-8 max-w-4xl mx-auto">
          We work with a number of local farms and grocery stores to deliver
          you the freshest and organic product for your delicious dishes.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-24">

          <div className="text-center">
            <img
              src={chooseImg}
              alt=""
              className="w-40 mx-auto mb-8"
            />

            <h3 className="text-4xl font-bold">
              <span className="text-orange-400">1.</span>{" "}
              Choose Items
            </h3>

            <p className="text-gray-500 text-xl mt-8 leading-10">
              Shop online right on this website and select the items you need.
            </p>
          </div>

          <div className="text-center">
            <img
              src={orderImg}
              alt=""
              className="w-40 mx-auto mb-8"
            />

            <h3 className="text-4xl font-bold">
              <span className="text-orange-400">2.</span>{" "}
              Place an Order
            </h3>

            <p className="text-gray-500 text-xl mt-8 leading-10">
              Add the items to cart and pay for your order online, then specify
              the delivery time frame.
            </p>
          </div>

          <div className="text-center">
            <img
              src={deliveryImg}
              alt=""
              className="w-40 mx-auto mb-8"
            />

            <h3 className="text-4xl font-bold">
              <span className="text-orange-400">3.</span>{" "}
              Get Your Delivery
            </h3>

            <p className="text-gray-500 text-xl mt-8 leading-10">
              We will deliver your order right in time. We use eco-friendly
              packaging.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}