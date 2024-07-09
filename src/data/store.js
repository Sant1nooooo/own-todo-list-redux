import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import rootRedcer from "./reducer";

const store = createStore(rootRedcer, applyMiddleware(thunk));
export default store;