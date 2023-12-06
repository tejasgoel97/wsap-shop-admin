

import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard.js"
import useOrders from "../../hooks/useOrders.js";


const ActiveOrders = (props) => {

const {activeOrders, getActiveOrders} = useOrders();
  useEffect(()=>{
    getActiveOrders()
  }, [])

  return (
    <div className="container mx-auto max-w-5xl  my-4 p-4 ">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>
        {activeOrders.map((order, index) => {
            return <div>
                <OrderCard order={order} index={index}/>
                </div>
        })}
     
    </div>
  );
};

export default ActiveOrders;
