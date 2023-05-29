import { useState, useEffect } from "react";
import { FormularioPractica } from "./componentes/FormularioPractica"
import { TablaPractica } from "./componentes/TablaPractica";
import { crearPractica } from "./peticiones/crearPractica"
import { eliminarPractica } from "./peticiones/eliminarPractica"
import { allPracticas } from "./peticiones/allPracticas"
import 'bootstrap/dist/css/bootstrap.min.css'
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import './App.css'

export const PracticaApp = () => {

    const [tabActual, setTabActual] = useState(1);
    const [listaPracticas, setListaPracticas] = useState([]);

    useEffect(() =>{
        cargarPracticas()
    },[])

    const cambiarTab = (numTab) => {
        if (numTab != tabActual){
            setTabActual(numTab)
        }
        if (numTab == 1){
            cargarPracticas()
        }
    }

    const cargarPracticas = async () => {
        const datos = await allPracticas()
        setListaPracticas(datos)
    }

    const agregarPractica = (practica) => {
        crearPractica(practica)
    }

    const deletePractica = (practica) => {
        eliminarPractica(practica.id)
        window.location.reload()
    }

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink 
                        className={(tabActual == 1 ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab(1)}>
                        Ver Practicas
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink 
                        className={(tabActual == 2 ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab(2) }>
                        Agrega Practica
                    </NavLink>
                </NavItem>
            </Nav> <br/>

            <TabContent activeTab={tabActual}>
                <TabPane tabId={1}>
                    <TablaPractica 
                        eliminar = {(pract) => { deletePractica(pract) }} 
                        listaPractica = {listaPracticas}/>
                </TabPane>
                    
                <TabPane tabId={2}>
                    <FormularioPractica agregar={(pract) => { agregarPractica(pract) }}/>
                </TabPane>
            </TabContent>
        </>
    )
}