import { shortcutLink } from "../../../constants";
import Title from "../../../ui/Title";
const ShortCuts = () => {
  return (
    <div className=" flex flex-col  bg-white  rounded-lg p-4 gap-4 dark:bg-gray-600">
        <Title title={`Shortcuts`}></Title>
        {
        shortcutLink.map((el,index) => (
          <div key={index}>
              <div>
                 <span><el.icon/></span>
              </div>
          </div>
        ))
        }
    </div>
  )
}

export default ShortCuts