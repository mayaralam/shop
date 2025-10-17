import { useState } from "react";
import { SlEnergy } from "react-icons/sl";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { RiLayoutTopLine } from "react-icons/ri";
export default function CartPage({ product, index, products }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();
  return (
    <>
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
      <div className="container mx-auto mt-20">
        <h1 className="text-amber-700 text-4xl font-medium font-mono pb-12 border-b-2 border-black">
          CART
        </h1>
        <div className="bg-gray-100 py-6">
          <div className=" flex flex-col gap-4 ml-12 pt-4 w-full max-w-6xl mx-auto ">
            {cart.length === 0 ? (
              <div className="flex gap-3">
                <RiLayoutTopLine className="size-6 text-amber-700" />
                <p className="text-[17px]">Your cart is currently empty.</p>
              </div>
            ) : (
              cart.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row justify-between items-center"
                >
                  <img
                    className="object-contain size-30"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="col-6 col-md-9 flex flex-column gap-3 flex-md-row justify-between items-center">
                    <p className="m-0 fw-bold">{product.name}</p>
                    <div className="item-qty flex items-center gap-3">
                      <button
                        className="fw-bold text-danger bg-transparent border-0 cursor-pointer"
                        onClick={() => {
                          const newCart = [...cart];
                          if (newCart[index].qty > 1) {
                            newCart[index].qty -= 1;
                            setCart(newCart);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify(newCart)
                            );
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"
                          />
                        </svg>
                      </button>
                      <h5 className="text-grey m-0">{product.qty}</h5>
                      <button
                        className="fw-bold text-primary bg-transparent border-0 cursor-pointer"
                        onClick={() => {
                          const newCart = [...cart];
                          newCart[index].qty += 1;
                          setCart(newCart);
                          localStorage.setItem("cart", JSON.stringify(newCart));
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="col-12 col-md-3 flex justify-md-between justify-center gap-4 gap-md-0 items-center">
                      <div className="item-price flex items-center">
                        <h5 className="text-grey m-0">
                          {product.price * product.qty} $
                        </h5>
                      </div>
                      <button
                        className="text-danger bg-transparent border-0 cursor-pointer"
                        onClick={() => {
                          const newCart = cart.filter((_, i) => i !== index);
                          setCart(newCart);
                          localStorage.setItem("cart", JSON.stringify(newCart));
                          toast.success(`${product.name} removed from cart`);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <button
          onClick={() => navigate("/shop")}
          className="bg-amber-800 text-white px-6 py-2 mt-9 font-medium cursor-pointer"
        >
          RETURN TO SHOP
        </button>
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
