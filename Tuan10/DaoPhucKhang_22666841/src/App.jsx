import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialProducts = [
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
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    price: '',
    category: '',
    stock: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (productName) => {
    const updatedProducts = products.filter(
      (product) => product.product_name !== productName
    );
    setProducts(updatedProducts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (
      newProduct.product_name &&
      newProduct.price &&
      newProduct.category &&
      newProduct.stock
    ) {
      setProducts([
        ...products,
        {
          ...newProduct,
          price: parseFloat(newProduct.price),
          stock: parseInt(newProduct.stock)
        }
      ]);
      setNewProduct({
        product_name: '',
        price: '',
        category: '',
        stock: ''
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h2>Product List</h2>
      <Form className="mb-4">
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="product_name"
                value={newProduct.product_name}
                onChange={handleInputChange}
                placeholder="Enter product name"
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Enter price"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                placeholder="Enter category"
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                placeholder="Enter stock"
              />
            </Form.Group>
          </Col>
          <Col md={2} className="d-flex align-items-end">
            <Button variant="primary" onClick={handleAddProduct}>
              Add Product
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Search Product</Form.Label>
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Enter product name to search"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
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
          {filteredProducts.map((product, index) => (
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