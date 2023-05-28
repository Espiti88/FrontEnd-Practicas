import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormularioPractica = ({ agregar }) => {
    
    const [empresa, setEmpresa] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [tarea, setTarea] = useState("");
    const [fecha, setFecha] = useState(null);

    const guardarPractica = (event) => {
        event.preventDefault()

        let practica = {
            empresa: empresa,
            supervisor: supervisor,
            tarea: tarea,
            fecha: fecha
        }

        if (practica.empresa.length < 3) {
            alert("Empresa inválida")
            return
        }
        if (practica.supervisor.length < 3) {
            alert("Supervisor inválido")
            return
        }
        if (practica.tarea.length < 3) {
            alert("Tarea inválida")
            return
        }
        if (practica.fecha == null) {
            alert("Fecha inválida")
            return
        }

        agregar(practica)
        setEmpresa("");
        setSupervisor("");
        setTarea("");
        setFecha(null)
    }

    return (
        <>
            <form onSubmit={guardarPractica}>

                <div className="form-group">
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" className="form-control" id="empresa" placeholder={'Empresa'} value={empresa} onChange={(event) => setEmpresa(event.target.value)} />
                    <br/>

                    <label htmlFor="supervisor">Supervisor</label>
                    <input type="text" className="form-control" id="supervisor" placeholder={'Supervisor'} value={supervisor} onChange={(event) => setSupervisor(event.target.value)} />
                    <br/>

                    <label for="tarea">Tarea</label>
                    <textarea class="form-control" id="tarea" rows="2" placeholder={'Tarea a realizar'} value={tarea} onChange={(event) => setTarea(event.target.value)}></textarea>
                    <br/>

                    <DatePicker showTimeSelect dateFormat="MMMM d, yyyy h:mmaa" placeholderText="Seleccione la fecha" selected={fecha} onChange={date => setFecha(date)}/> <br/>

                </div> <br/>

                
                <button type="submit" className="btn btn-primary"> Registrar </button>

            </form>
        </>
    )
}