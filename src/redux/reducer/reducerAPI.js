import { API_DATA, API_ERROR, API_LOADING } from "../action/actionType";

const initialState={
    loading:false,
    apiStoreData:[],
    error:"",
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case API_LOADING:
            return{
                ...state,
                loading:true
            }
          
        case API_DATA:
            return{
                ...state,
                loading:false,
                apiStoreData:action.payload,
            }
            case API_ERROR:
                return{
                    ...state,
                    apiStoreData:[],
                    error:action.payload,
                }
        default:
            return state
            break;
    }
}

