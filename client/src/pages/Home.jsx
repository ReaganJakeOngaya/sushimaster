import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImage from '../assets/sushi-1.png';
import sushi2 from '../assets/sushi-2.png';
import sushi3 from '../assets/sushi-3.png';
import sushi4 from '../assets/sushi-4.png';
import sushi5 from '../assets/sushi-5.png';
import sushi10 from '../assets/sushi-10.png';
import sushi11 from '../assets/sushi-11.png';
import sushi12 from '../assets/sushi-12.png';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    })
  }, [])

  return (
    <div className="pt-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative group" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative bg-gradient-to-br from-white to-orange-50 p-12 rounded-[3rem] shadow-2xl backdrop-blur-sm border border-white/50">
              <img
                src={heroImage}
                alt="Sushi"
                className="w-full max-w-md mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl rotate-12 flex items-center justify-center shadow-xl">
              <span className="text-white font-black text-2xl">新鮮</span>
            </div>
          </div>

          <div className="text-left space-y-8" data-aos="fade-left">
            <div className="inline-block">
              <span className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                🍱 AUTHENTIC JAPANESE CUISINE
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Taste The
              </span>
              <br />
              <span className="text-slate-900">Art of Japan</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
              Experience authentic Japanese flavors delivered to your doorstep. Every bite tells a story of tradition and perfection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Order Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              
              <button className="group px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
                Watch Video
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-4">
                {[44, 65, 32, 67].map((num) => (
                  <img
                    key={num}
                    src={`https://randomuser.me/api/portraits/women/${num}.jpg`}
                    alt="User"
                    className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
                  />
                ))}
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">24K+</p>
                <p className="text-slate-600 font-semibold">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Menu Items', icon: '🍱' },
              { number: '24K+', label: 'Happy Clients', icon: '😊' },
              { number: '50+', label: 'Expert Chefs', icon: '👨‍🍳' },
              { number: '15min', label: 'Avg Delivery', icon: '🚀' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl">{stat.icon}</div>
                <h4 className="text-4xl font-black text-white">{stat.number}</h4>
                <p className="text-slate-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-[4rem] blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <img src={sushi3} alt="Sushi" className="w-full" />
                </div>
              </div>
              <div className="space-y-6 pt-16">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <img src={sushi2} alt="Sushi" className="w-full" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl">
              <span className="text-white font-black text-4xl">美味</span>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="inline-block">
              <span className="px-6 py-2 bg-orange-100 text-orange-600 text-sm font-bold rounded-full">
                ABOUT US / 私たちについては
              </span>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              Bringing True<br />
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Japanese Flavors
              </span>
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We continue to provide the experience of <strong>Omotenashi</strong> - the Japanese mindset of hospitality. Every dish is crafted with precision, passion, and authentic techniques passed down through generations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Fresh Daily', '100% Authentic', 'Expert Chefs', 'Fast Delivery'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Foods Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="menu">
        <div className="text-center mb-16" data-aos="flip-up">
          <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-4">
            Popular <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Menu</span>
          </h2>
          <p className="text-xl text-slate-600 font-semibold">人気メニュー</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
          {['All', 'Sushi 🍣', 'Ramen 🍜', 'Udon 🥢', 'Danggo 🍡'].map((item, index) => (
            <button
              key={index}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 ${
                index === 0
                  ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-xl'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-orange-300 shadow-lg'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {[
            { name: 'Chezu Sushi', price: 21.0, rating: 4.9, image: sushi12 },
            { name: 'Original Sushi', price: 19.0, rating: 5.0, image: sushi11, active: true },
            { name: 'Ramen Legendo', price: 13.0, rating: 4.7, image: sushi10 }
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                item.active ? 'ring-4 ring-orange-500' : ''
              }`}
            >
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-white rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="font-black text-slate-900">{item.rating}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-center mb-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-48 h-48 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  />
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 mb-4">{item.name}</h4>
                
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    ${item.price.toFixed(2)}
                  </p>
                  <button className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group px-12 py-6 bg-slate-900 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
            Explore Full Menu
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="trending">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-block">
              <span className="px-6 py-2 bg-pink-100 text-pink-600 text-sm font-bold rounded-full">
                TRENDING / トレンド
              </span>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-black text-slate-900">
              Japanese<br />
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Sushi Selection
              </span>
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Discover the finest selection of authentic Japanese sushi, crafted with precision and passion.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Make Sushi', 'Oshizushi', 'Uramaki Sushi', 'Nigiri Sushi', 'Temaki Sushi', 'Inari Sushi'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-pink-50 p-4 rounded-2xl border-2 border-orange-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-[4rem] blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-white to-orange-50 p-12 rounded-[4rem] shadow-2xl">
              <img src={sushi5} alt="Sushi" className="w-full" />
            </div>
          </div>
        </div>

        <div className="text-center my-24" data-aos="zoom-in">
          <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200">
            Discover
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-[4rem] blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 p-12 rounded-[4rem] shadow-2xl">
              <img src={sushi4} alt="Drinks" className="w-full" />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2" data-aos="fade-left">
            <div className="inline-block">
              <span className="px-6 py-2 bg-blue-100 text-blue-600 text-sm font-bold rounded-full">
                TRENDING / トレンド
              </span>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-black text-slate-900">
              Japanese<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drink Collection
              </span>
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Refresh yourself with our authentic Japanese beverage selection, perfect for any meal.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Oruncha', 'Sakura Tea', 'Aojiru', 'Ofukucha', 'Kombu-cha', 'Mugicha'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border-2 border-blue-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="services">
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[4rem] p-16 shadow-2xl overflow-hidden" data-aos="flip-down">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Get Exclusive Offers<br />
              Straight to Your Inbox 📬
            </h2>
            
            <p className="text-xl text-slate-300 font-semibold">
              Sign up for the Sushiking newsletter and never miss a deal
            </p>

            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 pt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-8 py-5 rounded-2xl text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-orange-500 shadow-xl"
              />
              <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 whitespace-nowrap">
                Get Started →
              </button>
            </div>

            <div className="flex justify-center gap-8 pt-8 text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">No spam</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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