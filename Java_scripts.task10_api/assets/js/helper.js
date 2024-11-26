import {Data_user} from "./constant.js";

export let endpoint;

export async function getAllData(endpoint) {
    const resp = await axios(`${Data_user}/${endpoint}`);
    return resp.data
}
export async function getAllDatabyId(endpoint, id) {
    const resp = await axios(`${Data_user}/${endpoint}/${id}`);
    return resp.data
}