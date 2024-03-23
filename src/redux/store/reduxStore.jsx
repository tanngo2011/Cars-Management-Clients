import {applyMiddleware, createStore, compose} from 'redux'
import {thunk} from "redux-thunk"
import { rootReducer } from '../rootReducer/reduxRootReducer';


//Khai báo một Middleware: 
const middleware = compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  



//Khai báo Store của Redux. Sau đó, thêm rootReducer vào Store:
export let reduxStore = createStore(
    rootReducer,
    middleware,
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  );