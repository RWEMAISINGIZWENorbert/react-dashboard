import { events } from "../../constants"
import Title from "../../ui/Title"
import Item from "./Item"

const Event = () => {
  return (
    // <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 flex flex-1 flex-col gap-56">Event</div>
    <div className="bg-white  p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex-col gap-5 my-3">
         <Title title={'Events'} />
         {
            events.map((event, index) => (
                <Item key={index} event = {event}/>
            ))
         }
    </div>
  )
}

export default Event