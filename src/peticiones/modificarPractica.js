export const modificarPractica = async (practica) => {
    const url = 'http://localhost:8080/practicas/actualizar/' + practica.id
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(practica)
    })

    const respuesta = await resp.json();
    console.log(respuesta)
}