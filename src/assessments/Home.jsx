import React from "react";
import Card from "./Card.png";
import Time from "./Time.png"
import Name from "./Name.png"
import Menu from "./Menu.png";

const Home = () => {
  return (
    <div className="container mx-auto sm:w-full md:w-full lg:w-full xl:w-full">
      <div className="flex justify-center items-center mx-auto  h-screen sm:w-full  md:w-full lg:w-full xl:w-6/12" >
        <div className="card p-6 flex flex-wrap bg-customColor border-2 border-black justify-center rounded-3xl shadow-lg w-4/6 sm:w-4/5 sm:justify-center md:w-80 md:justify-center lg:w-3/5 lg:justify-center xl:w-full">
          <div className="flex flex-wrap w-3/5 justify-center items-center sm:w-auto md:w-96">
            <img
              className="rounded-3xl object-cover inline-block w-full sm:w-64 sm:h-64  md:w-auto lg:w-auto xl:w-96"
              src={Card}
              alt="Not found"
            />
          </div>

          <div className="mt-5 ml-8 flex flex-col flex-wrap w-full md:w-auto">
            <div className="flex flex-wrap  text-center shadow-lg w-full justify-center sm:w-full sm:justify-center md:w-32 md:justify-center lg:w-32 lg:justify-center xl:w-32 xl:justify-center bg-textbg p-2 rounded-lg">
              <h1 className="font-bold text-afterEffect">
                After Effects
              </h1>
            </div>
            <div className="mt-3 w-full md:w-56">
              <h1 className="font-bold leading-8 text-colorText text-3xl text-justify">
                Animation in UI Design (Part 2)
              </h1>
            </div>
            <div className="flex flex-wrap mt-2 mr-4">
              <div className="mt-3 m-2 flex items-center">
                <img
                  className="inline-block mr-1"
                  src={Name}
                  width={25}
                  height={20}
                  alt="Not found"
                />
                <p className="inline-block text-iconText font-semibold">Vishal Pulikottil</p>
              </div>
              <div className="mt-3 m-2 flex items-center">
                <img
                  className="inline-block mr-1"
                  src={Time}
                  width={20}
                  height={20}
                  alt="Not found"
                />
                <p className="inline-block text-iconText font-semibold">15 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
