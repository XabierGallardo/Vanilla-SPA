# Vanilla SPA
Vanilla JS Simple Page Application Sample, no libraries, no frameworks, just Materos Rioplatenses :tea: :sunny:

<p align="center">
    <img src="sample.png" alt="Sample image">
</p>

# STEPS
## 1. Create main views
1. index.html
2. main.css
3. home.html
4. encuentros.html
5. historia.html
6. programas.html

## 2. Create folder structure
- `src/`
- `src/views/`
- `src/assets/images`
- `src/assets/icons`

## 3. Add SPA functionality
- Now that we have our views, it's time to place them onto `src/views` and insert their HTML as a function on their respectives js files
- Copy their styles onto the generic `main.css` file
- Create our main js file called `main.js` that will handle all the logic to render the views and its functionalities (if any)
- Load default call after page is loaded

### `main.js` content
```js
// Importing our views & functions
import { lugaresView, lugaresGalleryFunctionality } from './src/views/lugares.js';
import { encuentrosView } from './src/views/encuentros.js';
import { historiaView } from './src/views/historia.js';
import { opinionesView, fetchOpinionesData } from './src/views/opiniones.js';

// Gets our url's pathname from out <a> elements and calls the view function to return the html
async function handleRouteChange() {
    const path = window.location.pathname;
    let view;
    switch(path) {
        case '/encuentros':
            view = encuentrosView();
        break;

        case '/historia':
            view = historiaView();
        break;

        case '/opiniones':
            view = opinionesView();
        break;

        default:
            view = lugaresView();
    }
    //Renders our view
    document.getElementById('app').innerHTML = view;
}

// Prevents page redirection, calls previous function & once rendered, it's functionality (if any)
document.querySelectorAll('.route').forEach(link => {
    link.addEventListener('click', function(ev) {

        // Prevents page redirection
        ev.preventDefault();

        // Modifies urls and adds a new state onto browser's history without reload
        history.pushState(null, '', this.href);

        handleRouteChange().then(() => {
            const path = window.location.pathname;
            switch(path) {
                case '/lugares':
                    lugaresGalleryFunctionality();
                break;

                case '/opiniones':
                    fetchOpinionesData();
                break;
            }
        });
    })
});

// Startup call
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("nav-logo_link").click();
 }, false);
```