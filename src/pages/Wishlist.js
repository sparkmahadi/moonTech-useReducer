import React from 'react';
import { useProducts } from './../contexts/ProductProvider';
import ProductCard from './../components/ProductCard';

const Wishlist = () => {
    const {state: {wishlist, loading, error}} = useProducts();
  
    let content;
  
    if(loading){
      content = <p>Loading...</p>
    }
  
    if(error){
      content = <p>Something went wrong...</p>
    }
  
    if(!loading && !error && !wishlist.length){
      content = <p>Nothing to show. Wishlist is empty.</p>
    }
  
    if(!loading && !error && wishlist.length){
      content = wishlist.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    
  
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {content}
      </div>
    );
};

export default Wishlist;