import { allPracticas } from "../peticiones/allPracticas"

export const TablaPractica = ({ eliminar, listaPractica }) => {
    if (listaPractica.length > 0){
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Empresa</th>
                            <th scope="col">Supervisor</th>
                            <th scope="col">Tarea</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Función</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaPractica.map((practica) => 
                                <tr key={practica.id}>
                                    <td>{practica.empresa}</td>
                                    <td>{practica.supervisor}</td>
                                    <td>{practica.tarea}</td>
                                    <td>{practica.fecha}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={(event) => eliminar(practica)}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </>
        )
    } else {
        return (<h4> No se encuentra ninguna práctica registrada </h4>)
    }
    
}