import React from "react";

const Page = () => {
  const coffeeTypes = [
    { name: "Cappuccino", image: "Img/cappuccino-8519099_1280.png" },
    { name: "Espresso", image: "/Img/espresso.jpg" },
    { name: "Latte", image: "Img/latte-8766985_1280.jpg" },
    { name: "Mocha", image: "/Img/mocha.jpg" },
    { name: "Macchiato", image: "Img/Macchiato.jpg" },
    { name: "Our Special", image: "Img/famous_coffe.jpg" },
    { name: "Bakery", image: "/Img/cake.jpg" },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-600">
      {/* Hero Section */}
      <div className="min-h-[80vh] relative p-5 flex flex-col md:flex-row mt-10">
        <section className="w-full md:w-6/12 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="italic text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
            Change Your <br /> Energy <br /> With Us
          </h1>
          <p className="mt-4 text-white text-sm sm:text-base md:text-lg lg:text-xl">
            Brewing Comfort, Connection, and Care in Every Cup
          </p>
          <button className="bg-slate-950 font-semibold text-white text-sm sm:text-base md:h-10 w-40 rounded-lg p-2 mt-6 hover:text-black hover:bg-white transition-all duration-300">
            Get Coffee
          </button>
        </section>
        <section className="w-full md:w-6/12 flex items-center justify-center mt-6 md:mt-0">
          <img
            className="w-3/4 md:w-9/12 sm:w-2/4 rounded-full"
            src="/Img/logo-kath-cafe.webp"
            alt="Kath Cafe Logo"
          />
        </section>
      </div>

      {/* Coffee Types Section */}
      <section className="p-4 sm:p-8 bg-gray-600">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-6">
          Our Coffee Picks
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {coffeeTypes.map((coffee, index) => (
            <div
              key={index}
              className="w-40 sm:w-48 lg:w-56 bg-white bg-opacity-10 backdrop-blur-md border border-white/10 shadow-lg rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl duration-300 group"
            >
              <div className="w-full h-28 sm:h-36 overflow-hidden">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-white text-sm sm:text-base font-medium tracking-wide group-hover:text-yellow-300 transition-colors">
                  {coffee.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
