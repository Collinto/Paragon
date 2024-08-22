import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopUp, setOrderPopUp}) => {
  return (
    <>
     {orderPopUp && (<div>
      <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-sm dark:bg-gray-900 dark:text-white duration-200 w-[300px]'>
            {/* Header Section */}
            <div className='flex items-center justify-between '>
                <div>
                    <h1 >Order Now</h1>
                </div>

                <div>
                <IoCloseOutline className='text-2xl cursor-pointer hover:scale-125 hover:text-red-600' onClick={()=>{setOrderPopUp(false)}}/>
                </div>
            </div>
            {/* Form Section */}
            <div className='mt-4 flex flex-col '>
                <label htmlFor="name" className='font-bold text-sm'>Name:</label>
                <input type="text" id='name' placeholder='Name' className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />

                <label htmlFor="email" className='font-bold text-sm'>Email Address:</label>
                <input type="email" id="email" placeholder='email@example.com' className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />

                <label htmlFor="address" className='font-bold text-sm'>Home Address:</label>
                <input type="text" id="address"  placeholder='Address' className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />

                <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 rounded-full py-2 px-4 text-white mt-3'>
                Order Now
            </button>
            </div>
            
        </div>
      </div>
      </div>
      )
      }
    </>
  )
}

export default Popup
