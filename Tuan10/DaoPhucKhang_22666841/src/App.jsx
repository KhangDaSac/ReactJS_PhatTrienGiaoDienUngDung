import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    product_name: "Men's T-shirt",
    price: 150000,
    category: "Clothing",
    stock: 100
  },
  {
    product_name: "Women's Jeans",
    price: 350000,
    category: "Clothing",
    stock: 50
  },
  {
    product_name: "Sports Shoes",
    price: 800000,
    category: "Footwear",
    stock: 30
  },
  {
    product_name: "Leather Handbag",
    price: 1200000,
    category: "Accessories",
    stock: 20
  },
  {
    product_name: "Smart Watch",
    price: 2500000,
    category: "Electronics",
    stock: 15
  }
];

const App = () => {
  const handleDelete = (productName) => {
    alert(`Delete ${productName}`);
  };

  return (
    <Container className="mt-5">
      <h2>Product List</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.product_name}</td>
              <td>{product.price.toLocaleString()} VND</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => handleDelete(product.product_name)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;