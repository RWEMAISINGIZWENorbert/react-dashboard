import { IoIosArrowForward } from "react-icons/io";
import { shortcutLink } from "../../constants";
import Title from "../../ui/Title";
const ShortCuts = () => {
  return (
    <div className=" flex flex-col  bg-white  rounded-lg p-4 gap-4 dark:bg-gray-600">
        <Title title={`Shortcuts`}></Title>
        {
        shortcutLink.map((el,index) => (
          <div key={index} className="flex justify-between cursor-pointer rounded-sm">
              <div className="flex gap-2  items-center">
                 <span className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300"><el.icon/></span>
                 <h3 className="font-medium text-gray-700 dark:text-gray-300">{el.title}</h3>
              </div>
              <span className=" bg-gray-300 dark:bg-gray-700 flex items-center p-2 rounded-md text-gray-500 hover:mr-2 duration-500 transition-all"><IoIosArrowForward/></span>
          </div>
        ))
        }
    </div>
  )
}

export default ShortCuts