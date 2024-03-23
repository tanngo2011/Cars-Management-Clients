import { DELETE_LIST_CAR, PUSH_LIST_CAR, SET_LIST_CAR, UPDATE_LIST_CAR } from "../constants/actionTypeListCar"



//Khai báo biến state
export let initialState = {
    listCar: [], 
}



export let listCarReducer = (state = initialState, action) => {

    switch (action.type) {
        //Sử dụng switch case để xử lý logic cho từng Action:
        case SET_LIST_CAR:
            return {
                ...state,
                listCar: action.payload
            }



        case PUSH_LIST_CAR:

            return {
                ...state,
                listCar: [...state.listCar, action.payload]
            }


        case UPDATE_LIST_CAR:
            
            //copy listCar ra một listCar khác
            let copyListCar = state.listCar.slice();
            //dùng splice() để xoá phần tử trong copyListCar:
            copyListCar.splice(action.payload.indexUpdate, 1);
            //dùng splice() để thêm mới phần tử trong copyListCar:
            copyListCar.splice(action.payload.indexUpdate, 0, action.payload.updatedCar);
            return {
                ...state,
                listCar: copyListCar
            }



        case DELETE_LIST_CAR:
            //copy listCar ra một listCar khác
            let copyListCar2 = state.listCar.slice();
            //dùng splice() để xoá phần tử trong copyListCar2:
            copyListCar2.splice(action.payload, 1);


            //không thể sử dụng cách này. tham khảo link sau để hiểu: https://stackoverflow.com/questions/55485591/component-dont-rerender-when-i-remove-item-from-state-but-it-rerender-when-i-add
            // listCar.splice(index, 1);
            // setListCar(listCar);

            return {
                ...state,
                listCar: copyListCar2
            }



        default:
            return {
                ...state
            }
    }
    

}