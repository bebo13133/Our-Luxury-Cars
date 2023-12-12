import {post,get,del,put} from './api.js'

const endpoint={
    book: '/data/cars?sortBy=_createdOn%20desc',
    byId: '/data/cars/',
    byOwner: ownerId =>`/data/cars?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`

    
}
export async function getOwnerBook(ownerId){
    return await get(endpoint.byOwner(ownerId))
}

export async function getOffers(){
    return await get(endpoint.book)
}
export async function getById(id){
    return await get(endpoint.byId+id)
}

export async function createOffer(book){
    return await post('/data/cars',book) // Преправих адреса само зарди задачата - ориганалният вариант е return await post(endpoint.book,book)
}
export async function deleteOffer(id){
    return await del(endpoint.byId+id)
}
export async function updateOffer(id,book){
    return await put(endpoint.byId+id,book)
}
export async function searchAlbum(query){
    return get(`/data/cars?where=model%20LIKE%20%22${query}%22`)
}
