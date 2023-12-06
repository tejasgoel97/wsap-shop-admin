import React, { useState } from 'react';
import ActiveOrders from '../components/Orders/ActiveOrders';



const CompletedOrders = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Completed Orders</h2>
    {/* Content for Completed Orders */}
  </div>
);

const CancelledOrders = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Cancelled Orders</h2>
    {/* Content for Cancelled Orders */}
  </div>
);

const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState('activeOrders');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white p-4 shadow-md ">
        <div className="container mx-auto flex justify-between items-center ">
          <div>
            <h1 className="text-2xl font-semibold">Order Management</h1>
          </div>
          <div className="space-x-4">
            <button
              onClick={() => handleTabClick('activeOrders')}
              className={`toggle-btn p-2 ${activeTab === 'activeOrders' ? 'bg-primary' : 'inactive'}`}
            >
              Active Orders
            </button>
            <button
              onClick={() => handleTabClick('completedOrders')}
              className={`toggle-btn p-2 ${activeTab === 'completedOrders' ? 'bg-primary' : 'inactive'}`}
            >
              Completed Orders
            </button>
            <button
              onClick={() => handleTabClick('cancelledOrders')}
              className={`toggle-btn p-2 ${activeTab === 'cancelledOrders' ? 'bg-primary' : 'inactive'}`}
            >
              Cancelled Orders
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 p-4">
        {activeTab === 'activeOrders' && <ActiveOrders />}
        {activeTab === 'completedOrders' && <CompletedOrders />}
        {activeTab === 'cancelledOrders' && <CancelledOrders />}
      </div>
    </div>
  );
};

export default OrderScreen;
