import React from "react";
import { Row, Card, Button, Col, Container } from "react-bootstrap";

const BalanceBox = () => {
  // Add your code here

  const balance = 123456789;
  const currency = "VND"; // USD, EUR, JPY, GBP, etc.

  return (
    <Container>
      <Row>
        <Card className="m-3">
          <Card.Body>
            <Row>
              <Card.Title>
                <h1>mJOB balance</h1>
              </Card.Title>
            </Row>
            <Row>
              <Col>
                <Card.Text>
                  <h2>
                    {balance} {currency}
                  </h2>
                </Card.Text>
              </Col>
              <Col>
                <Button variant="primary">{"<>"}</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Button>Deposit</Button>
        </Col>
        <Col>
          <Button>Withdraw</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BalanceBox;
