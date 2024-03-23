import { api } from "./api"



export let getListCar = async (page_param) => {
    return await api("GET", "cars", null, page_param)
}




export let getAllListCar = async () => {
    return await api("GET", "allcars", null, null)
}



export let createCar = async (newCar_param) => {
    return await api("POST", "cars", newCar_param, null)
}


export let updateCar = async (updateCar_param) => {
    return await api("PUT", "cars", updateCar_param, null)
}



export let deleteCar = async (deleteCar_param) => {
    return await api("DELETE", "cars", deleteCar_param, null)
}