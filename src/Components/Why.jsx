import React from 'react';
import Lottie from 'lottie-react';
import groovyWalkAnimation from '/src/images/yes_or_no.json';

const Why = () => {
  return (
    <div id="About" name="Experience" className="bg-black w-full md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold p-2">Why choose Us?</p>
          <p className="text-sm">
            Qodrr.com crew brings to you an unbeatable power of Techinicals combined with decades of Stock Broking
            expirence & latest high-end Techonolgy to drive your trades.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0">
          <div className={`shadow-md hover:scale-105 duration-400 py-2 rounded-lg`}>
            <div className="flex flex-col md:flex-row h-auto md:h-96 rounded-lg p-4 overflow-hidden relative">
              <div className="w-full md:w-1/3">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
              </div>
              <div className="w-full md:w-2/3 h-full flex flex-col justify-center items-center">
                <div>
                  <div className="pl-6 pr-6 pt-3 pb-3 border rounded-full border-white m-2">
                    <h2 className="text-3xl text-blue-700 font-bold">135+</h2>
                    <p className="text-sm">Active Customber</p>
                  </div>
                  <div className="pl-6 pr-6 pt-3 pb-3 border rounded-full border-white m-2">
                    <h2 className="text-3xl text-blue-700 font-bold">50+</h2>
                    <p className="text-sm">Years of expirence</p>
                  </div>
                  <div className="pl-6 pr-6 pt-3 pb-3 border rounded-full border-white m-2">
                    <h2 className="text-3xl text-blue-700 font-bold">61783+</h2>
                    <p className="text-sm">orders executed</p>
                  </div>
                </div>
                <button className="pr-7 pl-7 mt-2 pt-2 pb-2 bg-white border rounded-md hover:scale-105 duration-300 text-indigo-500">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
