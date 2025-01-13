import { event } from "@/src/assets";
import { paymentMethods } from "@/src/constant";

const BillingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
      <div className="p-3 bg-white shadow rounded-lg relative">
        <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative">
          <img src={event} alt="Event" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
            Ongoing
          </div>
        </div>

        <div className="mt-1">
          <h2 className="text-lg font-medium">Event Plan (Standard)</h2>
          <div className="mt-2 text-3xl font-bold text-gray-800">
            $3000<span className="text-sm font-normal">/total</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Billing period: Jan 2027</p>

          <div className="mt-6 bg-yellow-100 text-yellow-600 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Upcoming Payment Due</p>
              <p className="text-sm">
                Your next payment is due on 15 Jan 2027.
              </p>
            </div>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm">
              Pay Now
            </button>
          </div>

          <div className="mt-4 text-right">
            <a
              href="#"
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              View All Invoices &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Payment Methods Card */}
      <div className="p-6 bg-white shadow rounded-lg">
        <h2 className="text-xl font-medium text-black">Payment Methods</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage your payment options
        </p>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-4">
          {paymentMethods.map((card, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-black">
                {card.type} Cardholder: {card.cardholder}
              </p>
              <p className="text-sm text-gray-800 mt-1">
                Card Number: {card.cardNumber}
              </p>
              <p className="text-sm text-gray-800">
                Expiry: {card.expiry} | CVV: {card.cvv}
              </p>
              <button className="text-blue-500 text-xs font-medium mt-2 hover:underline">
                Edit
              </button>
            </div>
          ))}
        </div>

        {/* Add Payment Method */}
        <div className="mt-8">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingCard;
