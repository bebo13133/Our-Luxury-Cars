import { html } from "../../node_modules/lit-html/lit-html.js"
import { getOffers } from "../data/offers.js"
//TODO replace with actual template

const catalogTemplate = (books) => html`
         <h3 class="heading">Our Cars</h3>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
  
          ${books.length > 0 ? html`${books.map(bookTemplate)}`: html`<h3 class="nothing">Nothing to see yet</h3>`}
   
        </section>`

const bookTemplate = (book) => html`

<div class="car">
            <img src="${book.imageUrl}" alt="example1" />
            <h3 class="model">"${book.model}"</h3>
            <div class="specs">
              <p class="price">Price: €"${book.price}"</p>
              <p class="weight">Weight: "${book.weight}" kg</p>
              <p class="top-speed">Top Speed: "${book.speed}" kph</p>
            </div>
            <a class="details-btn" href="/catalog/${book._id}">More Info</a>
          </div>`




export async function catalogPage(ctx) {
  const books = await getOffers()

  ctx.render(catalogTemplate(books))
}












