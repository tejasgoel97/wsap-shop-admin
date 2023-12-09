import { Card } from "flowbite-react"

const DeliveryDetails = (props) => {
    const {order} = props;
    return <>
    <Card>
            <div className="">
            <div>
                <span className="font-bold">Delivered To:</span>
                <br></br>
                {order.currentAddress.name}
                <br></br>
                {order.currentAddress.addressLine1},
                {order.currentAddress.addressLine2},<br></br>
                {order.currentAddress.city},<br></br>
                {order.currentAddress.postalCode}, {order.currentAddress.state},
                <br></br>
                {order.currentAddress.phoneNumber}
              </div>
              <div>
                <span className="font-bold">Shipping Charges:</span>{" "}
                {order.shippingCharges}
              </div>
              <div>
                <span className="font-bold">Total Discount</span>{" "}
                {order.totalDiscount}
              </div>
            </div>
          </Card>
    </>
}

export default DeliveryDetails