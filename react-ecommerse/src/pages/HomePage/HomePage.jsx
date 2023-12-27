import React from 'react';
import ListProduct from '../../components/ListProduct/ListProduct';
import ItemListContainer from '../../components/IemListContainer/ItemListContainer';

const HomePage = () => {
  return (
    <div>
      <ItemListContainer />
      <h1>PRODUCTOS</h1>
      <ListProduct />
    </div>
  )
}

export default HomePage;