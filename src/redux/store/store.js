import {createStore,applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import rootReduce from '../rootstore/rootStore';


 const store= createStore(rootReduce,applyMiddleware(thunk))

 export default store;