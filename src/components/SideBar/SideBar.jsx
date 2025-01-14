import { links } from "../../constants";
import LinkItem from "./LinkItem";

const SideBar = ({isSideBarOpen}) => {
  return (
    <div className={`fixed top-0 left-0 z-40 w-64  pt-20 h-screen bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-600 transition-transform ${isSideBarOpen ? 'translate-x-0': '-translate-x-full'} `}>
        <div className="h-full px-3 pb-4 overflow-y-auto">
            {
              links.map((link, index) => (
                // <div key={index} className="flex justify-between">
                //     <div className="flex items-center gap-2">
                //          <link.icon  className="font-semibold tex hover:animate-wiggle"/>
                //          <span className="text-gray-700 font-medium dark:text-gray-200">{link.text}</span>
                //     </div>
                //    <div>
                //     {link.badge && (<span className= {`${link.badge.darkColor}  rounded-full p-4`}>{link.badge.text}</span>)}               
                //    </div>
                // </div>
                <LinkItem key={index} {...link}/>
              ))
            }
        </div>
      </div>
  )
}

export default SideBar