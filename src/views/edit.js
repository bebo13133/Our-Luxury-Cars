import { html } from "../../node_modules/lit-html/lit-html.js"
import { createSubmitHandler } from "../util.js"
import { updateOffer } from "../data/offers.js"
import { getById } from "../data/offers.js"

const editTemplate = (book, onEdit) => html`

<section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" action="" method="" @submit=${onEdit}>
              <input type="text" name="model" id="model" placeholder="Model" .value=${book.model}/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                .value=${book.imageUrl}
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                .value=${book.price}
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                .value=${book.weight}
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                .value=${book.speed}
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
                .value=${book.about}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`




export async function editPage(ctx) {
  const id = ctx.params.id
  const book = await getById(id)

  ctx.render(editTemplate(book, createSubmitHandler(onEdit)))


  async function onEdit({ model, imageUrl,
    price,
    weight,
    speed,
    about,
  }) {
    if ([model, imageUrl,
      price,
      weight,
      speed,
      about,].some(x => x == "")) {
      return alert("Please fill all fields!")
    }
    await updateOffer(id, {
      model, imageUrl,
      price,
      weight,
      speed,
      about,
    })
    ctx.page.redirect(`/catalog/${id}`)
  }
}