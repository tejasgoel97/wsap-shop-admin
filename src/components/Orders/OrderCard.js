import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Accordion, Table } from "flowbite-react";

export default function Example(props) {

 
 
  const { order, index } = props;
  console.log(order);
  const orderDate = order.createdAt;
  const currentAddress = order.currentAddress;
  if (orderDate) {
    var dateValue = orderDate.toDate();
    const options = { year: "numeric", month: "short", day: "numeric" };

    var formattedDate = dateValue.toLocaleString("en-US", options);
  } else {
    formattedDate = "no Datr";
  }
  const price = order.totalPrice;
  const status = order.status
  const orderDetailsHref = `/order-details/${order.id }`
  let splitOrderId = order.id.substring(0, 4).toUpperCase()
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer" >
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white cursor-pointer">
    {splitOrderId}
    </Table.Cell>
    <Table.Cell>{formattedDate}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell><div>
      <h1>
        {currentAddress.name}
        </h1>
      {9467850060}
      </div></Table.Cell>
    <Table.Cell>{status}</Table.Cell>
    <Table.Cell>
      <a href={orderDetailsHref} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
        Edit
      </a>
    </Table.Cell>
  </Table.Row>
  );
  return (
    <div className="mx-auto w-full mt-2 rounded-2xl bg-gray-300 p-2">
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Change Status</h2>
        <div>I am a modal</div>
        <form>
         
        </form>
      </Modal> */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full rounded-lg bg-green-700 px-4 py-2 text-left text-sm font-medium  hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
              <div className="flex flex-wrap w-full justify-between items-center">
                <div>
                  <h1>Order Placed</h1>
                  <h1 className="text-sm font-light">{formattedDate}</h1>
                </div>
                <div>
                  <h1>Total</h1>
                  <h1 className="text-sm font-light">Rs. 222</h1>
                </div>
                <div>
                  <h1>Quantity</h1>
                  <h1 className="text-sm font-light">3</h1>
                </div>
                <div onClick={() => {}}>
                  <h1>Status</h1>
                  <h1 className="text-sm font-light">{order.status}</h1>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-primary hover:text-primary-lite`}
                />
              </div>
              <div>{}</div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div className="grid md:grid-cols-6 border-r">
                <div className="md:col-span-4 md:border-r-2 border-gray-300">
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
                        <p className="text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="md:col-span-2 m-3">
                  <div>
                    <span className="font-bold">Delivered To:</span>
                    <br></br>
                    {currentAddress.name}
                    <br></br>
                    {currentAddress.addressLine1},{currentAddress.addressLine2},
                    <br></br>
                    {currentAddress.city},<br></br>
                    {currentAddress.postalCode}, {currentAddress.state},
                    <br></br>
                    {currentAddress.phoneNumber}
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
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
