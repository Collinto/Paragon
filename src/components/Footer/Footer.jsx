import React from 'react';
import footer from "../../assets/footer-pattern-mGVwO-y6.jpg";
import logo from "../../assets/shop-logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaX, FaXTwitter } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const FooterImg = {
    backgroundImage: `url(${footer})`,
    backgroundPositon: "bottom",
    backgroundRepeast: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
  
];

const Footer = () => {
  return (
    <div style={FooterImg} className='text-white '>
      <div className='container'>
        <div 
        data-aos="zoom-in"
        className='grid md:grid-cols-3 pb-44 pt-5 '>
        {/* Shop details */}
          <div className='py8
           py-4 flex flex-col gap-4'>
            <a href="#" target='_blank' className='flex items-center max-w-[170px] border border-[rgba(236,231,231,0.3)] p-2 rounded-lg bg-[rgba(236,231,231,0.3)] gap-2 '>
              <img src={logo} alt="LOGO" className='w-15 h-10 max-w-[50px]'/>
              <p className='font-bold text-xl uppercase dark:text-black'>Paragon</p>
            </a>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ratione at id quibusdam quisquam dolore.</p>
          </div>

        {/* Footer Links */}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10
        '>
          <div className='py-8 px-4'>
            <h1 className='sm:text-xl font-bold sm:text-left text-justify mb-3 '>Important links</h1>
            <ul className='flex flex-col gap-3'>
              {
                FooterLinks.map((data)=>(
                  <li className='cursor-pointer hover:text-blue-400 hover:translate-x-1 duration-300 text-gray-200' key={data.title}>{data.title}</li>
                ))
              }
            </ul>
          </div>

          <div className='py-8 px-4'>
            <h1 className='sm:text-xl font-bold sm:text-left text-justify mb-3 '>Other links</h1>
            <ul className='flex flex-col gap-3'>
              {
                FooterLinks.map((data)=>(
                  <li className='cursor-pointer hover:text-blue-400 hover:translate-x-1 duration-300 text-gray-200' key={data.title}>{data.title}</li>
                ))
              }
            </ul>
          </div>
           {/* Social links */}
           <div>
                <div className="flex items-center gap-3 mt-10">
                  <a href="#">
                    <FaInstagram className='text-violet-500 text-2xl'/>
                  </a>
                  <a href="#">
                    <FaFacebook className='text-blue-500 text-2xl'/>
                  </a>
                  <a href="#">
                    <FaXTwitter className='text-white text-2xl'/>
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-blue-500 text-2xl'/>
                  </a>
                </div>

                <div className='mt-6'>
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Abuja, Nigeria</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    <p>+2347081774877</p>
                  </div>

                </div>
              </div>
        </div>
             
        </div>
      </div>
    </div>
  )
}

export default Footer
