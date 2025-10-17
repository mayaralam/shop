import header from "../assets/header.png";
import { SlEnergy } from "react-icons/sl";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import offer from "../assets/offer.png";
import washer from "../assets/washer.webp";
import fridge from "../assets/fridge.jpg";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
export default function home() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [products, setProducts] = useState([
    {
      name: "Haier 4 doors refrigerator (bottom freezer) - No frost ",
      price: 300,
      image: fridge,
    },
    {
      name: "Upgrade Your Home Lifestyle with Our Exclusive Offers",
      price: 800,
      discount: "30%",
      image: offer,
    },
    {
      name: "Midea - Washing Machine - Inverter - Steam -1400Rpm ",
      price: 200,
      image: washer,
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
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto flex justify-between">
          <div className="flex ">
            <h2 className="text-white font-serif font-medium mt-6 text-2xl">
              VOLT SUPPLY
            </h2>
            <SlEnergy className="text-amber-600 size-5 mt-6" />
          </div>
          <nav className="flex gap-7 text-white font-sans mt-6 text-lg font-medium ">
            <a href="./home">HOME</a>
            <Link to="../about">ABOUT</Link>
            <Link to="../shop">SHOP</Link>
            <Link to="../contact">CONTACT</Link>
          </nav>
          <div className="flex gap-4 mt-6">
            <div className="relative">
              <Link to="../cart">
                <AiOutlineShoppingCart className="text-white size-6" />
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
            <IoPersonSharp className="text-white size-6" />
          </div>
        </div>
        <div className="container text-center mx-auto pt-48">
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
      <div className="container mx-auto grid grid-cols-3 gap-2 my-12 animate__animated animate__fadeInDown">
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
                  className="h-64 w-full object-contain mb-2"
                />
              </figure>
              <div className="card-body bg-gray-100 ">
                <h2 className="card-title">{product.name}</h2>
                <p className="font-bold text-black text-lg">{product.price}$</p>
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
      <div
        className="container mx-auto h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <footer className="container mx-auto flex justify-between mb-5 mt-5">
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
