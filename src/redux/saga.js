import { takeLatest, call, put } from 'redux-saga/effects';
import getData from '../services/request';
import { FETCH_PRODUCTS_REQUEST, fetchProductsSuccess, fetchProductsError } from './actionType';
// import { getProducts } from './api';


function* fetchProducts() {
  try {
    const products = yield call(getData);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError(error));
  }
}

export function* productsSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts);
}