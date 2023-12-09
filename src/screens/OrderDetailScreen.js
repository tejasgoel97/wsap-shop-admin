import { useParams } from "react-router-dom";
import useOrder from "../hooks/useOrder";
import { useState } from "react";
import OrderDetails from "../components/OrderDetails/OrderDetails";

const OrderDetailScreen = () => {
    let urlParams = useParams();
    const orderId = urlParams.orderId

    const {order, orderLoadingError, isOrderloading} = useOrder(orderId)
    if(isOrderloading){
        return <div>Loading...............</div>
    }
    console.warn(order)
    return (
        // <></>
        <OrderDetails order={order} />
    )
}

export default OrderDetailScreen;