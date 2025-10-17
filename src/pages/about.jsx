import { SlEnergy } from "react-icons/sl";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import bcg from "../assets/bcg.jpeg";
import our from "../assets/our.jpeg";
import 'animate.css';
export default function about() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bcg})` }}
      >
        <div className="container mx-auto flex justify-between">
          <div className="flex ">
            <h2 className="text-blaclk font-serif font-medium mt-6 text-2xl">
              VOLT SUPPLY
            </h2>
            <SlEnergy className="text-amber-600 size-5 mt-6" />
          </div>
          <nav className="flex gap-7 text-black font-sans mt-6 text-lg font-medium mr-27">
            <a href="./home">HOME</a>
            <a href="./about">ABOUT</a>
            <Link to="../shop">SHOP</Link>
             <Link to="../contact">CONTACT</Link>
          </nav>
          <div className="flex gap-4 mt-6">
            <div className="relative">
              <Link to="../cart">
                <AiOutlineShoppingCart className="text-black size-6" />
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-black text-xs font-bold px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
            <IoPersonSharp className="text-black size-6" />
          </div>
        </div>
        <div className="container mx-auto pt-48 flex items-center justify-center">
          <h1 className="font-sans text-6xl text-white mb-3 text-center text-shadow-lg/70 animate__animated animate__jackInTheBox ">
            WHO ARE WE?
          </h1>
        </div>
      </div>
      <div className="container mx-auto mt-7 grid grid-cols-2 gap-10 mb-12 ">
        <div>
          <img src={our} className="size-100 ml-auto" />
        </div>
        <div>
          <h2 className="font-medium text-2xl mb-2 ">OUR MISSION</h2>
          <p className="font-sans text-gray-500 w-[65%]">
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
      <footer className="container mx-auto flex justify-between mb-5 mt-5 border-t-[0.5px] border-gray-400 pt-5">
        <nav className="flex gap-3 text-sm">
          <a href="./home">HOME</a>
          <Link to="../about">ABOUT</Link>
          <Link to="../shop">SHOP</Link>
         <Link to="../contact">CONTACT</Link>
        </nav>
        <h2 className="font-bold font-serif text-lg flex">
          VOLT SUPPLY STORE <SlEnergy className="text-amber-600 size-5" />
        </h2>
        <p>Copyright © 2025</p>
      </footer>
    </>
  );
}
