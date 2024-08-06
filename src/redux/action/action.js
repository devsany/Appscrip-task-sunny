import axios from "axios";
import { API_DATA, API_ERROR, API_LOADING } from "./actionType";

export function loading(){
     return {
        type:API_LOADING
     }
}

export function error(err){
    return {
       type:API_ERROR,
       payload:err
    }
}

export function apiDataStore(apiData){
    return {
       type:API_DATA,
       payload:apiData
    }
}

 export function getAPIData(){
    return function (dispatch){
        dispatch(loading)
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            const datas = res.data;
            dispatch(apiDataStore(datas))
        })
        .catch((err)=>{
            dispatch(error(err))
        }) 
    }
}