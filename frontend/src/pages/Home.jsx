import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SoftboySeasonSection from '../components/SoftBoySeasonSection';
import Thirdsection from '../components/Thirdsection';
import Fivesection from '../components/Fivesection';
import Sixsection from '../components/Sixsection';

function Home() {
  const [navTop, setnavTop] = useState(false);
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/inventory/collection");
        setInventoryItems(res.data.inventoryItems);
        console.log("Inventory items:", res.data.inventoryItems);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    }

    fetchItems();
  }, []);

  return (
    <>
      <div className='h-auto w-screen flex flex-col'>

        <div className="bg-[url('assets/hero2.webp')] md:bg-[url('/hero.webp')] h-screen w-screen bg-top sm:bg-cover  md:bg-cover">
          <div>
            <Navbar />
          </div>
        </div>
        <section className='h-auto w-screen'>
          <SoftboySeasonSection />
        </section>
        <section className='h-auto w-screen'>
          <Thirdsection />
        </section>
        <section className='h-auto w-screen'>
          <SoftboySeasonSection />
        </section>
        <section className='h-screen w-screen'>
          <Fivesection />
        </section>

        <section className='h-screen w-screen'>
          <Sixsection />
        </section>
      </div>
    </>
  )
}

export default Home;
