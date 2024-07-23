import React from "react";
import img from "../assets/img/img1.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row  gap-8 justify-center items-center lg:px-32 px-5">

      <img className="rounded-xl" src={img} alt="img" style={{ objectFit: 'cover', objectPosition: 'center center', width: '600px', height: '400px' }} />
      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">Why Choose Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          quibusdam ducimus voluptas cumque vel, quo dicta sunt facilis ut
          pariatur ullam placeat illo, error quisquam commodi odio culpa quasi
          quaerat?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          mollitia repellendus molestias delectus eligendi, vero nihil, odit
          optio veniam corporis quo unde omnis. Velit eum delectus ullam
          temporibus nisi magni?
        </p>
        <div className=" flex justify-center lg:justify-start">
            <Button title="Learn More"/>
        </div>
      </div>
    </div>
  );
};

export default About;
