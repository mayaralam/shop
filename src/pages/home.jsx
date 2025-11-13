import header from "../assets/header.png";
import { SlEnergy } from "react-icons/sl";
import offer from "../assets/offer.jpg";
import pic1 from "../assets/pic1.jpg";
import pic3 from "../assets/pic3.jpg";
import logo from "../assets/logo.png";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "../components/navbar";
export default function home() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [products, setProducts] = useState([
    {
      name: "Amartisan 4-Piece Magnetic Screwdrivers Set",
      price: 300,
      image: pic1,
    },
    {
      name: "Upgrade Your Home Lifestyle with Our Exclusive Offers",
      price: 500,
      discount: "30%",
      image: offer,
    },
    {
      name: "Hi-Spec Electric Screwdriver 27pc 3.6V USB Small Power Screwdriver Set",
      price: 200,
      image: pic3,
    },
  ]);
  const addtocart = (productIndex) => {
    console.log(productIndex);
    let selectedProduct = products[productIndex];
    console.log(selectedProduct);

    let newCart = [...cart];
    console.log(newCart);

    const existingProduct = newCart.find((item) => {
      return item.name === selectedProduct.name;
    });
    console.log(existingProduct);

    if (existingProduct) {
      existingProduct.qty += 1;
      console.log("qty ++");
      setCart(newCart);
      toast.success("Added to cart!");
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      newCart.push({ ...selectedProduct, qty: 1 });
      console.log("added to cart");
      setCart(newCart);
      toast.success("Added to cart!");
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  return (
    <>
      <Toaster />
      <Navbar />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container text-center mx-auto pt-60">
          <h1 className="font-sans text-4xl text-white mb-3 animate__animated animate__zoomIn">
            POWER YOUR PROJECTS
          </h1>
          <h3 className="font-medium font-sans text-xl text-gray-200 mb-2.5 animate__animated animate__zoomIn">
            ELECTRICAL TOOLS & APPLIANCES
          </h3>
          <button
            onClick={() => navigate("/shop")}
            className="bg-blue-700 text-white px-6 py-2 mt-4 hover:bg-amber-800 font-bold cursor-pointer animate__animated animate__zoomIn"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-2 my-12 animate__animated animate__fadeInDown px-4">
        {products.map((product, index) => {
          return (
            <div
              className="card bg-base-100 w-96 shadow-sm mt-3"
              key={index}
              product={product}
              index={index}
              products={products}
            >
              <figure>
                <img
                  src={product.image}
                  alt="product_image"
                  className="h-64 w-full object-contain mb-2 bg-white"
                />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-200 ">
                <h2 className="card-title text-black">{product.name}</h2>
                <p className="font-bold text-black text-lg">
                  Daily rent: {product.price} EGP
                </p>
                {product.discount && (
                  <p className="text-red-700 font-bold text-[17px]">
                    Discount: {product.discount}
                  </p>
                )}
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary hover:bg-red-700"
                    onClick={() => {
                      addtocart(index);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container mx-auto px-4 flex items-center justify-center mb-5">
        <img
          src={logo}
          className="mt-5 max-h-[100dvh] rounded-3xl"
        />
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
