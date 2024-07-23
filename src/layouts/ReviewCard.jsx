import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          sequi cumque officiis et exercitationem ullam cum, debitis sed fugiat
          error id unde quaerat excepturi est? Rerum eveniet illum recusandae
          magnam?
        </p>
      </div>
      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-1/4" src={props.img} alt="img" style={{ objectFit: 'cover', objectPosition: 'center center', width: '100px', height: '100px' }} />
        <h3 className=" font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
