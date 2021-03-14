import {
  PRDUCT_LIST_REQUEST,
  PRDUCT_LIST_SUCCESS,
  PRDUCT_LIST_FAIL,
  PRDUCT_DETAIL_REQUEST,
  PRDUCT_DETAIL_SUCCESS,
  PRDUCT_DETAIL_FAIL,
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

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRDUCT_DETAIL_REQUEST:
      return { loading: true, ...state };

    case PRDUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };

    case PRDUCT_DETAIL_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
