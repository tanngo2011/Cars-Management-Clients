import { CLOSE_CREATE_FORM, SHOW_CREATE_FORM } from "../constants/actionTypeCreateForm"




//Khai báo biến state
export let initialState = {
    createForm: false, 
}



export let createFormReducer = (state = initialState, action) => {

    switch (action.type) {
        //Sử dụng switch case để xử lý logic cho từng Action:
        case SHOW_CREATE_FORM:
            return {
                ...state,
                createForm: true
            }



        case CLOSE_CREATE_FORM:
            return {
                ...state,
                createForm: false
            }



        default:
            return {
                ...state
            }
    }
    

}