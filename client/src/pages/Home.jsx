import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShrimp, faFaceSmile, faUserNinja, faTruckFast, faGift } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImage from '../assets/japanese-sushi.webp';
import sushi2 from '../assets/Salmon-nigiri-sushi.webp';
import sushi3 from '../assets/All-sushi.webp';
import sushi4 from '../assets/green-tea.webp';
import sushi5 from '../assets/sushi-select.webp';
import sushi10 from '../assets/yaki-udon.webp';
import sushi11 from '../assets/beef-ramen.jpg';
import sushi12 from '../assets/cherashizushi.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    })
  }, [])

  return (
    <div className="pt-16 bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <div className="text-left space-y-6" data-aos="fade-right">
            <div className="inline-block">
              <span className="px-4 py-2 bg-black text-white text-sm font-bold">
                AUTHENTIC JAPANESE CUISINE
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="text-black">
                TASTE THE
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                ART OF JAPAN
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-medium">
              Experience authentic Japanese flavors delivered to your doorstep. Every bite tells a story of tradition and perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/menu"
                className="px-8 py-4 bg-black text-white font-bold hover:bg-red-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                ORDER NOW
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </Link>
              
              <button className="px-8 py-4 bg-white text-black font-bold border-[1.8px] border-black hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="w-8 h-8 bg-black flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
                WATCH VIDEO
              </button>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg">
              <img
                src={heroImage}
                alt="Sushi"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 flex items-center justify-center">
              <span className="text-white font-black text-xl">新鮮</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto" data-aos="fade-up">
        <div className="bg-black p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Menu Items', icon: <FontAwesomeIcon icon={faShrimp} style={{ color: 'white' }} /> },
              { number: '24K+', label: 'Happy Clients', icon: <FontAwesomeIcon icon={faFaceSmile} style={{ color: 'white' }} /> },
              { number: '50+', label: 'Expert Chefs', icon: <FontAwesomeIcon icon={faUserNinja} style={{ color: 'white' }} /> },
              { number: '15min', label: 'Avg Delivery', icon: <FontAwesomeIcon icon={faTruckFast} style={{ color: 'white' }} /> }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl">{stat.icon}</div>
                <h4 className="text-3xl font-black text-white">{stat.number}</h4>
                <p className="text-gray-300 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 shadow-lg border border-gray-200">
                  <img src={sushi3} alt="Sushi" className="w-full" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 shadow-lg border border-gray-200">
                  <img src={sushi2} alt="Sushi" className="w-full" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 flex items-center justify-center">
              <span className="text-white font-black text-2xl">美味</span>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-red-100 text-red-700 text-sm font-bold">
                ABOUT US / 私たちについては
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black leading-tight text-black">
              BRINGING TRUE<br />
              <span className="text-red-700">
                JAPANESE FLAVORS
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We continue to provide the experience of <strong>Omotenashi</strong> - the Japanese mindset of hospitality. Every dish is crafted with precision, passion, and authentic techniques.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {['Fresh Daily', '100% Authentic', 'Expert Chefs', 'Fast Delivery'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-bold text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Foods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="menu">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            POPULAR <span className="text-red-700">MENU</span>
          </h2>
          <p className="text-lg text-gray-600 font-semibold">人気メニュー</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up">
          {['All', 'Sushi', 'Ramen', 'Udon', 'Danggo'].map((item, index) => (
            <button
              key={index}
              className={`px-6 py-3 font-bold transition-all duration-300 ${
                index === 0
                  ? 'bg-black text-white'
                  : 'bg-white text-black border-[1.8px] border-gray-400 hover:bg-gray-100'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {[
            { name: 'Chirashizushi (ちらし寿司)', price: 21.0, rating: 4.9, image: sushi12 },
            { name: 'Original Sushi', price: 19.0, rating: 5.0, image: sushi11, active: true },
            { name: 'Ramen Legendo', price: 13.0, rating: 4.7, image: sushi10 }
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                item.active ? 'border-2 border-dashed border-red-600' : 'border border-gray-200'
              }`}
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white px-3 py-2 shadow-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="font-black text-black">{item.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-center mb-4 bg-gray-50 p-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-contain transform group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                
                <h4 className="text-xl font-black text-black mb-3">{item.name}</h4>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-black text-red-700">
                    ${item.price.toFixed(2)}
                  </p>
                  <button className="w-12 h-12 bg-black hover:bg-red-700 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-black text-white font-bold text-lg hover:bg-red-700 transition-all duration-300 inline-flex items-center gap-2">
            EXPLORE FULL MENU
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="trending">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6" data-aos="fade-right">
            <div className="inline-block">
              <span className="px-4 py-2 bg-red-100 text-red-700 text-sm font-bold">
                TRENDING / トレンド
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-black">
              JAPANESE<br />
              <span className="text-red-700">
                SUSHI SELECTION
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the finest selection of authentic Japanese sushi, crafted with precision and passion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Make Sushi', 'Oshizushi', 'Uramaki Sushi', 'Nigiri Sushi', 'Temaki Sushi', 'Inari Sushi'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-red-50 p-3 border-2 border-red-200">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-bold text-black text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg">
              <img src={sushi5} alt="Sushi" className="w-full" />
            </div>
          </div>
        </div>

        <div className="text-center my-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-gray-500">
            DISCOVER
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg">
              <img src={sushi4} alt="Drinks" className="w-full" />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2" data-aos="fade-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold">
                TRENDING / トレンド
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-black">
              JAPANESE<br />
              <span className="text-blue-700">
                DRINK COLLECTION
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Refresh yourself with our authentic Japanese beverage selection, perfect for any meal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Oruncha', 'Sakura Tea', 'Aojiru', 'Ofukucha', 'Kombu-cha', 'Mugicha'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-blue-50 p-3 border-2 border-blue-200">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-bold text-black text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="services">
        <div className="bg-black p-8 shadow-lg" data-aos="fade-up">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              GET EXCLUSIVE OFFERS<br />
              STRAIGHT TO YOUR INBOX <FontAwesomeIcon icon={faGift} style={{ color: 'white' }} />
            </h2>
            
            <p className="text-lg text-gray-300 font-semibold">
              Sign up for the Sushiking newsletter and never miss a deal
            </p>

            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 pt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="px-8 py-4 bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-all duration-300 whitespace-nowrap">
                GET STARTED →
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">No spam</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home