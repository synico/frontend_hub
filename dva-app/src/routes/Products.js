import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h1>List of Products</h1>
      <p>xxxxx</p>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
}

export default connect(({ products }) => ({
  products,
}))(Products);

