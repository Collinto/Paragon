import React,{useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products';
import AOS from "aos"; //Animation On Scroll;
import "aos/dist/aos.css"
import TopRated from './components/TopRated/TopRated';
import Banner from './components/Banner/Banner';
// import Check from './components/Check';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

const App = () => {
 const [orderPopUp, setOrderPopUp] = useState(false);

 const handleOrderPopUp = () =>{
  setOrderPopUp(!orderPopUp);
 }

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>

    <Navbar handleOrderPopUp={handleOrderPopUp}/>
    <Hero handleOrderPopUp={handleOrderPopUp}/>
    <Products />
    <TopRated handleOrderPopUp={handleOrderPopUp}/>
    <Banner />
    <Subscribe />
    <Products />
    <Testimonials />  
    <Footer />
    <Popup orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
     {/* <Check /> */}
    </div>
  )
}

export default App
