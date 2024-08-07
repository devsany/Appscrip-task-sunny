import axios from "axios";
import {
  API_DATA,
  API_ERROR,
  API_LOADING,
  ELECTRONICS,
  JEWELERY,
  MEN_CLOTHING,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  WOMEN_CLOTHING,
} from "./actionType";

export function loading() {
  return {
    type: API_LOADING,
  };
}

export function error(err) {
  return {
    type: API_ERROR,
    payload: err,
  };
}

export function apiDataStore(apiData) {
  return {
    type: API_DATA,
    payload: apiData,
  };
}
export function priceHighToLow() {
  return {
    type: PRICE_HIGH_TO_LOW,
  };
}
export function priceLowToHigh() {
  return {
    type: PRICE_LOW_TO_HIGH,
  };
}

export function womenClothing() {
  return {
    type: WOMEN_CLOTHING,
  };
}

export function menClothing() {
  return {
    type: MEN_CLOTHING,
  };
}

export function jewelery() {
  return {
    type: JEWELERY,
  };
}

export function electronic() {
  return {
    type: ELECTRONICS,
  };
}

export function getAPIData() {
  return function (dispatch) {
    dispatch(loading);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const datas = res.data;
        dispatch(apiDataStore(datas));
      })

      .catch((err) => {
        dispatch(error(err));
      });
  };
}
