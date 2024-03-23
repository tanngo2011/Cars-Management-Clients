import { CLOSE_UPDATE_FORM, SHOW_UPDATE_FORM } from "../constants/actionTypeUpdateForm"





export let actionShowUpdateModal = () => {
    return {
        type: SHOW_UPDATE_FORM
    }
}



export let actionCloseUpdateModal = () => {
    return {
        type: CLOSE_UPDATE_FORM
    }
}