import { SlEnergy } from "react-icons/sl";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import offer from "../assets/offer.png";
import washer from "../assets/washer.webp";
import fridge from "../assets/fridge.jpg";
import mrw7a from "../assets/mrw7a.jpg";
import mfkat from "../assets/mfkat.png";
import khlat from "../assets/khlat.jpg";
import tv from "../assets/tv.jpg";
import ps5 from "../assets/ps5.jpg";
import takef from "../assets/takef.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
export default function shop() {
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
    {
      name: "Moulinex Blendeo Plus Blender, 450 W, 1.5 L, 2 Speeds + Pulse, 1 Grinder, ICE-Crush, Black ",
      price: 170,
      image: khlat,
    },
    {
      name: "ANYUAN Screwdriver Set, 24 in 1 Precision Mini Screwdriver",
      price: 70,
      discount: "25%",
      image: mfkat,
    },
    {
      name: "Tefal VG4130EE Silence Force, Stand Fan, Silence Technology, Remote Control, 8 Hours Timer, 6 Blades, Black",
      price: 180,
      image: mrw7a,
    },
    {
      name: "Fresh Split Air Conditioner Professional Turbo Cooling Only Split Air Conditioner, FUFW12C/IW , 1.5 HP",
      price: 400,
      image: takef,
    },
    {
      name: "PlayStation 5 Digital Console (Slim)",
      price: 280,
      discount: "35%",
      image: ps5,
    },
    {
      name: "Xiaomi A-55-2025TV 4K UHD 2025 Google Assistant TV, 55-Inch Screen ",
      price: 350,
      image: tv,
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
      <div className="container mx-auto flex justify-between border-b-[0.5px] border-gray-400 pb-3">
        <div className="flex ">
          <h2 className="text-black font-serif font-medium mt-6 text-2xl">
            VOLT SUPPLY
          </h2>
          <SlEnergy className="text-amber-600 size-5 mt-6" />
        </div>
        <nav className="flex gap-7 text-black font-sans mt-6 text-lg font-medium mr-27">
          <a href="./home">HOME</a>
          <Link to="../about">ABOUT</Link>
          <Link to="../shop">SHOP</Link>
          <Link to="../contact">CONTACT</Link>
        </nav>
        <div className="flex gap-4 mt-6">
          <div className="relative">
            <Link to="../cart">
              <AiOutlineShoppingCart className="text-black size-6" />
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <IoPersonSharp className="text-black size-6" />
        </div>
      </div>
      <div className="container mx-auto pt-10 text-center">
        <h1 className="text-amber-700 text-5xl font-medium font-mono pb-12">
          SHOP
        </h1>
        <p className="text-start pb-4">Showing all 9 results</p>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-2">
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
      <footer className="container mx-auto flex justify-between mb-5 mt-11 border-t-[0.5px] border-gray-400 pt-5">
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
