import { post,get } from "./api.js";

const endpoint = {
    application: '/data/cars',
    byId: characterId => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
     byIdAndUserId: (characterId,userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
 
}
// localhost:3030:/data/useful?where=characterId%3D%2270c97cdf-2c68-44ce-a076-66cd78ca875f%22%20and%20_ownerId%3D%2235c62d76-8152-4626-8712-eeb96381bea8%22&coun

export async function getBook(characterId) {
    return post(endpoint.application, { characterId })
}
export async function getApplication(characterId){
    return get(endpoint.byId(characterId))
}
export async function getUserApplication(characterId, userId){
    return get(endpoint.byIdAndUserId(characterId,userId))
}