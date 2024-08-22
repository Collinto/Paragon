import React from 'react';
import img1 from "../../assets/shirt-cwf9SKdB.png";
import img2 from "../../assets/shirt2-XQzG6elp.png";
import img3 from "../../assets/shirt3-HwQ10bVo.png";
import { FaStar } from "react-icons/fa6"

const productData = [ 
    {
        id: 1,
        img: img1,
        title: "Causual Wear", 
        desc: "Nisi obcaecati accusamus labore sequi optio delectus cum quaerat quod tempore repellat temporibus consectetur."
    },
    {
        id: 2,
        img: img2,
        title: "Printed Shirt", 
        desc: "Nisi nisi obcaecati accusamus labore sequi optio delectus cum quaerat quod tempore repellat temporibus. "
    },
    {
        id: 3,
        img: img3,
        title: "Women Shirt", 
        desc: "Voluptatibus unde illo, quaerat minus nostrum sunt sequi accusamus labore sequi optio delectus cum quaerat quod tempore repellat temporibus consectetur."
    },
]

const TopRated = ({handleOrderPopUp}) => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */}
                <div className='text-center mb-28 max-w-[600px] mx-auto'>
                    <p data-aos="fade up" className='text-sm text-primary'>Trending Products </p>
                    <h1 data-aos="fade up" className='text-3xl font-bold'>Top Rated Products</h1>
                    <p data-aos="fade up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        
                {/* Card Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {
                        productData.map((data)=>(
                            <div key={data.id} 
                            data-aos="zoom-in"
                            className='rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                                {/* Image section */}
                                <div className='h-[100px] '>
                                    <img src={data.img} alt="" className='max-w-[140px] block m-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                                </div>
                                {/* Details */}
                                <div className='p-4 text-center'>
                                    {/* Rating */}
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-400 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.desc}</p>

                                <button className="bg-primary group-hover:bg-white group-hover:text-primary py-1 px-4 rounded-full mt-4 hover:scale-105 duration-300 text-white"  onClick={() => handleOrderPopUp()}
                                >
                                    Order Now
                                </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>  
    </div>
  )
}

export default TopRated
