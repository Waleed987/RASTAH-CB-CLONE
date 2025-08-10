import Navbar from '../components/Navbar';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SoftboySeasonSection from '../components/SoftBoySeasonSection';
function Hero() {
  const [navTop,setnavTop] = useState(false);
  return (
    <>
    <div  className="bg-[url('src/assets/hero2.webp')] md:bg-[url('src/assets/hero.webp')] h-screen w-screen bg-top sm:bg-cover  md:bg-cover">
      <div>
        <Navbar/>
      </div>
    </div>
    <section className='h-screen w-screen'>
      <SoftboySeasonSection/>
    </section>
    </>
  ) 
}

export default Hero;
