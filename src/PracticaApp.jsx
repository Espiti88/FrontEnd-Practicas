import { FormularioPractica } from "./componentes/FormularioPractica"

export const PracticaApp = () => {

    const agregarPractica = (practica) => {}

    return (
        <>
            <FormularioPractica agregar={(pract) => { agregarPractica(pract) }}/>
        </>
    )
}