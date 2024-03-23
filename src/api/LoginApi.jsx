import { api } from "./api"


export let login = async (loginData) => {
    return await api("GET", "login", loginData, null)
}