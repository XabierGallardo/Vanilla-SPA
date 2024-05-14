export function encuentrosView() {
    return `
    <div id="encuentros">
        <div class="oradores-presentacion">
            <h5>SUMATE A LA COMUNIDAD MATERA RIOPLATENSE</h5>
            <h1>ENCUENTROS</h1>
        </div>

        <div id="cards">
            
            <div class="card">
                <img src="Vanilla-SPA/src/assets/images/muestra-mate.jpg" alt="muestra de mate">
                <div class="card-body">
                    <button type="button" class="btn arg-uy">Argentina</button>
                    <h4 class="card-title pt-2">Río Paraná - Argentina</h4>
                    <p class="card-text">Este es el encuentro más cercano para los que viven en la Ciudad Autónoma de Buenos Aires. Este año se celebra el encuentro del Paraná en la ciudad argentina de Rosario. Vení a conocer!</p>
                </div>
            </div>

            <div class="card">
                <img src="Vanilla-SPA/src/assets/images/plantacion-mate.jpg" alt="plantacion de yerba">
                <div class="card-body">
                    <button type="button" class="btn arg-uy">Uruguay</button>
                    <h4 class="card-title">Río Uruguay - Uruguay</h4>
                    <p class="card-text">Para aquellos que viven en territorio uruguayo, este año la cita es Paysandú, cercano a la ciudad uruguaya de Mercedes y las ciudades argentinas de Colón y Concepción del Uruguay.</p>
                </div>
            </div>

            <div class="card">
                <img src="Vanilla-SPA/src/assets/images/rio-iguazu.jpg" alt="rio iguazu">
                <div class="card-body">
                    <button type="button" class="btn bra">Brasil</button>
                    <h4 class="card-title pt-2">Río Iguazú - Brasil</h4>
                    <p class="card-text">Un infaltable de los encuentros, esta vez en territorio brasileño. Nos encontramos en Parque Nacional do Iguaçu, cercano a la provincia de Misiones y para los vecinos de Paraguay.</p>
                </div>
            </div>

        </div>
    </div>
    `;
}
