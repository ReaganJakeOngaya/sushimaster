import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImage from '../assets/sushi-1.png'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    })
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up">
            <img
              src={heroImage}
              alt="Sushi"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
            <h2 className="absolute top-1/4 -right-8 text-6xl md:text-8xl font-bold text-gray-200 -rotate-90 origin-bottom-right">
              日本食
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl -z-10"></div>
          </div>

          <div className="text-center lg:text-left" data-aos="fade-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Feel the taste of Japanese food
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Feel the taste of the most popular Japanese food from anywhere and
              anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/menu"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Order Now
              </Link>
              <button className="flex items-center justify-center gap-2 border border-primary/30 text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/10 transition-all">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3 h-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                How to Order
              </button>
            </div>

            <div className="mt-12 bg-primary/10 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">
                  24<span className="text-secondary">k+</span>
                </h4>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 italic max-w-xs">
                  "This is the best Japanese food delivery service that ever
                  existed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="relative" data-aos="fade-right">
              <img
                src={require('../assets/sushi-3.png')}
                alt="Sushi"
                className="w-full max-w-xs mx-auto"
              />
            </div>
            <div className="relative mt-16" data-aos="fade-right">
              <img
                src={require('../assets/sushi-2.png')}
                alt="Sushi"
                className="w-full max-w-xs mx-auto"
              />
            </div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-all">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="text-center lg:text-left" data-aos="fade-left">
            <p className="text-primary font-medium mb-2">
              About Us / 私たちに関しては
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our mission is to bring true Japanese flavours to you.
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
              We will continue to provide the experience of Omotenashi, the
              Japanese mindset of hospitality, with our shopping and dining for
              our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Foods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="menu">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="flip-up"
        >
          Popular Food / 人気
        </h2>

        <div
          className="flex overflow-x-auto gap-4 pb-4 mb-8 sushi__hide-scrollbar"
          data-aos="fade-up"
        >
          {['All', 'Sushi', 'Ramen', 'Udon', 'Danggo'].map((item, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full whitespace-nowrap ${
                index === 0
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {[
            {
              name: 'Chezu Sushi',
              price: 21.0,
              rating: 4.9,
              image: require('../assets/sushi-12.png'),
            },
            {
              name: 'Original Sushi',
              price: 19.0,
              rating: 5.0,
              image: require('../assets/sushi-11.png'),
              active: true,
            },
            {
              name: 'Ramen Legendo',
              price: 13.0,
              rating: 4.7,
              image: require('../assets/sushi-10.png'),
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all ${
                item.active ? 'border-2 border-primary' : 'border border-gray-100'
              }`}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-center mb-4">{item.name}</h4>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
                <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2">
            Explore Food
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="trending">
        {/* Trending Sushi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <p className="text-primary font-medium mb-2">
              What's Trending / トレンド
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Japanese Sushi</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Feel the taste of the most delicious Sushi here.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Make Sushi',
                'Oshizushi',
                'Uramaki Sushi',
                'Nigiri Sushi',
                'Temaki Sushi',
                'Inari Sushi',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src={require('../assets/sushi-5.png')}
              alt="Sushi"
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute top-1/4 -left-8 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary rotate-90"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Discover */}
        <div className="text-center my-16" data-aos="zoom-in">
          <p className="text-6xl md:text-8xl font-bold text-gray-200">Discover</p>
        </div>

        {/* Trending Drinks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <img
              src={require('../assets/sushi-4.png')}
              alt="Drinks"
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute top-1/4 right-1/2 transform translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary -rotate-90"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary -rotate-90"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="text-center lg:text-left order-1 lg:order-2" data-aos="fade-left">
            <p className="text-primary font-medium mb-2">
              What's Trending / トレンド
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Japanese Drinks</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Feel the taste of the most delicious Japanese drinks here.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Oruncha',
                'Sakura Tea',
                'Aojiru',
                'Ofukucha',
                'Kombu-cha',
                'Mugicha',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl my-12" id="services">
        <div className="text-center" data-aos="flip-down">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get offers straight <br />
            to your inbox.
          </h2>
          <p className="text-gray-300 mb-8" data-aos="fade-up">
            Sign up for the Sushiking newsletter
          </p>

          <div
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
          >
            <input
              type="text"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home