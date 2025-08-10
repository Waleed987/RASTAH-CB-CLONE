import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SoftboySeasonSection() {
  const [activeTab, setActiveTab] = useState('men');
  
  const products = [
    {
      id: 1,
      name: "BAZM-E-BAHAR JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-green-700",
        accent: "bg-green-100"
      }
    },
    {
      id: 2,
      name: "PATANG-E-KHAYAAL JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-yellow-400",
        accent: "bg-pink-200"
      }
    },
    {
      id: 3,
      name: "NAQSH-E-KHAYAL KHADDAR JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-amber-700",
        accent: "bg-red-600"
      }
    },
    {
      id: 4,
      name: "BEIGE EMBROIDERED JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-cream-100",
        accent: "bg-orange-200"
      }
    },
    {
      id: 5,
      name: "HISAAB JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-red-600",
        accent: "bg-orange-300"
      }
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerView = 4;
  const maxSlides = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="h-screen w-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="pt-16 pb-8 px-8">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-8">
          SOFTBOY SEASON
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 mb-8">
          <button
            onClick={() => setActiveTab('men')}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeTab === 'men'
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-gray-700 border-gray-300 hover:border-gray-400'
            }`}
          >
            Men's
          </button>
          <button
            onClick={() => setActiveTab('women')}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeTab === 'women'
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-gray-700 border-gray-300 hover:border-gray-400'
            }`}
          >
            Women's
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full border-b-2 transition-all duration-300 ${
              activeTab === 'all'
                ? 'border-black text-black'
                : 'border-transparent text-gray-700 hover:border-gray-300'
            } bg-transparent`}
          >
            Shop All
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 px-8 relative">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 right-8 z-10 flex gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-none w-1/4 group cursor-pointer">
                <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-green-500 text-white px-3 py-1 text-sm font-medium rounded">
                        NEW
                      </span>
                    </div>
                  )}
                  
                  {/* Product Image Area */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {/* Simulated jacket with dynamic colors */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-60 relative">
                        {/* Main jacket body */}
                        <div className={`w-full h-full rounded-lg ${product.colors.primary} opacity-80 relative`}>
                          {/* Decorative patterns */}
                          <div className={`absolute top-8 left-4 right-4 h-16 ${product.colors.accent} opacity-60 rounded`}></div>
                          <div className={`absolute bottom-8 left-4 right-4 h-8 ${product.colors.accent} opacity-40 rounded`}></div>
                        </div>
                        {/* Collar */}
                        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 ${product.colors.primary} rounded-b-lg`}></div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 tracking-wide leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-lg font-light text-gray-700">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoftboySeasonSection;