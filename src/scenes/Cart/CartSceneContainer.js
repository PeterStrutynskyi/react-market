import {branch, compose, lifecycle, renderComponent, withHandlers} from "recompose";
import { connect } from 'react-redux'


import * as cartActions from "../../modules/cart/cartActions";
import * as cartSelectors from '../../modules/cart/cartSelectors';
import * as productsOperations from "../../modules/products/productsOperations";

import CartSceneView from "./CartSceneView";
import MyLoader from "../../components/SceneCommonStyles/Loader";


const mapStateToProps = (state) => ({
  items: cartSelectors.getProducts(state),
  totalPrice: cartSelectors.getTotalPrice(state),
  isLoading: state.products.isLoading,
});

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchAllProducts,
  removeFromCart: cartActions.remove,
  changeCount: cartActions.changeCount,
};


const enhancer = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch,
  ),
  withHandlers({
    onChange: ({ changeCount }) => (id, e) => {
      changeCount({
        id,
        count: e.target.value
      })
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchProducts();
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(MyLoader)),
);


export default enhancer(CartSceneView);
