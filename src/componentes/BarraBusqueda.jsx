import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BarraBusqueda = ({ filtar }) => {

    const [fecha, setFecha] = useState(null);

    const agregarCero = (n) => {
        if (n < 10) {
            n = "0" + n
        }
        return n;
    }

    const seleccion = (date) => {
        
        setFecha(date)

        let formatoFecha = null
        if(date != null){
            formatoFecha = agregarCero(date.getDate())
                            + "/" + agregarCero(parseInt(date.getMonth()+1))
                            + "/"+ date.getFullYear();
        }
        
        filtar(formatoFecha)
    }
    
    return (
        <>
            <div className="form-group">
                <label htmlFor="fecha">Buscar por Fecha</label>
                <DatePicker isClearable id="fecha" placeholderText="Seleccione la fecha" selected={fecha} onChange={date => seleccion(date)}/>
            </div>
        </>
    )
}