import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
const Donuts = ({darkMode}) => {
 
   const options = {
      series: [44, 55, 41],
      options: {
        chart: {
          type: "donut",
          height: 350,
        },
        labels: ["Desktop", "Tablet", "Mobile"],
        colors: ["#FF5733", "#33FF57", "#3357FF"],
        legend: {
          position: "bottom",
          labels: {
            colors: darkMode ? "#dddddd" : "#000000",
          },
        },
        dataLabels: {
          style: {
            colors: ["#dddddd"],
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
   
  return (
    <div className="py-6 bg-white rounded-md flex items-center justify-center dark:bg-gray-600">
       <Chart options={options.options} series={options.series} type='donut' height={250}/>
    </div>
  )
}

export default Donuts
Donuts.propTypes = {
  darkMode: PropTypes.any
}