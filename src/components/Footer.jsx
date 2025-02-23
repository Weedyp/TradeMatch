import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import {images} from '../assets/assets'
export const Footer=() =>{
  return (
    <footer className="bg-[#0d1b2a] text-white py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Subscription */}
        <div>
          <div className="flex items-center space-x-2">
            <div className=" p-2 rounded-full">
              <img src={images.image} alt="Logo" className="w-10 h-10 bg-[#011A30] object-cover " />
            </div>
          </div>
          <p className="text-gray-400 mt-4">
            Navigating the world of prop trading firms can be overwhelming.
          </p>
          <div className="mt-4 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-full bg-gray-800 text-white focus:outline-none"
            />
            <button className="absolute px-3 right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
              ➜
            </button>
          </div>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>Top 10</li>
            <li>Compare Firm</li>
            <li>Match Test</li>
          </ul>
        </div>
        
        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>Contact</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        {/* Business */}
        <div>
          <h3 className="text-lg font-semibold">Business</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>Success</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>Copyright &copy; 2025 Prop Trade Match. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
