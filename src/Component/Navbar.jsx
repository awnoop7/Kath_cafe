import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-950 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-white text-2xl font-bold">Kath-Cafe</div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-customBackground">
            Home
          </a>
          <a href="#about" className="text-white hover:text-customBackground">
            About
          </a>
          <a href="#services" className="text-white hover:text-customBackground">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-customBackground">
            Contact
          </a>
        </div>

        <div className="space-x-4 flex">

          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100017052161584" className="hover:text-customBackground">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook" className="w-6 h-6"/> </a>

          {/* Instagram  */}
          <a href="https://www.instagram.com/awn_oop/" className="hover:text-customBackground">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"className="w-6 h-6"/> </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/@Awn_Oop" className="hover:text-customBackground">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube" className="w-6 h-6"/></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
