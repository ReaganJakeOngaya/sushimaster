import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaShippingFast,
  FaShieldAlt,
  FaStar,
  FaAward,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaRocket,
  FaCrown,
  FaUsers,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('delivery');

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });
  }, []);

  const services = [
    {
      id: 'delivery',
      title: 'Lightning Delivery',
      description: 'Get your favorite Japanese dishes delivered in record time',
      icon: FaShippingFast,
      features: [
        '15-30 minute delivery guarantee',
        'Real-time order tracking',
        'Temperature-controlled packaging',
        'Live delivery updates',
      ],
      stats: { time: '25min', rating: '4.9', orders: '10K+' },
      color: 'bg-blue-600',
    },
    {
      id: 'catering',
      title: 'Premium Catering',
      description: 'Elevate your events with authentic Japanese catering',
      icon: FaCrown,
      features: [
        'Custom menu planning',
        'Professional setup & service',
        'Traditional presentation',
        'Dietary accommodations',
      ],
      stats: { time: '48h', rating: '4.8', orders: '500+' },
      color: 'bg-purple-600',
    },
    {
      id: 'experience',
      title: 'Sushi Masterclass',
      description: 'Learn the art of sushi from our master chefs',
      icon: FaUsers,
      features: [
        'Hands-on sushi making',
        'Traditional techniques',
        'Premium ingredients',
        'Certificate of completion',
      ],
      stats: { time: '2h', rating: '5.0', orders: '200+' },
      color: 'bg-green-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Food Blogger',
      rating: 5,
      comment: 'The fastest delivery I have ever experienced! Food arrived hot and fresh.',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Event Planner',
      rating: 5,
      comment: 'Their catering service made our corporate event unforgettable!',
    },
    {
      name: 'Emma Thompson',
      role: 'Sushi Enthusiast',
      rating: 5,
      comment: 'The masterclass was incredible! Learned so much from the chefs.',
    },
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-300 mb-6 border border-gray-200 mx-auto"
          >
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-gray-700">Back to Home</span>
          </Link>

          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold flex items-center gap-2">
              <FaRocket className="animate-pulse" />
              OUR SERVICES / サービス
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="text-blue-600">
              PREMIUM
            </span>
            <br />
            <span className="text-black">SERVICES</span>
          </h1>

          <p className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
            Experience Japanese culinary excellence with our premium services designed for every occasion.
          </p>
        </div>

        {/* Services Tabs */}
        <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group relative p-6 text-left transition-all duration-300 border ${
                  activeTab === service.id
                    ? 'text-white border-transparent'
                    : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
                }`}
              >
                {/* Background for Active State */}
                {activeTab === service.id && (
                  <div className={`absolute inset-0 ${service.color}`}></div>
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 flex items-center justify-center mb-4 ${
                    activeTab === service.id
                      ? 'bg-white/20 text-white'
                      : `${service.color} text-white`
                  }`}>
                    <service.icon size={20} />
                  </div>

                  <h3 className="text-xl font-black mb-2">{service.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    activeTab === service.id ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  <div className="flex items-center gap-3">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-base font-black ${
                          activeTab === service.id ? 'text-white' : 'text-black'
                        }`}>
                          {value}
                        </div>
                        <div className={`text-xs font-bold ${
                          activeTab === service.id ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          {activeService && (
            <div className="bg-gray-50 p-8 border border-gray-200" data-aos="zoom-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block mb-4">
                    <span className={`px-4 py-2 ${activeService.color} text-white text-sm font-bold`}>
                      FEATURES
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-black mb-4">
                    {activeService.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  <div className="space-y-3">
                    {activeService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${activeService.color} flex items-center justify-center flex-shrink-0`}>
                          <FaCheckCircle className="text-white text-base" />
                        </div>
                        <span className="text-base font-bold text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gray-100 flex items-center justify-center border border-gray-300">
                    <activeService.icon className={`${activeService.color.replace('bg-', 'text-')} text-6xl`} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              WHAT OUR <span className="text-blue-600">CLIENTS</span> SAY
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                data-aos="flip-up"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-black text-black text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm font-semibold">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-sm" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic text-sm">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="bg-black p-8 border border-gray-800">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                READY TO EXPERIENCE EXCELLENCE?
              </h3>
              <p className="text-gray-300 text-base font-semibold mb-6">
                Book our premium services today and elevate your Japanese dining experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="group px-6 py-3 bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
                  <FaHeadset />
                  CONTACT US
                </button>
                <Link
                  to="/menu"
                  className="group px-6 py-3 bg-white text-black font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                >
                  VIEW MENU
                  <div className="w-5 h-5 bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-black text-xs">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;