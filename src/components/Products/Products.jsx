import React from 'react';
import img1 from "../../assets/women-NhG2D3pl.png";
import img2 from "../../assets/women2-wroTMLvf.jpg";
import img3 from "../../assets/women3-HFaPDX0l.jpg";
import img4 from "../../assets/women4-zXERyOhD.jpg";
import img5 from "../../assets/women3-HFaPDX0l.jpg";
import { FaStar } from "react-icons/fa6";


const productData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        rating: "5.0",
        colour: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        img: img2,
        title: "Women Western",
        rating: "4.5",
        colour: "Red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: img3,
        title: "Printed T-Shirt",
        rating: "4.7",
        colour: "Yellow",
        aosDelay: "400"
    },
     {
        id: 4,
        img: img4,
        title: "Fashion T-Shirt",
        rating: "4.4",
        colour: "Pink",
        aosDelay: "600"
    },
    {
        id: 5,
        img: img5,
        title: "Goggles",
        rating: "4.7",
        colour: "Brown",
        aosDelay: "800"
    },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade up" className='text-sm text-primary'>Top Selling Products For You</p>
                <h1 data-aos="fade up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, provident.</p>
            </div>
        </div>
        <div>
            {/* Body Section */}
            <div>
                <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-centeritems-center gap-5'>
                    
                    {/* card section */}
                    {productData.map((data)=>(
                        <div key={data.id} className='space-y-3 p-5 mx-auto' data-aos="fade-up" data-aos-delay={data.aosDelay}>
                            <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.colour}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* View all abutton  */}
            <div data-aos="fade-up"
                        data-aos-duraion="500"
                        data-aos-delay="100"  className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All</button>
            </div>
        </div>
      
    </div>
  )
}

export default Products
