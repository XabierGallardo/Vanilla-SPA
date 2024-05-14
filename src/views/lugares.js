export function lugaresView() {
    return `
    <div id="lugares">
        <div class="slider-wrapper">
                    
            <button class="slide-arrow" id="slide-arrow-prev">
            &#8249;
            </button>

            <button class="slide-arrow" id="slide-arrow-next">
            &#8250;
            </button>
            
            <ul class="slides-container" id="slides-container">
                
                <!-- Slide 1 -->
                <li class="slide">
                    <div class="bloque-opacidad">
                        <div class="bloque-texto">
                            <h1>Río Uruguay</h1>
                            <h4>El río Uruguay es un río internacional de América del Sur que junto con los ríos Paraná, Paraguay y otros cursos fluviales forman la cuenca del Plata. Nace en la Sierra Geral en el sudeste de Brasil en la confluencia de los ríos Canoas y Pelotas en el límite entre los estados de Río Grande del Sur y Santa Catarina, y desemboca en el Río de la Plata en el lugar llamado punta Gorda entre el departamento uruguayo de Colonia y el argentino de Islas del Ibicuy en la provincia de Entre Ríos.</h4>
                        </div>
                    </div>
                    </li>

                <!-- Slide 2 -->
                <li class="slide">
                    <div class="bloque-opacidad">
                        <div class="bloque-texto">
                            <h1>Río Iguazú</h1>
                            <h4>El río Iguazú es un río del sur de Brasil y del nordeste de la Argentina, en el centro-este de América del Sur. Pertenece a la cuenca del Plata. Nace en el cordón montañoso brasileño denominado Serra do Mar, en el estado de Paraná, y luego de un recorrido de aproximadamente 1300 kilómetros desemboca en el río Paraná.</h4>
                        </div>
                    </div>
                </li>

                <!-- Slide 3 -->
                <li class="slide">
                    <div class="bloque-opacidad">
                        <div class="bloque-texto">
                            <h1>Río Paraná</h1>
                            <h4>El Paraná es un largo río del centro-este de Sudamérica que fluye en direcciones sur, este, sudoeste a través de Brasil, Paraguay y Argentina. Tiene una longitud de 2546 kilómetros que lo sitúan como el segundo río más largo de América del Sur. Es una continuación del río Grande, recibiendo el nombre del río Paraná en la confluencia con el río Paranaíba.</h4>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `;
}


export function lugaresGalleryFunctionality() {

    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    nextButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });
}