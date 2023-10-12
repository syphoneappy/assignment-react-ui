import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
 
        <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
            <div className='flex'> 
            <img src="images/image2.png" alt="Logo" className="w-16 h-16 mb-2" />
            <h1 className='text-5xl font-signature m-2 text-white'>
                 Qodrr
                </h1>
            </div>
          
          <p className="text-white text-sm text-center">{"(A Division of PITTER SHARE BROKINGS)"}</p>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
          <p className="text-white font-bold mb-2">Quick Links</p>
          <a href="#" className="text-gray-300 hover:text-white">FAQs</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
          <a href="#" className="text-gray-300 hover:text-white">About Us</a>
        </div>

        {/* Column 3: Products */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
          <p className="text-white font-bold mb-2">Products</p>
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white">Become Affiliate</a>
          <a href="#" className="text-gray-300 hover:text-white">Login</a>
        </div>

        {/* Column 4: Legal */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
          <p className="text-white font-bold mb-2">Legal</p>
          <a href="#" className="text-gray-300 hover:text-white">Terms of Use</a>
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white">Disclaimer</a>
        </div>

     
        <div className="flex flex-col items-center">
          <p className="text-white font-bold mb-2">Contact</p>
          <a href="#" className="text-gray-300 hover:text-white">9836113375</a>
          <a href="#" className="text-gray-300 hover:text-white">Support@mail.com</a>
          <a href="#" className="text-gray-300 hover:text-white">my-address, localaddress,<br /> City,State, Country,World, <br />SolarSystem,MilkyWay,Universe,<br />Cosmos </a>
        </div>
      </div>


      <div className="bg-gradient-to-b from-black to-gray-800 text-center mt-8 text-gray-400">
        &copy; 2023 my Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
