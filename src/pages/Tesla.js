import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Tesla() {
  return (
    <div
      style={{
        background:
          "url('https://raw.githubusercontent.com/michdess/tailwind/master/tesla/img/bg.jpg') center center",
      }}
      className="w-full h-screen bg-cover flex flex-col justify-center"
    >
      <NavBar />
      <div className="flex flex-col justify-center items-center -mt-64">
        <p className="text-white text-5xl p-4 text-center">Model S</p>
        <div className="flex flex-col sm:flex-row w-1/2 mb-4">
          <button className="bg-white text-black rounded-full m-2 flex-grow border-4 border-white py-2 w-100 uppercase text-sm hover:text-white hover:bg-black">
            Custom Order
          </button>
          <button className="bg-white text-black rounded-full m-2 flex-grow border-4 border-white py-2 w-100 uppercase text-sm hover:text-white hover:bg-black">
            Existing Inventory
          </button>
        </div>
        <a href="/" className="underline text-white text-lg tracking-wider">
          Visit A Store
        </a>
      </div>
      <Footer/>
    </div>
  );
}
//https://raw.githubusercontent.com/michdess/tailwind/master/tesla/img/bg.jpg
