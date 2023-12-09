import { Card } from "flowbite-react"

const OrderItems = (props) => {
    const {order} = props
    return <Card href="#" className="">
    <h1>Items-{order.quantity}</h1>
    <div className="">
      <div className="">
        {order.cart.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="flex items-center py-1 border-b"
          >
            <img
              src={item.imgUrl}
              alt={item.name}
              className="h-20 w-20 object-cover rounded"
            />
            <div className="ml-6">
              <p className="text-sm font-semibold">{item.name}</p>
              <p>
                {item.variant} - {item.subVariant}
              </p>
              <p className="text-gray-600">Price: ${item.SP}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Card>
}

export default OrderItems