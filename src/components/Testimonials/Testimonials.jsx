import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

const TestimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: "Ipsum sit amet consectetur a elit lorem. Laudantium, provident dolor. Ipsum sit amet consectetur a elit lorem. Laudantium, provident dolor.",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 2,
        name: "Jenny",
        text: "Pesum sit amet consectetur a elit lorem. Laudantium, provident dolor. Ipsum sit amet consectetur a elit lorem. Laudantium, provident dolor.",
        img: "https://picsum.photos/109/109"
    },
    {
        id: 3,
        name: "Marvin",
        text: "Laudantium, Iapsum sit amet consectetur a elit lorem. Laudantium, provident dolor. Ipsum sit amet consectetur a elit lorem provident dolor.",
        img: "https://picsum.photos/105/105"
    },
    {
        id: 4,
        name: "Laney",
        text: "Provident  sit amet consectetur a elit lorem. Laudantium, provident dolor. Ipsum sit amet consectetur a elit lorem. Laudantium, provident dolor.",
        img: "https://picsum.photos/103/106"
    },
];

const Testimonials = () => {
    // const settings = [

    // ]
  return (
    <div >
      <div className='py-10 mb-10'>
        <div className="container">
            {/* header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade up" className='text-sm text-primary'> Our Customers' Review</p>
                <h1 data-aos="fade up" className='text-3xl font-bold'>Testimonials</h1>
                <p data-aos="fade up" className='text-xs text-gray-400'> Ipsum sit amet consectetur a elit lorem. Laudantium, provident dolor.</p>
            </div>

            {/* Cards for the Testimonials */}
            <div data-aos="zoom-in">
                <Carousel autoPlay infiniteLoop 
                showThumbs={false} 
                showStatus={false} 
                interval={4000}
                stopOnHover={false}
                showArrows={false} 
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={33.33}
                className=''>
                    {
                        TestimonialData.map((data)=>(
                            <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl mx-4 dark:bg-gray-800 bg-primary/15 '>
                                <div className=' w-20 h-20 mx-auto '>
                                    <img src={data.img} alt={data.name} className='rounded-full'/>
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h2>
                                    <p className='p-6  text-xs text-gray-500'>{data.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
