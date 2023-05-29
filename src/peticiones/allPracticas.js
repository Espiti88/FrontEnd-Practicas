export const allPracticas = async() => {

    const url = 'http://localhost:8080/practicas/todos'
    const resp = await fetch(url)
    const data = await resp.json();

    const practicaList = data.map(practica =>({
        id: practica.id,
        empresa: practica.empresa,
        supervisor: practica.supervisor,
        tarea: practica.tarea,
        fecha: practica.fecha,
        hora: practica.hora
    }));
    return practicaList;
}