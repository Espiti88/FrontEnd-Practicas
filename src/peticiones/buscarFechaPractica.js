export const buscarFechaPractica = async(fecha) => {

    const url = 'http://localhost:8080/practicas/buscarFecha?fecha=' + fecha
    const resp = await fetch(url)
    const data = await resp.json();

    const practicasList = data.map(practica =>({
        id: practica.id,
        empresa: practica.empresa,
        supervisor: practica.supervisor,
        tarea: practica.tarea,
        fecha: practica.fecha
    }));
    return practicasList;
}