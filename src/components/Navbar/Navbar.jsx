import React from 'react'
import logo from '../../assets/shop-logo.png'
import { IoMoon, IoSearchSharp, IoSunny } from "react-icons/io5";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import Mood from "./Mood";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/#",
  }
]

const DropdownLinks = [
  {
    id: "TP",
    name: "Trending Products",
    link: "/#",
  },
  {
    id: "BS",
    name: "Best Selling",
    link: "/#",
  },
  {
    id: "TD",
    name: "Top Rated",
    link: "/#",
  },
]

const Navbar = ({handleOrderPopUp}) => {
  return (
    <div className='shadow-md duration-200 z-40 sticky top-0'>
      {/* upper Navbar */}
      <div className='  bg-primary py-2 dark:bg-gray-900'>
      <div className='container flex w-full items-center justify-between'>
          <div  >
            <a href="#" target='_blank' className='flex items-center max-w-[170px] border border-[rgba(236,231,231,0.3)] p-2 rounded-lg bg-[rgba(236,231,231,0.3)] gap-2'>
              <img src={logo} alt="LOGO" className='w-15 h-10'/>
              <p className='font-bold text-xl text-white uppercase dark:text-black'>Paragon</p>
            </a>
          </div>
          {/* other sub-compnents */}
          <div  className='flex justify-between items-center gap-4'>
            <div className='group relative hidden sm:block'>
              <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 focus:border-1 focus:border-orange-400 px-2 py-1 focus:outline-none dark:border-gray-500  dark:bg-gray-800 dark:text-white' />
              <IoSearchSharp className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
            <button onClick={() => handleOrderPopUp() }className="bg-gradient-to-r from-primary to-secondary transiton-all duration-200 text-0
            white rounded-full py-1 px-4 flex items-center gap-3 group"
            >
              <span className='hidden group-hover:block transition-all duration-200 text-white'>Order  </span>
              <FaCartShopping 
              className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>

            {/* Mode switch */}
            {/* <IoSunny className='text-xl text-white hover:scale-125 cursor-pointer drop-shadow-[1px
            _1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 '/>
            <IoMoon className='text-xl text-gray-500 hover:scale-125 cursor-pointer drop-shadow-[10px
            _1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 '/> */}

            < Mood />
          </div> 
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center bg-white'>
        <ul data-aos="zoom-in" className=' sm:flex  hidden items-center gap-4 font-semibold'>
          {Menu.map((data)=>(
            <li key={data.id}>
              <a href={data.link} className='inline-block px-4 hover:text-primary transition-all duration-200'>{data.name}</a>
            </li>
          ))}

          {/* Dropdown lists */}
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2'>
              More Products
              <span>
                <FaCaretDown 
                className='transition-all duration-200 group-hover:rotate-180'/>
              </span>
              </a>
              <div className='absolute z-[9999] hidden group-hover:block w-[170px] rounded-sm bg-orange-100/50 p-2 text-black'>
                <ul className=' '> 
                  {DropdownLinks.map((data)=>(
                    <li key={data.id}>
                      <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                        {data.name}
                      </a>
                  </li>))}
                </ul>
              </div>
          </li>
          
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
