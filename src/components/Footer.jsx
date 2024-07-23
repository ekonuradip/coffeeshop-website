import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className=" flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Coffee Morning</h1>
          <p className=" text-sm"> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            provident perspiciatis eos sint, libero, iure exercitationem,
            temporibus ipsum repellat veritatis assumenda autem quia nam quas
            eveniet asperiores magni cumque perferendis.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Cafe
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Coffee
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Cafe
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Coffee
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div >
          <h1 className=" font-medium text-xl pb-4 pt-5">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">ekonuradip@gmail.com</a>
            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">085335700642</a>
            
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Eko Nur Adi P </span>
            All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
