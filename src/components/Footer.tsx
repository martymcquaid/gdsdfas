import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const customerService = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Size Guides', href: '/size-guides' }
  ];
  
  const aboutUs = [
    { name: 'About Pet Stuff', href: '/about' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Sustainability', href: '/sustainability' }
  ];
  
  const petResources = [
    { name: 'Pet Care Guides', href: '/pet-care' },
    { name: 'Blog', href: '/blog' },
    { name: 'Training Tips', href: '/training-tips' },
    { name: 'Nutrition Advice', href: '/nutrition' },
    { name: 'Pet Health', href: '/pet-health' }
  ];
  
  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' }
  ];
  
  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'American Express', icon: '💳' },
    { name: 'PayPal', icon: '💳' },
    { name: 'Apple Pay', icon: '🍎' },
    { name: 'Google Pay', icon: '🔵' }
  ];
  
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/petstuff', icon: '📘' },
    { name: 'Instagram', href: 'https://instagram.com/petstuff', icon: '📷' },
    { name: 'Twitter', href: 'https://twitter.com/petstuff', icon: '🐦' },
    { name: 'YouTube', href: 'https://youtube.com/petstuff', icon: '📺' },
    { name: 'Pinterest', href: 'https://pinterest.com/petstuff', icon: '📌' }
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-teal-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Join the Pet Stuff Club!</h3>
              <p className="text-teal-100">Get updates, deals, and pet tips delivered to your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-teal-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🐾</span>
              </div>
              <span className="text-2xl font-bold">Pet Stuff</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for everything your pet needs. Quality products, trusted by pet owners nationwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <ul className="space-y-2">
              {aboutUs.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Pet Resources</h4>
            <ul className="space-y-2">
              {petResources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <span className="text-teal-600">📍</span>
                <div>
                  <p>123 Pet Street</p>
                  <p>Animal City, AC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">📞</span>
                <p>1-800-PET-STUFF</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✉️</span>
                <p>support@petstuff.com</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">🕐</span>
                <div>
                  <p>Mon-Fri: 9AM-8PM EST</p>
                  <p>Sat-Sun: 10AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4">
              {paymentMethods.map((method) => (
                <div key={method.name} className="flex items-center gap-1 text-gray-400">
                  <span>{method.icon}</span>
                  <span className="text-sm">{method.name}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-400 text-sm">
            <p>&copy; {currentYear} Pet Stuff. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;