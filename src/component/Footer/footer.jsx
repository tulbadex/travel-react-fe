import React from 'react';

import tripmaLogo from '../../assets/logo.svg';
import FaTwitter from '../../assets/img/icon/twitter.svg';
import FaInstagram from '../../assets/img/icon/instagram.svg';
import FaFacebookF from '../../assets/img/icon/facebook.svg';
import appStore from '../../assets/img/icon/app store.svg';
import googlePlay from '../../assets/img/icon/google play.svg';

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8 text-left">
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6">
            <img src={tripmaLogo} alt="Tripma" className="h-8 mb-4" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6">
            <h4 className="font-bold text-gray-600 text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-600">About Tripma</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">How it works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Forum</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6">
            <h4 className="font-bold text-gray-600 text-lg mb-4">Partner with us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Partnership programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Affiliate program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Connectivity partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Promotions and events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Loyalty program</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6">
            <h4 className="font-bold text-gray-600 text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Terms of service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Trust and safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Accessibility</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6">
            <h4 className="font-bold text-gray-600 text-lg mb-4">Get the app</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Tripma for Android</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Tripma for iOS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-600">Mobile site</a></li>
            </ul>
            <ul className="mt-5 space-y-2">
              <li className="">
                <a href="#"><img src={appStore} alt="App Store" className="h-10" /></a>
              </li>
              <li className="">
                <a href="#"><img src={googlePlay} alt="Google Play" className="h-10" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200 max-w-[1360px] w-full">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <img src={FaTwitter} alt="Twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <img src={FaInstagram} alt="Instagram" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <img src={FaFacebookF} alt="Facebook" />
            </a>
          </div>
          <p className="text-gray-400 text-lg">&copy; 2020 Tripma incorporated</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;