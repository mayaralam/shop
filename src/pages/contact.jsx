import { SlEnergy } from "react-icons/sl";
import Navbar from "../components/Navbar";
import { useState } from "react";
import bcg from "../assets/bcg.jpeg";
import Swal from "sweetalert2";
import { useRef } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function contact() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const nameRef = useRef();
  const emailRef = useRef();
  const complainRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Sent!",
      icon: "success",
      draggable: true,
      timer: 1500,
    });

    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (complainRef.current) complainRef.current.value = "";
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bcg})` }}
      >
      <Navbar />
        <div className="container mx-auto pt-48 flex items-center justify-center">
          <h1 className="font-sans text-6xl text-white mb-3 text-center text-shadow-lg/70 animate__animated animate__jackInTheBox ">
            CONTACT US
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 px-4">
        <div>
          <h2 className="text-3xl font-semibold mt-10">
            Got a complaint? Send it here.
          </h2>
          <form className="flex flex-col gap-6 mt-7">
            <input
              ref={nameRef}
              className="input rounded-lg focus:outline-none"
              type="text"
              placeholder="Full Name"
            ></input>
            <input
              ref={emailRef}
              className="input rounded-lg focus:outline-none"
              type="email"
              placeholder="Email"
            ></input>
            <input
              ref={complainRef}
              className="input rounded-lg focus:outline-none h-50 px-3 py-2 text-start placeholder:text-start"
              type="text"
              placeholder="Complain"
            ></input>
            <button
              className="w-[30%] bg-amber-700 text-white px-6 py-2 mt-4 font-bold cursor-pointer font-sans mb-10"
              type="submit"
              onClick={handleClick}
            >
              SEND NOW
            </button>
          </form>
        </div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-medium mt-10 font-serif mb-6">
            TALK TO US
          </h2>
          <div className="flex flex-col gap-7 ">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MdEmail className="size-7" />
                <p className=" text-gray-500">EMAIL</p>
              </div>
              <h2 className="text-2xl font-semibold">something@tyler.com</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
              <FaPhoneAlt  className="size-5"/>
              <p className=" text-gray-500">PHONE NUMBER</p>
              </div>
              <h2 className="text-2xl font-semibold">202-555-0188</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
              <FaLocationDot  className="size-6" />
              <p className=" text-gray-500">ADDRESS</p>
              </div>
              <h2 className="text-2xl font-semibold w-[40%]">
                2727 Ocean Road, Malibu, CA, 90264
              </h2>
            </div>
          </div>
          <div>
            <h3 className="mt-10 font-semibold text-2xl text-amber-700">
              Follow Us:
            </h3>
            <div className="flex gap-2 mt-4">
              <FaFacebook className="size-7" />
              <FaTwitter className="size-7" />
              <FaLinkedin className="size-7" />
              <FaYoutube className="size-7" />
            </div>
          </div>
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
