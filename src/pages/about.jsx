import { SlEnergy } from "react-icons/sl";
import { useState } from "react";
import bcg from "../assets/bcg.jpeg";
import our from "../assets/our.jpeg";
import 'animate.css';
import Navbar from "../components/navbar";
export default function about() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
    <Navbar />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bcg})` }}
      >
        <div className="container mx-auto pt-48 flex items-center justify-center">
          <h1 className="font-sans text-6xl text-white mb-3 text-center text-shadow-lg/70 animate__animated animate__jackInTheBox ">
            WHO ARE WE?
          </h1>
        </div>
      </div>
      <div className="container mx-auto mt-7 grid md:grid-cols-2 grid-cols-1 gap-10 mb-12 px-4 ">
        <div>
          <img src={our} className="size-100 ml-auto" />
        </div>
        <div>
          <h2 className="font-medium text-2xl mb-2 ">OUR MISSION</h2>
          <p className="font-sans text-gray-500 dark:text-gray-400 w-[65%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
            dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
     <footer className="container mx-auto flex justify-between mb-5 mt-11 border-t-[0.5px] border-gray-400 pt-5 px-4">
        <h2 className="font-bold font-serif text-lg flex gap-1">
          VOLT SUPPLY STORE 
          <SlEnergy className="text-amber-600 size-5" />
        </h2>
        <p>Copyright © 2025</p>
      </footer>
    </>
  );
}
