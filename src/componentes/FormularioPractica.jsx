import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormularioPractica = ({ agregar }) => {
    
    const [empresa, setEmpresa] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [tarea, setTarea] = useState("");
    const [fechaHora, setFechaHora] = useState(null);

    const agregarCero = (n) => {
        if (n < 10) {
            n = "0" + n
        }
        return n;
    }

    const guardarPractica = (event) => {
        event.preventDefault()
        
        if (empresa.length < 3) {
            alert("Empresa inválida")
            return
        }
        if (supervisor.length < 3) {
            alert("Supervisor inválido")
            return
        }
        if (tarea.length < 3) {
            alert("Tarea inválida")
            return
        }
        if (fechaHora == null) {
            alert("Fecha inválida")
            return
        }
        
        let formatoFecha = agregarCero(fechaHora.getDate())
                            + "/" + agregarCero(parseInt(fechaHora.getMonth()+1))
                            + "/"+ fechaHora.getFullYear();
        
        let formatoHora = agregarCero(fechaHora.getHours())
                            + ":" + agregarCero(fechaHora.getMinutes())

        let practica = {
            empresa: empresa,
            supervisor: supervisor,
            tarea: tarea,
            fecha: formatoFecha,
            hora: formatoHora
        }

        agregar(practica)
        setEmpresa("");
        setSupervisor("");
        setTarea("");
        setFechaHora(null)
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

                    <label htmlFor="tarea">Tarea</label>
                    <textarea className="form-control" id="tarea" rows="2" placeholder={'Tarea a realizar'} value={tarea} onChange={(event) => setTarea(event.target.value)}></textarea>
                    <br/>

                    <DatePicker showTimeSelect dateFormat="MMMM d, yyyy h:mmaa" placeholderText="Seleccione la fecha" selected={fechaHora} onChange={date => setFechaHora(date)}/> <br/>

                </div>
                
                <button type="submit" className="btn btn-primary"> Registrar </button>

            </form>
        </>
    )
}