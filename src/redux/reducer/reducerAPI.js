import { apiDataStore } from "../action/action";
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
} from "../action/actionType";

const initialState = {
  loading: false,
  apiStoreData: [],
    women:[],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_LOADING:
      return {
        ...state,
        loading: true,
      };

    case API_DATA:
      return {
        ...state,
        loading: false,
        apiStoreData: action.payload,
      };
    case PRICE_HIGH_TO_LOW:
      return {
        ...state,
        loading: false,
        apiStoreData: [...state.apiStoreData].sort((a, b) => b.price - a.price),
      };
    case PRICE_LOW_TO_HIGH:
      return {
        ...state,
        loading: false,
        apiStoreData: [...state.apiStoreData].sort((a, b) => a.price - b.price),
      };
      case WOMEN_CLOTHING:
        return {
          ...state,
          loading: false,
          apiStoreData: [...state.apiStoreData].filter((item)=>item.category==="women's clothing"),
        };
        case MEN_CLOTHING:
            return {
              ...state,
              loading: false,
              apiDataStore:action.payload,

              apiStoreData: [...state.apiStoreData].filter((item)=>item.category==="men's clothing"),
            };
            case JEWELERY:
                return {
                  ...state,
                  loading: false,

                  apiStoreData: [...state.apiStoreData].filter((item)=>item.category==="jewelery"),
                };
                case ELECTRONICS:
                    return {
                      ...state,
                      loading: false,
                      apiStoreData: [...state.apiStoreData].filter((item)=>item.category==="electronics"),
                    };
    case API_ERROR:
      return {
        ...state,
        apiStoreData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
