import userReducer from './userReducer'
import authReducer from './authReducer'
import { combineReducers} from 'redux'

const allReducers = combineReducers({
    user: userReducer,
    auth: authReducer
})

export default allReducers