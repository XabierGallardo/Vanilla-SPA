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