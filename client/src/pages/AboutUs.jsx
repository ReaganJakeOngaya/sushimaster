import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFaceSmile, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  FaArrowLeft,
  FaAward,
  FaHeart,
  FaClock,
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
      duration: 800,
      offset: 50,
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
      year: '2025',
      details: 'With plans to bring authentic Japanese cuisine to new markets, we remain committed to quality, sustainability, and culinary excellence.',
    },
  ];

  const team = [
    {
      name: 'Hiroshi Tanaka',
      role: 'Master Chef & Founder',
      experience: '40+ years',
      specialty: 'Traditional Edomae Sushi',
      quote: 'Every grain of rice tells a story of tradition.',
    },
    {
      name: 'Yuki Nakamura',
      role: 'Head Sushi Chef',
      experience: '15+ years',
      specialty: 'Modern Fusion Creations',
      quote: 'Innovation rooted in tradition creates magic.',
    },
    {
      name: 'Kenji Sato',
      role: 'Ramen Master',
      experience: '12+ years',
      specialty: 'Rich Tonkotsu Broth',
      quote: 'The perfect bowl warms both body and soul.',
    },
  ];

  const values = [
    {
      icon: FaFish,
      title: 'Freshness First',
      description: 'Daily delivery of premium ingredients from trusted suppliers',
      color: 'bg-blue-600',
    },
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'Ethically sourced seafood and eco-friendly practices',
      color: 'bg-green-600',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Every dish crafted with love and attention to detail',
      color: 'bg-red-600',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Consistent quality and exceptional dining experiences',
      color: 'bg-purple-600',
    },
  ];

  const activeStoryData = stories.find(story => story.id === activeStory);

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
            <span className="px-4 py-2 bg-green-600 text-white text-sm font-bold flex items-center gap-2">
              <FaHeart className="animate-pulse" />
              ABOUT US / 私たちについては
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="text-green-600">
              OUR STORY
            </span>
            <br />
            <span className="text-black">OF PASSION</span>
          </h1>

          <p className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
            Three generations of culinary excellence, one unforgettable taste experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-12" data-aos="fade-up">
          <div className="bg-green-600 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: '40+', label: 'Years Experience', icon: <FontAwesomeIcon icon={faCalendar} /> },
                { number: '50K+', label: 'Happy Customers', icon: <FontAwesomeIcon icon={faFaceSmile} /> },
                { number: '3', label: 'Generations', icon: <FontAwesomeIcon icon={faUsers} /> },
                { number: '4.9', label: 'Customer Rating', icon: <FontAwesomeIcon icon={faStar} /> },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-2xl">{stat.icon}</div>
                  <h4 className="text-2xl font-black text-white">{stat.number}</h4>
                  <p className="text-green-100 font-semibold text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Timeline */}
        <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(story.id)}
                className={`group relative p-6 text-left transition-all duration-300 border ${
                  activeStory === story.id
                    ? 'text-white border-transparent'
                    : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
                }`}
              >
                {/* Background for Active State */}
                {activeStory === story.id && (
                  <div className="absolute inset-0 bg-green-600"></div>
                )}

                <div className="relative z-10">
                  <div className={`text-3xl font-black mb-3 ${
                    activeStory === story.id ? 'text-white' : 'text-green-600'
                  }`}>
                    {story.year}
                  </div>

                  <h3 className="text-xl font-black mb-2">{story.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    activeStory === story.id ? 'text-green-100' : 'text-gray-600'
                  }`}>
                    {story.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Story Details */}
          {activeStoryData && (
            <div className="bg-gray-50 p-8 border border-gray-200" data-aos="zoom-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-black text-black mb-4">
                    {activeStoryData.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {activeStoryData.details}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 flex items-center justify-center">
                      <FaAward className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-black">{activeStoryData.year}</div>
                      <div className="text-green-600 font-bold text-sm">MILESTONE YEAR</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 p-4 text-center border border-green-200">
                    <img src={sushi1} alt="Traditional Sushi" className="w-24 h-24 mx-auto object-contain" />
                    <div className="text-base font-black text-black mt-3">TRADITIONAL</div>
                  </div>
                  <div className="bg-orange-50 p-4 text-center border border-orange-200">
                    <img src={sushi2} alt="Modern Sushi" className="w-24 h-24 mx-auto object-contain" />
                    <div className="text-base font-black text-black mt-3">INNOVATION</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              MEET OUR <span className="text-green-600">MASTER CHEFS</span>
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              The talented artists behind every unforgettable dish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                data-aos="flip-up"
              >
                <div className="w-20 h-20 bg-green-600 flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.image}
                </div>

                <h3 className="text-xl font-black text-black mb-2">{member.name}</h3>
                <p className="text-green-600 font-bold mb-3 text-sm">{member.role}</p>
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  <FaClock className="text-gray-400 text-sm" />
                  <span className="text-gray-600 font-semibold text-sm">{member.experience}</span>
                </div>

                <div className="bg-green-50 p-3 mb-4 border border-green-200">
                  <p className="text-gray-700 font-bold text-xs">{member.specialty}</p>
                </div>

                <p className="text-gray-600 italic text-xs leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              OUR <span className="text-green-600">VALUES</span>
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 ${value.color} flex items-center justify-center mx-auto mb-3`}>
                  <value.icon className="text-white text-xl" />
                </div>

                <h3 className="text-lg font-black text-black mb-2">{value.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="bg-black p-8 border border-gray-800">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                VISIT US TODAY
              </h3>
              <p className="text-gray-300 text-base font-semibold mb-6">
                Experience the taste of tradition and innovation at SushiKing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2 text-green-300">
                  <FaMapMarkerAlt className="text-sm" />
                  <span className="font-semibold text-sm">123 Sakura Street, Tokyo</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <FaPhone className="text-sm" />
                  <span className="font-semibold text-sm">+81 3-1234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <FaClock className="text-sm" />
                  <span className="font-semibold text-sm">11:00 AM - 10:00 PM</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center text-white">
                  <FaInstagram />
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center text-white">
                  <FaTwitter />
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center text-white">
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

export default AboutUs;