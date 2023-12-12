import { html } from "../../node_modules/lit-html/lit-html.js"

//TODO replace to actual layout
export const layoutTemplate = (userData, content) => html`
  
  <header>
        <!-- Navigation -->
        <a id="logo" href="/"><img id="logo-car" src="/images/car-logo.png" alt="img"/></a>
        <nav>
          <div>
            <a href="/catalog">Our Cars</a>
            <a href="/search">Search</a>
          </div>

          <!-- Logged-in users -->

         ${userData ? html`<div class="user">
            <a href="/create">Add Your Car</a>
            <a href="/logout">Logout</a>
          </div>` : html`

          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
        </nav>
      </header>
     <main id="main-element">${content}</main>`