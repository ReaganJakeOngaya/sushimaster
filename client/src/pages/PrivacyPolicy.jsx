import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaCookie, FaLock, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });
  }, []);

  const sections = [
    {
      icon: FaUser,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number) when you create an account or place an order',
        'Payment information processed securely through our payment partners',
        'Delivery address and preferences for order fulfillment',
        'Device and usage information to improve our services'
      ]
    },
    {
      icon: FaCookie,
      title: 'How We Use Your Information',
      content: [
        'Process and deliver your food orders',
        'Communicate order status and updates',
        'Improve our menu and services based on your preferences',
        'Send promotional offers (with your consent)',
        'Ensure food safety and quality standards'
      ]
    },
    {
      icon: FaLock,
      title: 'Data Security',
      content: [
        'Encryption of sensitive data during transmission',
        'Secure storage of personal information',
        'Regular security audits and updates',
        'Limited access to personal data for authorized personnel only',
        'Compliance with food safety and data protection regulations'
      ]
    },
    {
      icon: FaUser,
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request correction of inaccurate data',
        'Delete your account and associated data',
        'Opt-out of marketing communications',
        'Export your data in a portable format'
      ]
    },
    {
      icon: FaEnvelope,
      title: 'Contact Information',
      content: [
        'For privacy-related questions: privacy@sushikei.com',
        'Data Protection Officer: dpo@sushikei.com',
        'Phone: +1 (555) 123-PRIVACY',
        'Address: 123 Sushi Street, Tokyo, Japan 100-0001'
      ]
    }
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
            <span className="text-black">PRIVACY</span>{' '}
            <span className="text-red-600">
              POLICY
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            How we protect and handle your personal information
          </p>
          <div className="inline-block mt-4 px-4 py-2 bg-red-600 text-white text-sm font-bold">
            Last Updated: December 2023
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gray-50 border border-gray-200 p-6 mb-8" data-aos="fade-up">
        <h2 className="text-2xl font-black text-black mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At SushiKei, we are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
          restaurant services, website, and mobile application.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By using our services, you agree to the collection and use of information in accordance with this policy. 
          We regularly review and update our privacy practices to ensure compliance with applicable laws and regulations.
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

      {/* Additional Information */}
      <div className="bg-white border border-gray-200 mt-8" data-aos="fade-up">
        <div className="bg-black p-4 border-b border-gray-300">
          <h2 className="text-xl font-black text-white">Additional Information</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-black text-black mb-2">Data Retention</h3>
            <p className="text-gray-700">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this policy, unless a longer retention period is required or permitted by law. 
              Order records are typically maintained for 7 years for tax and regulatory purposes.
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-black mb-2">Third-Party Services</h3>
            <p className="text-gray-700">
              We may employ third-party companies and individuals to facilitate our service, provide the 
              service on our behalf, or assist us in analyzing how our service is used. These third parties 
              have access to your personal information only to perform these tasks and are obligated not to 
              disclose or use it for any other purpose.
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-black mb-2">Policy Updates</h3>
            <p className="text-gray-700">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
              advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Box */}
      <div className="bg-red-600 text-white p-6 mt-8 text-center" data-aos="fade-up">
        <h3 className="text-xl font-black mb-2">Questions About Our Privacy Policy?</h3>
        <p className="mb-4">We're here to help you understand how we protect your information.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:privacy@sushikei.com" 
            className="px-6 py-3 bg-white text-red-600 font-bold hover:bg-gray-100 transition-all duration-300"
          >
            CONTACT PRIVACY TEAM
          </a>
          <a 
            href="tel:+15551237777" 
            className="px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-all duration-300"
          >
            CALL SUPPORT
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;