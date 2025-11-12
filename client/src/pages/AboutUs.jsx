import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaAward,
  FaUsers,
  FaHeart,
  FaClock,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaCheckCircle,
  FaUtensils,
  FaFish,
  FaLeaf,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sushi1 from '../assets/sushi-1.png';
import sushi2 from '../assets/sushi-2.png';
import sushi3 from '../assets/sushi-3.png';

const AboutUs = () => {
  const [activeStory, setActiveStory] = useState('heritage');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const stories = [
    {
      id: 'heritage',
      title: 'Our Heritage',
      description: 'Three generations of sushi mastery passed down through tradition and innovation',
      year: '1985',
      details: 'Founded by Master Chef Hiroshi Tanaka, SushiKing began as a small family restaurant in Tokyo. Our recipes have been perfected over decades.',
    },
    {
      id: 'mission',
      title: 'Our Mission',
      description: 'Bringing authentic Japanese flavors to the world with uncompromising quality',
      year: 'Today',
      details: 'We continue to honor traditional techniques while embracing modern culinary innovations to create unforgettable dining experiences.',
    },
    {
      id: 'future',
      title: 'Our Future',
      description: 'Expanding horizons while staying true to our roots and values',
      year: '2024',
      details: 'With plans to bring authentic Japanese cuisine to new markets, we remain committed to quality, sustainability, and culinary excellence.',
    },
  ];

  const team = [
    {
      name: 'Hiroshi Tanaka',
      role: 'Master Chef & Founder',
      experience: '40+ years',
      specialty: 'Traditional Edomae Sushi',
      image: '👨‍🍳',
      quote: 'Every grain of rice tells a story of tradition.',
    },
    {
      name: 'Yuki Nakamura',
      role: 'Head Sushi Chef',
      experience: '15+ years',
      specialty: 'Modern Fusion Creations',
      image: '👩‍🍳',
      quote: 'Innovation rooted in tradition creates magic.',
    },
    {
      name: 'Kenji Sato',
      role: 'Ramen Master',
      experience: '12+ years',
      specialty: 'Rich Tonkotsu Broth',
      image: '🧑‍🍳',
      quote: 'The perfect bowl warms both body and soul.',
    },
  ];

  const values = [
    {
      icon: FaFish,
      title: 'Freshness First',
      description: 'Daily delivery of premium ingredients from trusted suppliers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'Ethically sourced seafood and eco-friendly practices',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Every dish crafted with love and attention to detail',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Consistent quality and exceptional dining experiences',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const activeStoryData = stories.find(story => story.id === activeStory);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-amber-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white to-emerald-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 border border-emerald-100 mx-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-slate-700">Back to Home</span>
          </Link>

          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
              <FaHeart className="animate-pulse" />
              ABOUT US / 私たちについては
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Our Story
            </span>
            <br />
            <span className="text-slate-900">Of Passion</span>
          </h1>

          <p className="text-xl text-slate-600 font-semibold max-w-2xl mx-auto">
            Three generations of culinary excellence, one unforgettable taste experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '40+', label: 'Years Experience', icon: '📅' },
                { number: '50K+', label: 'Happy Customers', icon: '😊' },
                { number: '3', label: 'Generations', icon: '👨‍👩‍👧‍👦' },
                { number: '4.9★', label: 'Customer Rating', icon: '⭐' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl">{stat.icon}</div>
                  <h4 className="text-3xl font-black text-white">{stat.number}</h4>
                  <p className="text-emerald-100 font-semibold text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Timeline */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(story.id)}
                className={`group relative p-8 rounded-3xl text-left transition-all duration-500 hover:scale-105 ${
                  activeStory === story.id
                    ? 'shadow-2xl text-white'
                    : 'bg-white shadow-lg hover:shadow-xl border border-slate-200 text-slate-700'
                }`}
              >
                {/* Background Gradient for Active State */}
                {activeStory === story.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl"></div>
                )}

                <div className="relative z-10">
                  <div className={`text-4xl font-black mb-4 ${
                    activeStory === story.id ? 'text-white' : 'text-emerald-600'
                  }`}>
                    {story.year}
                  </div>

                  <h3 className="text-2xl font-black mb-3">{story.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    activeStory === story.id ? 'text-emerald-100' : 'text-slate-600'
                  }`}>
                    {story.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Story Details */}
          {activeStoryData && (
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl p-12 border border-emerald-100" data-aos="zoom-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 mb-6">
                    {activeStoryData.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {activeStoryData.details}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <FaAward className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-slate-900">{activeStoryData.year}</div>
                      <div className="text-emerald-600 font-bold">Milestone Year</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-6 text-center">
                    <img src={sushi1} alt="Traditional Sushi" className="w-32 h-32 mx-auto object-contain" />
                    <div className="text-lg font-black text-slate-900 mt-4">Traditional</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 text-center">
                    <img src={sushi2} alt="Modern Sushi" className="w-32 h-32 mx-auto object-contain" />
                    <div className="text-lg font-black text-slate-900 mt-4">Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Master Chefs</span>
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              The talented artists behind every unforgettable dish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                data-aos="flip-up"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg text-4xl mx-auto mb-6">
                  {member.image}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-bold mb-3">{member.role}</p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FaClock className="text-slate-400" />
                  <span className="text-slate-600 font-semibold">{member.experience}</span>
                </div>

                <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-4 mb-4">
                  <p className="text-slate-700 font-bold text-sm">{member.specialty}</p>
                </div>

                <p className="text-slate-600 italic text-sm leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg mx-auto mb-4`}>
                  <value.icon className="text-white text-2xl" />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Visit Us Today
              </h3>
              <p className="text-slate-300 text-lg font-semibold mb-8">
                Experience the taste of tradition and innovation at SushiKing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3 text-emerald-300">
                  <FaMapMarkerAlt />
                  <span className="font-semibold">123 Sakura Street, Tokyo</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-300">
                  <FaPhone />
                  <span className="font-semibold">+81 3-1234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-300">
                  <FaClock />
                  <span className="font-semibold">11:00 AM - 10:00 PM</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white">
                  <FaInstagram />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white">
                  <FaTwitter />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white">
                  <FaFacebook />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs