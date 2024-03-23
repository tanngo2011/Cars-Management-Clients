import { SHOW_LOG_IN, SHOW_LOG_OUT } from "../constants/actionTypeUpdateMenu"






//Khai báo biến state
export let initialState = {
    updateMenu: false, 
}



export let updateMenuReducer = (state = initialState, action) => {

    switch (action.type) {
        //Sử dụng switch case để xử lý logic cho từng Action:
        case SHOW_LOG_IN:
            return {
                ...state,
                updateMenu: false
            }



        case SHOW_LOG_OUT:
            return {
                ...state,
                updateMenu: true
            }



        default:
            return {
                ...state
            }
    }
    

}