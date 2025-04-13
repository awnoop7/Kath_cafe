import React from "react";

const LastPage = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col md:flex-row p-6 md:p-9">
      {/* First Section */}
      <div className="h-auto md:h-[20vh] w-full md:w-2/4 flex justify-center items-center p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl text-center">
          Only This Month: <br />
          <span className="text-3xl md:text-5xl italic text-red-500">
            Coffee With Breakfast
          </span>{" "}
          <br />
          From $15
        </h1>
      </div>

      {/* Second Section */}
      <div className="h-auto md:h-[20vh] w-full md:w-2/4 flex justify-center items-center mt-6 md:mt-40 p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl text-center">
          Only This Week: <br />
          Get a{" "}
          <span className="text-3xl md:text-5xl italic text-red-500">
            Discount Card
          </span>{" "}
          <br />
          For{" "}
          <span className="text-3xl md:text-5xl italic text-red-500">
            Free
          </span>
        </h1>
      </div>
    </section>
  );
};

export default LastPage;