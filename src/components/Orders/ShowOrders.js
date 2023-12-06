

import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard.js"


const ShowOrders = (props) => {

    const {orders} = props;

  

  return (
    <div className="container mx-auto max-w-5xl  my-4 p-4 ">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>
        {orders.map((order, index) => {
            return <div>
                <OrderCard order={order} index={index}/>
                </div>
        })}
     
    </div>
  );
};

export default ShowOrders;
