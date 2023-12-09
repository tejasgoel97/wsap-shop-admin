import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useState } from "react";

const allOptions = ["Delieverd", "Shipped", "Cancelled", "Refunded"];

function ChangeStatusModal(props) {
  const { openModal, setOpenModal, order } = props;
  const [changedStatus, setChangedStatus] = useState("");

  const currentStatus = "SHIPPED";
  let options;
  if (currentStatus === "CREATED") {
    options = ["SHIPPED", "CANCELLED"];
  }
  if (currentStatus === "SHIPPED") {
    options = ["DELIVERED", "CANCELLED"];
  }
  if (currentStatus === "DELIVERED") {
    options = [""];
  }
  if (currentStatus === "CANCELLED") {
    options = ["REFUNDED"];
  }
  if (currentStatus === "REFUNDED") {
    options = [""];
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Change Status</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Select
              id="countries"
              value={changedStatus}
              onChange={(e) => setChangedStatus(e.target.value)}
            >
              {options.map((o) => {
                return <option>{o}</option>;
              })}
            </Select>
          </div>
          {changedStatus === "SHIPPED" && (
            <div className="flex gap-2 mt-2">
              <div className="flex-2">
                <Label value="Courier Provider" />
                <TextInput required />
              </div>
              <div className="flex-1">
                <Label value="Tracking Details" />
                <TextInput required />
              </div>
            </div>
          )}
          {changedStatus === "CANCELLED" && (
            <div className="mt-2">
              <Label value="Cancellation Notes" />
              <TextInput required />
            </div>
          )}
          {changedStatus === "DELIVERED" && (
            <div className="mt-2">
              <Label value="DELIVERY NOTES" />
              <TextInput required />
            </div>
          )}
          {changedStatus === "REFUNDED" && (
            <div className="mt-2">
              <Label value="REFUND NOTES" />
              <TextInput required />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ChangeStatusModal;
