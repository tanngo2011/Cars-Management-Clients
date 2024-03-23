
import { CLOSE_UPDATE_FORM, SHOW_UPDATE_FORM } from "../constants/actionTypeUpdateForm"




//Khai báo biến state
export let initialState = {
    updateForm: false, 
}



export let updateFormReducer = (state = initialState, action) => {

    switch (action.type) {
        //Sử dụng switch case để xử lý logic cho từng Action:
        case SHOW_UPDATE_FORM:
            return {
                ...state,
                updateForm: true
            }



        case CLOSE_UPDATE_FORM:
            return {
                ...state,
                updateForm: false
            }



        default:
            return {
                ...state
            }
    }
    

}