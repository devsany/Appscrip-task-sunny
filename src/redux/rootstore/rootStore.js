import {combineReducers} from 'redux'
import { reducer } from '../reducer/reducerAPI'

const rootReduce = combineReducers({
    api:reducer
})

export default rootReduce