import { html } from "../../node_modules/lit-html/lit-html.js"
import { searchAlbum } from "../data/offers.js"

const searchTemplate = (isClicked, onSearch, albums) => html`
      <section id="search">
          <div class="form">
            <h4>Search</h4>
            <form class="search-form" @submit=${onSearch}>
              <input type="text" name="search" id="search-input" />
              <button type=submit class="button-list">Search</button>
            </form>
          </div>
          ${isClicked ? html`
          <div class="search-result">
            ${albums.length > 0 ? html`${albums.map(albumTemplate)}` : html` <h2 class="no-avaliable">No result.</h2>`}
            </div>           
            `: html` <h2 class="no-avaliable">No result.</h2>`}

        </section>`

const albumTemplate = (album) => html`<div class="car">
        <img src="${album.imageUrl}" alt="example1"/>
        <h3 class="model">${album.model}</h3>
      <a class="details-btn" href="/catalog/${album._id}" >More Info</a>
      </div>`

export async function searchPage(ctx) {

  ctx.render(searchTemplate(false, onSearch))

  async function onSearch(e) {
    e.preventDefault()
    const input = document.querySelector("#search-input")
    const query = input.value
    if (!query) return alert("Нема такава простотия!!!")
    const albums = await searchAlbum(query)
    console.log(albums)
    ctx.render(searchTemplate(true, onSearch, albums))
  }

}