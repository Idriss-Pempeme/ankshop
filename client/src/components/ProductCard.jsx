import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return product && (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-500/20 rounded-md p-4 bg-white w-full cursor-pointer hover:shadow-md transition"
    >
      <div className="flex items-center justify-center mb-3">
        <img
          className="group-hover:scale-105 transition-transform max-w-[120px] max-h-[120px] object-contain"
          src={product.image[0]}
          alt={product.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate">{product.name}</p>
        <div className="flex items-center gap-1 my-1">
          {Array(5).fill('').map((_, i) => (
            <img
              key={i}
              className="w-4"
              src={i < 4 ? assets.star : assets.star_dull}
              alt=""
            />
          ))}
          <p>(4)</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="text-lg font-medium text-primary">
            {currency}{product.offerPrice}{" "}
            <span className="text-gray-500/60 text-sm line-through">
              {currency}{product.price}
            </span>
          </p>
          <div onClick={(e) => e.stopPropagation()} className="text-primary">
            {!cartItems[product._id] ? (
              <button
                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 px-3 h-[34px] rounded"
                onClick={() => addToCart(product._id)}
              >
                <img src={assets.shopping_bag} alt="cart_icon" className="w-5" />
                Add
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3 h-[34px] bg-primary/25 rounded select-none">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer text-md"
                >
                  -
                </button>
                <span>{cartItems[product._id]}</span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="cursor-pointer text-md"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
