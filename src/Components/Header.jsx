import React , {useState , useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const Header = () => {
  const [nav, setNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navul = [
    {
      id: 1,
      text: 'Home',
      link: "Home"
    },
    {
      id: 2,
      text: 'about',
      link: "About"
    },
    {
      id: 3,
      text: 'services',
      link: "services"
    },
    {
      id: 4,
      text: 'Pricing',
      link: "Pricing"
    },
    {
      id: 5,
      text: 'Marketplace',
      link: "Martetplace"
    },
    {
      id: 6,
      text: 'Become Affliate',
      link: ""
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    const section = document.getElementById(link);
    setNav(false); 
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='flex justify-between items-center w-full h-28 text-white bg-black  '>
      <img src="images/image3.png" alt="image1" />
      <div className="image2">
            <div>
                <img src="images/image2.png" alt="" />
            </div>
        </div>
      <div>
        <h1 className='text-5xl font-signature m-2'>
          Qodrr
        </h1>
      </div>

      {/* Toggle the nav on small screens */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={`md:flex ${isSmallScreen ? 'hidden' : 'justify-center items-center'}`}>
        {navul.map(({ id, text, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200' onClick={() => handleNavLinkClick(link)}>
            {text}
          </li>
        ))}
      <button className='pr-7 pl-7 pt-2 pb-2 border border-gradient-to-r border-green-400 rounded-md hover:scale-105 duration-300 '>Login</button>
      <button className='ml-3 mr-3 pr-7 pl-7 pt-2 pb-2 border border-green-600 rounded-md  whitespace-nowrap bg-gradient-to-r from-green-400 to-green-800 text-white  hover:bg-gradient-to-tr hover:scale-105 duration-300'>Get In Touch</button>
      </ul>

      {nav && isSmallScreen && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {navul.map(({ id, text , link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 py-6 text-2xl' onClick={() => handleNavLinkClick(link)}>
              {text}
            </li>
          ))}
                <button className='mb-3 pr-7 pl-7 pt-2 pb-2 border border-gradient-to-r border-green-400 rounded-md hover:scale-105 duration-300 '>Login</button>
      <button className='ml-3 mr-3 pr-7 pl-7 pt-2 pb-2 border border-green-600 rounded-md  whitespace-nowrap bg-gradient-to-r from-green-400 to-green-800 text-white  hover:bg-gradient-to-tr hover:scale-105 duration-300'>Get In Touch</button>
        </ul>
      )}
    </div>

  )
}

export default Header
