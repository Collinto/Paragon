import React from 'react'

const Subscribe = () => {
  return (
    <div data-aos="fade-in" className=' text-black dark:bg-gray-800 bg-gradient-to-r from-blue-950 to-blue-300 h-50 w-full mb-20'>
        <div className='container backdrop-blur-sm py-10'>
          <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white'>Get Notified About New Products</h1>

            <div data-aos="fade-up" className="flex gap-4 items-center">
            <input  type="text" placeholder='Your Email' className='w-full p-3' />
            <button className="bg-primary group-hover:bg-white group-hover:text-primary py-1 px-4 rounded-full hover:scale-105 duration-300 text-white" >                      Subscribe      </button>
            </div>
          </div>
           
        </div>
      
    </div>
  )
}

export default Subscribe
