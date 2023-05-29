export const crearPractica = async (practica) => {
    const url = 'http://localhost:8080/practicas/crear'
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(practica)
    })

    const respuesta = await resp.json();
    console.log(respuesta)
}