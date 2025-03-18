// write product card here
import React from 'react';
import ViewProductButton from '../components/button';


const ProductCard = () => {
  const productImage = 'https://static.foxdealer.com/686/2021/03/2019_Dodge_Challenger_-_Exterior_Side_View.jpg';
  const productName = 'dodge';
  const productPrice = '₹80 lakhs';

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', textAlign: 'center', borderRadius: '8px', width: '250px' }}>
      <img src={productImage} alt="Product" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{productName}</h3>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default ProductCard;
