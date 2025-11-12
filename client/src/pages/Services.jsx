import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaShippingFast,
  FaClock,
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
      duration: 1000,
      offset: 100,
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
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Food Blogger',
      rating: 5,
      comment: 'The fastest delivery I have ever experienced! Food arrived hot and fresh.',
      image: '👩‍💼',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Event Planner',
      rating: 5,
      comment: 'Their catering service made our corporate event unforgettable!',
      image: '👨‍💼',
    },
    {
      name: 'Emma Thompson',
      role: 'Sushi Enthusiast',
      rating: 5,
      comment: 'The masterclass was incredible! Learned so much from the chefs.',
      image: '👩‍🍳',
    },
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 border border-blue-100 mx-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-slate-700">Back to Home</span>
          </Link>

          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
              <FaRocket className="animate-pulse" />
              OUR SERVICES / サービス
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Premium
            </span>
            <br />
            <span className="text-slate-900">Services</span>
          </h1>

          <p className="text-xl text-slate-600 font-semibold max-w-2xl mx-auto">
            Experience Japanese culinary excellence with our premium services designed for every occasion.
          </p>
        </div>

        {/* Services Tabs */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group relative p-8 rounded-3xl text-left transition-all duration-500 hover:scale-105 ${
                  activeTab === service.id
                    ? 'shadow-2xl text-white'
                    : 'bg-white shadow-lg hover:shadow-xl border border-slate-200 text-slate-700'
                }`}
              >
                {/* Background Gradient for Active State */}
                {activeTab === service.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl`}></div>
                )}

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 ${
                    activeTab === service.id
                      ? 'bg-white/20 text-white'
                      : `bg-gradient-to-r ${service.color} text-white`
                  }`}>
                    <service.icon size={24} />
                  </div>

                  <h3 className="text-2xl font-black mb-3">{service.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    activeTab === service.id ? 'text-blue-100' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-black ${
                          activeTab === service.id ? 'text-white' : 'text-slate-900'
                        }`}>
                          {value}
                        </div>
                        <div className={`text-xs font-bold ${
                          activeTab === service.id ? 'text-blue-100' : 'text-slate-500'
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
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-12 border border-blue-100" data-aos="zoom-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block mb-6">
                    <span className={`px-6 py-2 bg-gradient-to-r ${activeService.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                      FEATURES
                    </span>
                  </div>
                  
                  <h2 className="text-4xl font-black text-slate-900 mb-6">
                    {activeService.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  <div className="space-y-4">
                    {activeService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeService.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <FaCheckCircle className="text-white text-lg" />
                        </div>
                        <span className="text-lg font-bold text-slate-900">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl flex items-center justify-center shadow-2xl">
                    <activeService.icon className="text-blue-500 text-8xl" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-aos="flip-up"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm font-semibold">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Ready to Experience Excellence?
              </h3>
              <p className="text-slate-300 text-lg font-semibold mb-8">
                Book our premium services today and elevate your Japanese dining experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <FaHeadset />
                  Contact Us
                </button>
                <Link
                  to="/menu"
                  className="group px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  View Menu
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">→</span>
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
