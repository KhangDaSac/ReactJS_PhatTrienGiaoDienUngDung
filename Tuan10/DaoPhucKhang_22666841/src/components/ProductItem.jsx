import React from 'react';
import { Button } from 'react-bootstrap';

const ProductItem = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.product_name}</td>
      <td>{product.price.toLocaleString()} VND</td>
      <td>{product.category}</td>
      <td>{product.stock}</td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(product.product_name)}
        >
          Xóa
        </Button>
      </td>
    </tr>
  );
};

export default ProductItem;