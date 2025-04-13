import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">About Kath-Cafe</h2>
          <p className="text-sm leading-relaxed">
            Kath-Cafe is your perfect spot to relax and enjoy delicious coffee and snacks. 
            We bring the perfect blend of flavors crafted with care to brighten your day.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-4">Opening Time & Location</h2>
          <p className="text-sm">
            <strong>Hours:</strong> <br />
            Monday - Friday: 8:00 AM - 9:00 PM <br />
            Saturday - Sunday: 9:00 AM - 10:00 PM
          </p>
          <p className="mt-4 text-sm">
            <strong>Location:</strong> <br />
            Lalipur, Imado
          </p>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-sm mb-4">Follow us on social media for updates and special offers:</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100017052161584" className="text-white hover:text-customBackground">
              Facebook
            </a>
            <a href="https://www.instagram.com/awn_oop/" className="text-white hover:text-customBackground"
            >
              Instagram
            </a>
            <a href="https://x.com/awnnoop7" className="text-white hover:text-customBackground"> Twitter </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © 2025 Kath-Cafe. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;