import { FiSend } from "react-icons/fi"
import Title from "../../ui/Title"
import BarChat from "./BarChat"

const Balance = () => {
  return (
    <div className="bg-white rounded-2xl p-3 dark:bg-gray-600 dark:text-gray-300 w-full">
        <div className="flex justify-between items-center">
            <Title title={'Balance'} />
            <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 w-8 h-8" />
        </div>
        <div>
            <h1 className="font-bold text-2xl">$600, 000 <span className="font-medium text-xl">(USD)</span></h1>
            <span>On July 2024</span>
        </div>
        <BarChat />
    </div>
  )
}

export default Balance