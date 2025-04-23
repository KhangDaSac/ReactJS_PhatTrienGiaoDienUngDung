import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './components/ProductItem';

const initialProducts = [
  {
    product_name: "Áo thun nam",
    price: 150000,
    category: "Thời trang",
    stock: 100
  },
  {
    product_name: "Quần jeans nữ",
    price: 350000,
    category: "Thời trang",
    stock: 50
  },
  {
    product_name: "Giày thể thao",
    price: 800000,
    category: "Thời trang",
    stock: 30
  },
  {
    product_name: "Túi xách da",
    price: 1200000,
    category: "Thời trang",
    stock: 20
  },
  {
    product_name: "Đồng hồ thông minh",
    price: 2500000,
    category: "Công nghệ",
    stock: 15
  },
  {
    product_name: "Máy xay sinh tố",
    price: 900000,
    category: "Gia dụng",
    stock: 25
  }
];

const categories = ["Thời trang", "Công nghệ", "Gia dụng"];

const App = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    price: '',
    category: '',
    stock: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

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
      alert('Vui lòng điền đầy đủ các trường');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.product_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Tất cả' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProducts = filteredProducts.length;
  const totalStock = filteredProducts.reduce((sum, product) => sum + product.stock, 0);

  return (
    <Container className="mt-5">
      <h2>Danh sách sản phẩm</h2>
      <Form className="mb-4">
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                name="product_name"
                value={newProduct.product_name}
                onChange={handleInputChange}
                placeholder="Nhập tên sản phẩm"
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Nhập giá"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Danh mục</Form.Label>
              <Form.Select
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
              >
                <option value="">Chọn danh mục</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Tồn kho</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                placeholder="Nhập tồn kho"
              />
            </Form.Group>
          </Col>
          <Col md={2} className="d-flex align-items-end">
            <Button variant="primary" onClick={handleAddProduct}>
              Thêm sản phẩm
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Tìm kiếm sản phẩm</Form.Label>
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Nhập tên sản phẩm để tìm"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Lọc theo danh mục</Form.Label>
              <Form.Select
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="Tất cả">Tất cả</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <div className="mb-3">
        <strong>Tổng sản phẩm: {totalProducts} | Tổng tồn kho: {totalStock}</strong>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;