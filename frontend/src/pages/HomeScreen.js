import React from "react";
import { Products } from "../Products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
function HomeScreen() {
  return (
    <div>
      <h1>Products</h1>
      <Row>
        {Products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
