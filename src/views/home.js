import { html } from "../../node_modules/lit-html/lit-html.js"
// import { getOffers } from "../data/offers.js"

//TODO replace with actual template

// const homeTemplate = (books) => html`
//   <section id="dashboard-page" class="dashboard">
//             <h1>Dashboard</h1>
//             <!-- Display ul: with list-items for All books (If any) -->
//             <ul class="other-books-list">
//             ${books.length > 0 ? html`${books.map(bookTemplate)}`: html`<p class="no-books">No books in database!</p>`}
//             </ul>
// </section>`

const bookTemplate = () => html`
      
      <section id="hero">
          <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
          </h1>
        </section>
   `

export async function homePage(ctx) {
    // const books = await getOffers()
    // console.log(books)
    // console.log('Hello')
    ctx.render(bookTemplate())
}
