import React, { useState } from 'react';
import {Row,Col,Container,InputGroup,Form} from 'react-bootstrap';
import '../../assets/css/PriceBar.css';

const FilterPrice = ({onStartPrice, onEndPrice }) => {
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');

  const handlePriceStartChange = (e) => {
    setPriceStart(e.target.value);
    onStartPrice(e.target.value);
  };

  const handlePriceEndChange = (e) => {
    setPriceEnd(e.target.value);
    onEndPrice(e.target.value);
9  };


  return (
    <>
      {/* Price From:
      <input className="price-bar" type="number" value={priceStart} onChange={handlePriceStartChange} />
      To:
      <input className="price-bar" type="number" value={priceEnd} onChange={handlePriceEndChange} />
      <button onClick={handleFilter}>Filter</button> */}
    
      Price From:
      <input className="price-bar" type="number" value={priceStart} onChange={handlePriceStartChange} />
      To:
      <input className="price-bar" type="number" value={priceEnd} onChange={handlePriceEndChange} />
      

      
    </>
      
  );
};

export default FilterPrice;