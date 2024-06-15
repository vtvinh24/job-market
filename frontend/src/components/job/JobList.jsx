import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from '../../components/HomeNavbar.jsx';
import HelpCenter from '../../components/HelpCenter.jsx';
import Footer from '../../components/HomeFooter.jsx';
import SearchBar from '../../components/job/SearchBar.jsx';
import FilterPrice from '../../components/job/FilterPrice.jsx';
import  useJobList  from "../../hooks/useJobList";
import  useJobListbyview  from "../../hooks/useJobListbyView.js";
import  useJobListbytime  from "../../hooks/useJobListbyTime.js";

function JobList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('default');
  
    const { contents: defaultContents, loading: defaultLoading, error: defaultError } = useJobList();
    const { contents: viewContents, loading: viewLoading, error: viewError } = useJobListbyview();
    const { contents: timeContents, loading: timeLoading, error: timeError } = useJobListbytime();
  
    let contents = defaultContents;
    let loading = defaultLoading;
    let error = defaultError;
  
    switch (filter) {
      case 'relevance':
        contents = viewContents;
        loading = viewLoading;
        error = viewError;
        break;
      case 'recent':
        contents = timeContents;
        loading = timeLoading;
        error = timeError;
        break;
      default:
        contents = defaultContents;
        loading = defaultLoading;
        error = defaultError;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const filteredContents = contents.filter(content =>
      content.job_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(contents);
    console.log(searchQuery);
    console.log(filteredContents);
    
    return (
      <Container>
        <Row style={{alignItems: 'center'}}>
          <Col md={3}>
            <SearchBar onSearch={setSearchQuery} />
          </Col>
          <Col md={5}>
            <FilterPrice />
          </Col>
          <Col md={4}>
            <Form style={{width: '50%'}}>
            <Form.Group controlId="filterDropdown">
              <Form.Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="default">Filter</option>
                <option value="relevance">Relevance</option>
                <option value="recent">Recent</option>
              </Form.Select>
            </Form.Group>
          </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              {filteredContents.map(content => (
                <Card key={content.job_id}>
                  <Card.Body>
                    <Card.Title>{content.job_title}</Card.Title>
                    <Card.Text>{content.job_description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default JobList