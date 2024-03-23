import { combineReducers } from "redux";
import { listCarReducer } from "../reducers/listCarReducer";
import { createFormReducer } from "../reducers/createFormReducer";
import { updateFormReducer } from "../reducers/updateFormReducer";
import { updateMenuReducer } from "../reducers/updateMenuReducer";




//Tạo ra một rootReducer bằng cách sử dụng fucntion combineReducer() của Thư viện Redux:
export let rootReducer = combineReducers({
    listCar: listCarReducer,
    createForm: createFormReducer,
    updateForm: updateFormReducer,
    updateMenu: updateMenuReducer
})