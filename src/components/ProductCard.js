import React from "react";
import { BiListPlus } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { useProducts } from './../contexts/ProductProvider';

const ProductCard = ({ product }) => {
  const { dispatch, state: { cart, wishlist } } = useProducts();
  const addedToCart = cart.find(pd => pd._id === product._id);
  const addedToWishlist = wishlist.find(pd => pd._id === product._id);
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li key={feature} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {
          !addedToCart &&
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Add to cart
          </button>
        }

        {
          addedToCart &&
          <button
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}
            title='Remove from cart'
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          >
            Remove from Cart
          </button>
        }

        {
          !addedToWishlist &&
          <button
            onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: product })}
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
        }

        {
          addedToWishlist &&
          <button
            onClick={() => dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })}
            title='Remove from wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
        }

      </div>
    </div>
  );
};

export default ProductCard;
