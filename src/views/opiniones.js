export function opinionesView() {
    return `
    <div id="opiniones">
        <table id="opiniones-tabla">
            <thead>
                <tr>
                    <th>Asunto</th>
                    <th>Email</th>
                    <th>Cuerpo</th>
                </tr>
            </thead>

            <tbody>
            </tbody>

        </table>
    </div>
    `;
}

export async function fetchOpinionesData() {
    const urlOpiniones = 'https://jsonplaceholder.typicode.com/posts/1/comments';

        try {
            const response = await fetch(urlOpiniones);
            const opinions = await response.json();

            const tablaBody = document.querySelector('#opiniones-tabla tbody');

            opinions.forEach(opinion => {
                const file = document.createElement('tr');
                file.innerHTML = `
                    <td>${opinion.name}</td>
                    <td>${opinion.email}</td>
                    <td>${opinion.body}</td>
                `;
                tablaBody.appendChild(file);
            });
        } catch (error) {
            console.error('Error al obtener las opiniones: \n', error);
        }
}