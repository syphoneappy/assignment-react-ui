import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "/src/images/animation.json"
const Marketplace = () => {
  return (
    <div id="Martetplace" name='Experience' className='bg-black w-full md:h-screen '>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='text-center'>
            <p className='text-4xl font-bold  p-2'>Marketplace</p>
            
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0'>
     
                    <div  className={`shadow-md hover:scale-105 duration-400 py-2 rounded-lg `}>
                    <div className="flex flex-col md:flex-row h-auto md:h-96 bg-gradient-to-br from-green-400 to-blue-800 rounded-lg p-4 overflow-hidden">
                    <div className="w-full md:w-2/3 h-40 md:h-full flex flex-col justify-center items-center">
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-bold p-2'>
                        Subscribe to trading and investing <p className='hidden sm:inline'> algorithms built by experts</p>
                    </h3>
                    <button className='pr-7 pl-7 mt-2 pt-2 pb-2 bg-white border rounded-md hover:scale-105 duration-300 text-indigo-500'>Learn More</button>
                    </div>

                    <div className="h-full w-auto">
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>
                    </div>
                    </div>
          
        </div>
      </div>
    </div>
  )
}

export default Marketplace
