import React from 'react';
import Lottie from 'lottie-react';
import groovyWalkAnimation from '/src/images/main_animation.json';

const Home = () => {
  return (
    <div id="Home" name="Home" className="flex min-h-screen pr-15 w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-screen px-4 md:flex-row mt-20">
        <div className="flex flex-col justify-center w-full mt-20 text-center md:text-left">
          <h2 className="text-4xl sm:text7 text-white">
            Make Your Trading Journey Automated
          </h2>{' '}
          <br />
          <h4 className="text-3xl sm:text7 text-blue-500">Robust and Rewarding.</h4>
          <div className="text-gray-500 py-4"></div>
          <div className="sm:block md:flex justify-center md:justify-start">
            <button className="group m-4  w-fit px-6 py-3 my-2 flex items-center  border-green-600 rounded-md  whitespace-nowrap bg-gradient-to-r from-green-400 to-green-800 text-white cursor-pointer">
              Get started <span className="group-hover:rotate-90 duration-300 ml-2"> {">"} </span>
            </button>

            <button className="group px-4 m-4 text-white w-fit py-3 my-2 flex items-center rounded-md border cursor-pointer">
              How it works <span className="group-hover:rotate-90 duration-300 ml-2"> {">"} </span>
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full text-white md:flex-row mt-20">
          <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
