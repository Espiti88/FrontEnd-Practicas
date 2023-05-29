export const eliminarPractica = async (id) => {

    const url = 'http://localhost:8080/practicas/eliminar/' + id
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    })
    const respuesta = await resp.json();
    console.log(respuesta)
}