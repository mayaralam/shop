import { SlEnergy } from "react-icons/sl";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "../components/navbar";
export default function shop() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [products, setProducts] = useState([
    {
      name: "Versatile combination pliers for everyday electrical and mechanical tasks",
      price: 200,
      image: photo1,
    },
    {
      name: "Upgrade Your Home Lifestyle with Our Exclusive Offers",
      price: 400,
      discount: "30%",
      image: photo2,
    },
    {
      name: "Reliable 8-meter tape measure with ergonomic grip",
      price: 170,
      image: photo3,
    },
    {
      name: "Powerful 2-pound sledgehammer with ergonomic handle",
      price: 150,
      image: photo4,
    },
    {
      name: "Precision-crafted wrench set with ratcheting action—ideal for automotive and mechanical work",
      price: 350,
      discount: "25%",
      image: photo9,
    },
    {
      name: "Durable DEWALT hammer with curved claw and non-slip handle",
      price: 180,
      image: photo6,
    },
    {
      name: "Flathead screwdriver with ergonomic transparent handle—ideal for electrical and mechanical tasks",
      price: 120,
      image: photo8,
    },
    {
      name: "Professional-grade insulated pliers for electrical tasks—grip, cut, and shape with confidence",
      price: 300,
      discount: "35%",
      image: photo7,
    },
    {
      name: "End cutting pliers with ergonomic grip—perfect for flush cutting wires, nails, and fasteners",
      price: 220,
      image: photo5,
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
      <div className="container mx-auto pt-10 text-center px-4">
        <h1 className="text-amber-700 text-5xl font-medium font-mono pb-12">
          SHOP
        </h1>
        <p className="text-start pb-4">Showing all 9 results</p>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-2 px-4">
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
