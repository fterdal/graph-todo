import {createStore, combineReducers, applyMiddleware} from 'redux'
// import createLogger from 'redux-logger' // Figure out why redux-logger doesn't work anymore
import thunkMiddleware from 'redux-thunk'
import user from './user'

const reducer = combineReducers({user})
const middleware = applyMiddleware(thunkMiddleware, )//createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
