const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default : thunk } = require("redux-thunk");




// combine all reducers into a single variable 
const reducers = combineReducers({})


// middleware is used for coverting synchronous into asynchronous
const middleware = [thunk]


// Creating of Store    reducer , middleware
const store = createStore(reducers , applyMiddleware(...middleware))


// export
export default store

