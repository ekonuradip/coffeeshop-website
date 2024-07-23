import React from "react";
import CafeCard from "../layouts/CafeCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";

const Cafe = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Menu
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <CafeCard img={img1} title="Cappucino" price="Rp. 15.000" />
        <CafeCard img={img2} title="Espresso" price="Rp. 5.000" />
        <CafeCard img={img3} title="Coffee Milk" price="Rp. 15.000" />
        <CafeCard img={img4} title="Americano" price="Rp. 10.000" />
        <CafeCard img={img5} title="Latte" price="Rp. 20.000" />
        <CafeCard img={img6} title="Milk" price="Rp. 10.000" />
      </div>
    </div>
  );
};

export default Cafe;
