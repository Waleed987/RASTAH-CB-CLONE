import Navbar from '../components/Navbar';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SoftboySeasonSection from '../components/SoftBoySeasonSection';
import Thirdsection from '../components/Thirdsection';
import Fivesection from '../components/Fivesection';
import Sixsection from '../components/Sixsection';
function Hero() {
  const [navTop,setnavTop] = useState(false);
  return (
    <>
    <div className='h-auto w-screen flex flex-col'>

    <div  className="bg-[url('assets/hero2.webp')] md:bg-[url('assets/hero.webp')] h-screen w-screen bg-top sm:bg-cover  md:bg-cover">
      <div>
        <Navbar/>
      </div>
    </div>
    <section className='h-auto w-screen'>
      <SoftboySeasonSection/>
    </section>
    <section className='h-auto w-screen'>
      <Thirdsection/>
    </section>
    <section className='h-auto w-screen'>
      <SoftboySeasonSection/>
    </section>
    <section className='h-screen w-screen'>
      <Fivesection/>
    </section>

    <section className='h-screen w-screen'>
      <Sixsection/>
    </section>
    </div>
    </>
  ) 
}

export default Hero;
