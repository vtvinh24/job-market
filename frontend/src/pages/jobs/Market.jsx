// Marketplace.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from '../../components/HomeNavbar.jsx';
import HelpCenter from '../../components/HelpCenter.jsx';
import Footer from '../../components/HomeFooter.jsx';
import SearchBar from '../../components/job/SearchBar.jsx';
import FilterPrice from '../../components/job/FilterPrice.jsx';

// import './Marketplace.css'; // Custom styles (optional)

function JobMarket() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');

  // const items = [
  //   'Apple',
  //   'Banana',
  //   'Orange',
  //   'Mango',
  //   'Pineapple',
  //   'Strawberry'
  // ];

  // const filteredItems = items.filter(item =>
  //   item.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>

      <HomeNavbar />

      

      <Container className="mt-3">
        <Row className="align-items-center mb-3">
          <Col md={3}>
            <SearchBar onSearch={setSearchQuery} /> 
          </Col>
          <Col md={3}>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Choose Place
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={6}>
            <FilterPrice onStartPrice={setPriceStart} onEndPrice={setPriceEnd}/>
          </Col>
        </Row>
        {/* <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col md={4} style={{display: 'flex', alignItems: 'center'}}> <SearchBar onSearch={setSearchQuery} />   </Col>     
          <Col md><FilterPrice onStartPrice={setPriceStart} onEndPrice={setPriceEnd}/></Col>
        </Row>
        <h1>{priceStart}</h1>
        <h1>{priceEnd}</h1> */}
        {/*<Row style={{display: 'flex', alignItems: 'center'}}>
        
           <Col><SearchBar/></Col>
          <Col><FilterPrice/></Col> 
        </Row>*/}
        {/* <div>
          <h1>Search Bar Example</h1>
          <SearchBar onSearch={setSearchQuery} />
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div> */}
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>     
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row> 
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row> 
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div iv className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>     
      </Container>
      <HelpCenter />

      <Footer />
    </>
  );
}

export default JobMarket;
