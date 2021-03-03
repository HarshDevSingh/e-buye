import {
  PRDUCT_LIST_REQUEST,
  PRDUCT_LIST_SUCCESS,
  PRDUCT_LIST_FAIL,
} from "../constants/productConstants";
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRDUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRDUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRDUCT_LIST_FAIL:
      return { loading: false, error: action.payload, products: [] };

    default:
      return state;
  }
};
