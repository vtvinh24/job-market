import React, { useState } from 'react';
import {Row,Col,Container,InputGroup,Form} from 'react-bootstrap';
import '../../assets/css/PriceBar.css';

const FilterPrice = ({ products, onFilter }) => {
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');

  const handlePriceStartChange = (e) => {
    setPriceStart(e.target.value);
  };

  const handlePriceEndChange = (e) => {
    setPriceEnd(e.target.value);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => {
      const price = product.price;
      return price >= priceStart && price <= priceEnd;
    });
    onFilter(filteredProducts);
  };

  return (
    <>
    <Row>
        <Col md={8} style={{display: 'flex', alignItems: 'center'}}>
      Price From:
      <input className="price-bar" type="number" value={priceStart} onChange={handlePriceStartChange} />
      To:
      <input className="price-bar" type="number" value={priceEnd} onChange={handlePriceEndChange} />
      </Col>
      <Col md={4} style={{display: 'flex', alignItems: 'center'}}>
      <button onClick={handleFilter}>Filter</button>
      </Col>
      </Row>    
    </>
      
  );
};

export default FilterPrice;