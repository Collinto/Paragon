import React from 'react';
import women from "../../assets/women-NhG2D3pl.png";
import men from "../../assets/shopping-vpNvhQDE.png";
import sale from "../../assets/sale-cnpHUeHf.png";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import "./Hero.css"

const Hero = ({ handleOrderPopUp }) => {

    const ImageList = [
        {
            id: 1,
            title: "Upto 30% off on all Women's Wear",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ad molestias! Voluptate odio animi harum sunt corrupti? Vero, voluptas magnam.",
            img: women,
        },
        {
            id: 2,
            title: "Upto 50% off on all Men's Wear",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum molestiae consectetur reprehenderit. Voluptate, temporibus.",
            img: men,
        },
        {
            id: 3,
            title: "Upto 20% off on all Trending Products",
            desc: "Consectetur adipisicing elit. Quos dolorum molestiae consectetur reprehenderit. Voluptate, temporibus.",
            img: sale ,
        },
    ];

  return (
    <div className='overflow-x-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
        {/* Background pattern */}
        <div className='h-[300px] w-[300px] lg:bg-primary/40 right-[8rem] absolute -bottom-36 rounded-b-[200px] rounded-r-[200px] sm:bg-primary/10 rotate-[45deg] -z-9'>
        </div>
        <div className='h-[650px] w-[500px] bg-primary/40 right-0 absolute -top-1/2 rounded-3xl rotate-[45deg] -z-9 '>
        </div>
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0 -translate-y-10">
             <Carousel autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false} 
                interval={4000}
                stopOnHover={false}
                showArrows={false} 
                showIndicators={false}
                className='transform -translate-y-10 sm:-translate-y-20'> 
                {ImageList.map((data)=>(
                <div className='flex flex-col-reverse gap-4 justify-around md:flex-row' key={data.id}>
                    <div className='flex flex-col justify-between '>
                        <div className=''>
                            {/* text content section */}
                            <div className='flex flex-col lg:w-[700px] h-[180px] sm:h-[7rem] justify-between '>
                                <h1 data-aos="zoom-out"
                                data-aos-duraion="500"
                                data-aos-once="true" className=' text-5xl sm:text-3xl lg:text-7xl text-wrap text-center font-bold mt-0 lg:mb-10'>{data.title}</h1>

                                <p 
                                data-aos="zoom-out"
                                data-aos-duraion="500"
                                data-aos-delay="100"  className='text-sm sm:mt-0 mt-20 '>{data.desc}</p>
                            </div>
                        </div>
                        <div 
                        data-aos="fade-up"
                        data-aos-duraion="500"
                        data-aos-delay="100" 
                        offset='40'>
                            <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 rounded-full py-2 px-4 text-white mt-40' onClick={()=>{handleOrderPopUp()}}> Order Now      </button>
                        </div>
                    </div>
            
                    {/* image section */}
                        <div 
                        data-aos="zoom-in"
                        data-aos-once="true" className=''>
                            <img src={data.img} alt="" className=' h-[300px] lg:scale-100 sm:w-[450px] sm:scale-100 object-contain mx-auto lg:mt-auto mt-10'/>
                        </div>
                </div>
                ))}
                
            </Carousel> 
        </div>        
    </div>
  )
}

export default Hero





























/* 
    import React from 'react';
import women from "../../assets/women-NhG2D3pl.png";
import men from "../../assets/shopping-vpNvhQDE.png";
import sale from "../../assets/sale-cnpHUeHf.png";
import Slider from 'react-slick'

const Hero = () => {
    var settings = {
        dots: false, 
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    const ImageList = [
        {
            id: 1,
            title: "Upto 30% off on all Women's Wear",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ad molestias! Voluptate odio animi harum sunt corrupti? Vero, voluptas magnam.",
            img: women,
        },
        {
            id: 2,
            title: "Upto 50% off on all Men's Wear",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum molestiae consectetur reprehenderit. Voluptate, temporibus.",
            img: men,
        },
        {
            id: 3,
            title: "Upto 20% off on all Trending Products",
            desc: "Consectetur adipisicing elit. Quos dolorum molestiae consectetur reprehenderit. Voluptate, temporibus.",
            img: sale ,
        },
    ];

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
        {/* Background pattern }
        <div className='h-[650px] w-[500px] bg-primary/40 right-0 absolute -top-1/2 rounded-3xl rotate-[45deg] -z-9 '>
        </div>
        {/* Hero Section }
        <div className="container pb-8 sm:pb-0 ">
            <Slider {...settings}>
                {ImageList.map((data)=>(
                    <div>
                        <div className='flex flex-col justify-between h-[]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* text content section }
                        <div className='flex flex-col justify-between gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 w-[50vw]'>
                            <h1 className=' text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>

                            <p className='text-sm'>{data.desc}</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 rounded-full py-2 px-4 text-white'> Order Now      </button>
                    </div>
                </div>
            
                {/* image section }
                <div className='order-1 sm:order-2'>
                    <div className='relative z-10'>
                        <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto mr-10'/>
                    </div>
                </div>
                    </div>
                ))}
                
            </Slider>
        </div>        
    </div>
  )
}

export default Hero

*/
