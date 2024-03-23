import { CLOSE_CREATE_FORM, SHOW_CREATE_FORM } from "../constants/actionTypeCreateForm"




export let actionShowCreateModal = () => {
    return {
        type: SHOW_CREATE_FORM
    }
}


export let actionCloseCreateModal = () => {
    return {
        type: CLOSE_CREATE_FORM
    }
}