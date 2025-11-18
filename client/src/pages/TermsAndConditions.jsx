import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBook, FaShoppingCart, FaUser, FaExclamationTriangle, FaBalanceScale } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });
  }, []);

  const sections = [
    {
      icon: FaUser,
      title: 'Account Registration',
      content: [
        'You must be at least 18 years old to create an account',
        'Provide accurate and complete registration information',
        'Maintain the security of your account credentials',
        'Notify us immediately of any unauthorized account use',
        'One account per individual unless explicitly authorized'
      ]
    },
    {
      icon: FaShoppingCart,
      title: 'Ordering and Payments',
      content: [
        'All menu prices are in USD and subject to change',
        'Orders must meet minimum delivery requirements',
        'Payment is processed securely at time of order',
        'We accept major credit cards and digital payment methods',
        'Delivery fees and taxes are calculated during checkout'
      ]
    },
    {
      icon: FaExclamationTriangle,
      title: 'Cancellations and Refunds',
      content: [
        'Orders can be cancelled within 5 minutes of placement',
        'Prepared orders cannot be cancelled or refunded',
        'Refunds processed for incorrect or undelivered orders',
        'Quality concerns must be reported within 2 hours of delivery',
        'Delivery delays due to weather or traffic are not refundable'
      ]
    },
    {
      icon: FaBalanceScale,
      title: 'Intellectual Property',
      content: [
        'All menu content and restaurant branding are protected',
        'Unauthorized use of our trademarks is prohibited',
        'Recipe and menu duplication requires written permission',
        'Customer reviews may be used for promotional purposes',
        'Digital content is licensed for personal use only'
      ]
    }
  ];

  const importantPoints = [
    'We reserve the right to refuse service to anyone',
    'Menu items may contain allergens - inform us of dietary restrictions',
    'Delivery times are estimates and not guaranteed',
    'Alcohol delivery requires valid ID verification',
    'Promotional offers cannot be combined unless specified'
  ];

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-8" data-aos="fade-down">
        <Link
          to="/"
          className="group inline-flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-300 mb-6 border border-gray-200"
        >
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <FaArrowLeft className="text-white text-sm" />
          </div>
          <span className="font-bold text-gray-700">Back to Home</span>
        </Link>
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            <span className="text-black">TERMS &</span>{' '}
            <span className="text-red-600">
              CONDITIONS
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            Rules and guidelines for using our services
          </p>
          <div className="inline-block mt-4 px-4 py-2 bg-red-600 text-white text-sm font-bold">
            Effective Date: December 2013
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gray-50 border border-gray-200 p-6 mb-8" data-aos="fade-up">
        <h2 className="text-2xl font-black text-black mb-4">Welcome to SushiKei</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          These Terms and Conditions govern your use of SushiKei's restaurant services, including online ordering, 
          delivery, and in-restaurant dining. Please read these terms carefully before using our services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By accessing or using our services, you agree to be bound by these terms. If you disagree with any part 
          of the terms, you may not access our services.
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 p-6 mb-8" data-aos="fade-up">
        <div className="flex items-center gap-3 mb-3">
          <FaExclamationTriangle className="text-yellow-600 text-xl" />
          <h3 className="text-lg font-black text-yellow-800">IMPORTANT NOTICE</h3>
        </div>
        <p className="text-yellow-700">
          These terms contain important information about your legal rights, remedies, and obligations. 
          By using our services, you acknowledge that you have read, understood, and agree to be bound 
          by these terms and our Privacy Policy.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="bg-black p-4 border-b border-gray-300">
              <h2 className="text-xl font-black text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                  <section.icon className="text-white text-lg" />
                </div>
                {section.title}
              </h2>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Important Points */}
      <div className="bg-white border border-gray-200 mt-8" data-aos="fade-up">
        <div className="bg-black p-4 border-b border-gray-300">
          <h2 className="text-xl font-black text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
              <FaBook className="text-white text-lg" />
            </div>
            Key Points to Remember
          </h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {importantPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200">
                <div className="w-6 h-6 bg-red-600 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 text-sm font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Liability and Disclaimers */}
      <div className="bg-white border border-gray-200 mt-8" data-aos="fade-up">
        <div className="bg-black p-4 border-b border-gray-300">
          <h2 className="text-xl font-black text-white">Liability and Disclaimers</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-black text-black mb-2">Service Availability</h3>
            <p className="text-gray-700 text-sm">
              Our services are provided "as is" and "as available" without warranties of any kind. 
              We do not guarantee that our services will be uninterrupted or error-free. Delivery 
              services may be affected by factors beyond our control.
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-black mb-2">Limitation of Liability</h3>
            <p className="text-gray-700 text-sm">
              To the fullest extent permitted by law, SushiKei shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use or 
              inability to use our services.
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-black mb-2">Governing Law</h3>
            <p className="text-gray-700 text-sm">
              These terms shall be governed by and construed in accordance with the laws of Japan, 
              without regard to its conflict of law provisions. Any disputes shall be resolved in 
              the courts of Tokyo, Japan.
            </p>
          </div>
        </div>
      </div>

      {/* Updates and Contact */}
      <div className="bg-white border border-gray-200 mt-8" data-aos="fade-up">
        <div className="bg-black p-4 border-b border-gray-300">
          <h2 className="text-xl font-black text-white">Updates and Contact</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-black text-black mb-2">Changes to Terms</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will provide notice of 
                significant changes through our website or email. Continued use of our services 
                after changes constitutes acceptance of the modified terms.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 border border-gray-200">
              <h4 className="font-black text-black mb-2">Contact Information</h4>
              <p className="text-gray-700 text-sm mb-2">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-1 text-sm">
                <p><strong>Email:</strong> legal@sushikei.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-LEGAL</p>
                <p><strong>Address:</strong> 123 Sushi Street, Tokyo, Japan 100-0001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acceptance Box */}
      <div className="bg-red-600 text-white p-6 mt-8 text-center" data-aos="fade-up">
        <h3 className="text-xl font-black mb-2">Need Legal Assistance?</h3>
        <p className="mb-4">Our legal team is available to answer your questions about these terms.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:legal@sushikei.com" 
            className="px-6 py-3 bg-white text-red-600 font-bold hover:bg-gray-100 transition-all duration-300"
          >
            CONTACT LEGAL TEAM
          </a>
          <button 
            onClick={() => window.print()}
            className="px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-all duration-300"
          >
            PRINT TERMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;