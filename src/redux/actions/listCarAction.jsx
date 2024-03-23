import { getListCar } from "../../api/CarApi";
import { DELETE_LIST_CAR, PUSH_LIST_CAR, SET_LIST_CAR, UPDATE_LIST_CAR } from "../constants/actionTypeListCar"





//Action dùng để set dữ liệu vào biến state:
export let actionSetListCar = (listCar) => {
    return {
        type: SET_LIST_CAR,
        payload: listCar
    }
}



//Action dùng để thêm mới phần tử vào biến state:
export let actionPushListCar = (newCar) => {
    return {
        type: PUSH_LIST_CAR,
        payload: newCar
    }
}




//Action dùng để update phần tử trong biến state:
export let actionUpdateListCar = (updatedCar, indexUpdate) => {
    return {
        type: UPDATE_LIST_CAR,
        payload: {
            updatedCar: updatedCar,
            indexUpdate: indexUpdate
        }
    }
}




//Action dùng để delete phần tử trong biến state:
export let actionDeleteListCar = (indexDelete) => {
    return {
        type: DELETE_LIST_CAR,
        payload: indexDelete
        
    }
}