import React from "react";
import { Row, Card, Button, Col, Container, CardBody } from "react-bootstrap";
import useBalanceQuery from "../../hooks/useBalanceQuery";
import { Link } from "react-router-dom";

const BalanceBox = () => {
  // Add your code here

  const { balance, loading, error } = useBalanceQuery(1);
  const username = "andz1207";

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const currency = "VND"; // USD, EUR, JPY, GBP, etc.

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <Card className="m-2">
          <Card.Body>
            <Row>
              <Card.Title>
                <h1>mJOB balance</h1>
              </Card.Title>
            </Row>
            <Row>
              <Link to={"/users/" + username}>{username}</Link>
              <Row>
                <Col>
                  <h4
                    style={{
                      color: "black",
                      fontSize: "5em",
                      fontWeight: "100",
                    }}
                  >
                    {balance} {currency}
                  </h4>{" "}
                </Col>
                <Col>
                  <Button
                    onClick={() => alert("not implemented")}
                    variant="primary"
                    style={{ marginBottom: "0" }}
                  >
                    {"💱"}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Link to="/balance/deposit">
            <Button>Deposit</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/balance/withdraw">
            <Button>Withdraw</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Card className="m-2">
          <Card.Title>
            <Link
              to="/balance/transactions"
              style={{ textDecoration: "underline" }}
            >
              Payment History
            </Link>
          </Card.Title>
          <Card.Body>Not yet implemented.</Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default BalanceBox;
