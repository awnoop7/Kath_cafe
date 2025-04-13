import React from "react";

const ReusableSection = ({ reverse, title, description, image }) => {
  return (
    <section
      className={`w-full h-auto bg-gray-600 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center p-6`}
    >
  
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center  mb-7 md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold italic leading-relaxed ml-10 ">
          {title}
        </h1>
        <p className="mt-7 text-sm sm:text-base md:text-lg lg:text-xl px-4 md:px-0 ml-10 mr-7 mb-7">
          {description}
        </p>
      </div>

      
      <div className="w-full md:w-1/2 lg:w-1/4 flex items-center justify-center mt-7  md:mt-0 ">
        <img
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-3xl bg-slate-950 p-4"
          src={image}
          alt={title}
        />
      </div>
    </section>
  );
};

const Page = () => {
  const sections = [
    {
      title: "Crafting & Delivering Excellence",
      description:
        "At Kath-Cafe, we take pride in crafting every cup with passion and precision. Our mission is to deliver an unmatched coffee experience, blending the finest beans and flavors to bring joy to your every sip.",
      image: "/Img/coffee-break.jpg",
      reverse: false,
    },
    {
      title: "Experience the Best",
      description:
        "Discover the perfect blend of flavors crafted just for you. Your satisfaction is our priority.",
      image: "/Img/kath_cafe.png",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-600">
      {sections.map((section, index) => (
        <ReusableSection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
};

export default Page;