

import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard.js"
import useOrders from "../../hooks/useOrders.js";
import { Table } from "flowbite-react";


const ActiveOrders = (props) => {

const {activeOrders, getActiveOrders} = useOrders();
  useEffect(()=>{
    getActiveOrders()
  }, [])

  return (
    <div className="container mx-auto max-w-5xl  my-4 p-4 ">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Order Date</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Customer</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
          
        <>
        {activeOrders.map((order, index) => {
            return <OrderCard order={order} index={index}/>
        })}
        </>
        
     </Table.Body>
      </Table>
    </div>
  );
};

export default ActiveOrders;
