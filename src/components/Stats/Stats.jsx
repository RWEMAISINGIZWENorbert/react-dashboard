import { empolyeesData } from "../../constants"
import Balance from "./Balance"
import Card from "./Card"

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
         <div className="flex flex-col gap-4 h-full">
                 {
                    empolyeesData.map((data, index) => (
                        <Card key={index} data ={data}/>
                    ))
                 }
         </div>
         <Balance />
    </div>
  )
}

export default Stats