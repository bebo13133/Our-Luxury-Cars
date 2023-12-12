
import { html } from "../../node_modules/lit-html/lit-html.js"
import { getBook, getApplication, getUserApplication } from "../data/applications.js"
import { deleteOffer, getById } from "../data/offers.js"
import { getUserData } from "../util.js"
//TODO replace with actual template

const detailsTemplate = (book, onDelete, onBook) => html`


<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${book.imageUrl}" alt="example1" />
            <p id="details-title">${book.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${book.price}</p>
                <p class="weight">Weight: ${book.weight} kg</p>
                <p class="top-speed">Top Speed: ${book.speed} kph</p>
                <p id="car-description">${book.about}</p>
              </div>
              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">

                ${book.canEdit ? html` <a href="/catalog/${book._id}/edit" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`:null}
              </div>
            </div>
          </div>
        </section>`





export async function detailsPage(ctx) {
    const id = ctx.params.id
    const userData = getUserData()

    const request = [
        getById(id),
        // getApplication(id)
    ]

    // if (userData) {
    //     request.push(getUserApplication(id, userData._id))
    // }
    const [book, likes, hasLikes] = await Promise.all(request)
    book.likes = likes

    if (userData && userData._id == book._ownerId) {
        book.canEdit = true
    }
    if (userData && userData._id !== book._ownerId && hasLikes == 0) {
        book.canLike = true
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete простотия')
        if (choice) {
            await deleteOffer(id)
            ctx.page.redirect('/catalog')
        }
    }
    async function onBook() {
        const result = await getBook(id)
        //    console.log(result.length,".length")
        ctx.page.redirect(`/catalog/${id}`)
    }

    ctx.render(detailsTemplate(book, onDelete, onBook))
}