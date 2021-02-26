import React from "react";
import { Card } from "react-bootstrap";
function Product({ product }) {
  console.log(product._id);
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {product.numReviews <= 0
              ? "not rated"
              : `Rated: ${product.rating} by ${product.numReviews} buyers`}
          </div>
        </Card.Text>
        <Card.Text>Price:€{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
