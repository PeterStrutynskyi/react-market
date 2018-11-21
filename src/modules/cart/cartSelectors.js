import { createSelector } from 'reselect';


const getProductsIds = state => state.cart.items;
const getProductsEntities = state => state.entities.products;


export const getProducts = createSelector(
  [getProductsIds, getProductsEntities],
  (ids, entities) => ids.map( item => ({ ...entities[item.id], count: item.count }) )
);

export const getTotalPrice = createSelector(
  getProducts,
  items => items.reduce((acc, item) => acc + item.price * item.count, 0)
);