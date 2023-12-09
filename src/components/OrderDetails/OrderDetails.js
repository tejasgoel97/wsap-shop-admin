import { Button, Card } from "flowbite-react";
import TimeLine from "./TimeLine";
import Items from "./ItemsList";
import DeliveryDetails from "./DeliveryDetails";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import ChangeStatusModal from "./ChangeStatusModal";
import { useState } from "react";


const OrderDetails = (props) => {
  const { order } = props;
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" container max-w-5xl mx-auto ">
         <ChangeStatusModal openModal={openModal} setOpenModal={setOpenModal}/>
        <div className="flex justify-between m-2">
      <h1 className="text-2xl">Order Id: {order.id.toUpperCase()}</h1>
      <Button  onClick={() => setOpenModal(true)}>
       
        Change Status
        <PencilSquareIcon className="ml-2 h-5 w-5" />
      </Button >
        </div>
      <div className="grid  grid-rows-3 grid-flow-col gap-2">
        <div className="row-span-3 col-span-5">
          <Items order={order}/>
        </div>
        <div className="col-span-2">
          <DeliveryDetails order={order}/>
        </div>
        <div className="col-span-1 row-span-2">
                <TimeLine/>
            </div>
      </div>
    </div>
  );
};

export default OrderDetails;
