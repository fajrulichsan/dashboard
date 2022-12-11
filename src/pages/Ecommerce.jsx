import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';


import { useStateContext } from '../contexts/ContextsProvider';

const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className='flex justify-between items-start'>
            <div>
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-2xl">$63,448,78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
            color="white"
            bgColor ={currentColor}
            text = "Download"
            borderRadius = "10px"
            size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) =>(
            <div 
            key={item.title}
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-44 p-4 pt-9 rounded-2xl">
              <button 
              type='button'
              style={{color: item.iconColor, backgroundColor : item.iconBg}}
              className="text-2xl p-4 rounded-full opacity-90 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400'>{item.title}</p>

            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-1000">
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Revenue Updates</p>
            <div className='flex gap-4 items-center'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'><span><GoPrimitiveDot></GoPrimitiveDot></span> <span>Expensive</span></p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'><span><GoPrimitiveDot></GoPrimitiveDot></span> <span>Budget</span></p>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly'>
            <div className='border-r-1 border-color m-4 pr-28'>
              <div>
                <p>
                  <span className='text-xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1 text-sm '>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-xl font-semibold'>$43,438</span>
                </p>
                <p className='text-gray-500 mt-1 text-sm '>Expensive</p>
              </div>

              <div className='mt-10 '>
                <SparkLine
                currentColor="blue"
                id="line-sparkline"
                type="Line"
                heigth ="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor}
                />
              </div>

              <div className='mt-10'>
                <Button 
                color="white"
                text="Download Report"
                bgColor ={currentColor}
                borderRadius="10px"

                />
              </div>
            </div>
            <div>
              <Stacked
              width="320px"
              heigth="120px"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ecommerce