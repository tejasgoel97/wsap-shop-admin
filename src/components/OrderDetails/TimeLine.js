import { Card, Timeline } from "flowbite-react";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";

const timeLineData = [
  {
    date: new Date(),
    Status: "CREATED",
    data: {
      paymentRef: "HKJHKJHKJHKJ",
    },
  },
  {
    date: new Date(),
    Status: "SHIPPED",
    data: {
      ShipmentRef: "HKJHKJHKJHKJ",
    },
  },
  {
    date: new Date(),
    Status: "DELIEVERED",
    data: {
      DeliveryNotes: "Order Delievered",
    },
  },
];
const customTimelinePoint = {
    marker:{
        icon:{
            "base": "h-3 w-3 text-blue-600 dark:text-blue-300",
            "wrapper": "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
        }
    }
}

const TimeLine = () => {
  return (
    <Card>

    
    <Timeline>
        {timeLineData.map((tl) => {
          let extraData = "";
          for (let i in tl.data) {
            extraData = `${i}: ${tl.data[i]}`;
          }
          return (
            <Timeline.Item>
              <Timeline.Point icon={CalendarDaysIcon}  theme={customTimelinePoint}/>

              <Timeline.Content>
                <Timeline.Time>{tl.date.toDateString()}</Timeline.Time>
                <Timeline.Title>{tl.Status}</Timeline.Title>
                <Timeline.Body>{extraData}</Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
        
    </Timeline>
    </Card>
  );
};

export default TimeLine;
