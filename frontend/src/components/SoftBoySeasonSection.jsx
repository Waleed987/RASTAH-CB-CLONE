import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SoftboySeasonSection() {
  const [activeTab, setActiveTab] = useState('men');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  
  const products = [
    {
      id: 1,
      name: "BAZM-E-BAHAR JACKET",
      price: "Rs.134,600.00",
      image: "assets/hero.webp",
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
        primary: "bg-stone-200",
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
      },
    }
    ,
    {
      id: 4,
      name: "BEIGE EMBROIDERED JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-stone-200",
        accent: "bg-orange-200"
      }
    }
    ,
    {
      id: 4,
      name: "BEIGE EMBROIDERED JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-stone-200",
        accent: "bg-orange-200"
      }
    },
    {
      id: 4,
      name: "BEIGE EMBROIDERED JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-stone-200",
        accent: "bg-orange-200"
      }
    },
    {
      id: 4,
      name: "BEIGE EMBROIDERED JACKET",
      price: "Rs.134,600.00",
      image: "/api/placeholder/300/400",
      isNew: true,
      colors: {
        primary: "bg-stone-200",
        accent: "bg-orange-200"
      }
    }
  ];

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else if (width < 1280) {
        setItemsPerView(3); // Small desktop: 3 items
      } else {
        setItemsPerView(4); // Large desktop: 4 items
      }
      setCurrentSlide(0); // Reset slide when changing view
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxSlides = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="h-auto w-full bg-gray-50 flex flex-col overflow-x-hidden">
      {/* Header */}
      <div className="pt-8 md:pt-16 pb-6 md:pb-8 px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-6 md:mb-8">
          SOFTBOY SEASON
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('men')}
            className={`px-4 md:px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
              activeTab === 'men'
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-gray-700 border-gray-300 hover:border-gray-400'
            }`}
          >
            Men's
          </button>
          <button
            onClick={() => setActiveTab('women')}
            className={`px-4 md:px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
              activeTab === 'women'
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-gray-700 border-gray-300 hover:border-gray-400'
            }`}
          >
            Women's
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 md:px-6 py-2 rounded-full border-b-2 transition-all duration-300 text-sm md:text-base ${
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
      <div className="flex-1 px-4 md:px-8 pb-8 relative">
        {/* Navigation Arrows - Only show if there are slides to navigate */}
        {maxSlides > 0 && (
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-10 flex gap-2 md:gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlides}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
            </button>
          </div>
        )}

        {/* Products Grid Container */}
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
              width: `${(products.length / itemsPerView) * 100}%`
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer"
                style={{ width: `${100 / products.length}%` }}
              >
                <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 h-full">
                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10">
                      <span className="bg-green-500 text-white px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded">
                        NEW
                      </span>
                    </div>
                  )}
                  
                  {/* Product Image Area */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {/* Simulated jacket with dynamic colors */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="w-full h-full max-w-32 md:max-w-48 relative">
                        {/* Main jacket body */}
                        <div className={`w-full h-full rounded-lg ${product.colors.primary} opacity-80 relative`}>
                          {/* Decorative patterns */}
                          <div className={`absolute top-4 md:top-8 left-2 md:left-4 right-2 md:right-4 h-8 md:h-16 ${product.colors.accent} opacity-60 rounded`}></div>
                          <div className={`absolute bottom-4 md:bottom-8 left-2 md:left-4 right-2 md:right-4 h-4 md:h-8 ${product.colors.accent} opacity-40 rounded`}></div>
                        </div>
                        {/* Collar */}
                        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-8 md:w-16 h-4 md:h-8 ${product.colors.primary} rounded-b-lg`}></div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-3 md:p-6 bg-white">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-1 md:mb-2 tracking-wide leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-lg font-light text-gray-700">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        {maxSlides > 0 && (
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-black'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SoftboySeasonSection;