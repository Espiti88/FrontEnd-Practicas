import { useState } from "react";
import { FormularioPractica } from "./componentes/FormularioPractica"
import { crearPractica } from "./peticiones/crearPractica"
import 'bootstrap/dist/css/bootstrap.min.css'
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import './App.css'

export const PracticaApp = () => {

    const [tabActual, setTabActual] = useState(1);

    const cambiarTab = (numTab) => {
        if (numTab != tabActual){
            setTabActual(numTab)
        }
    }

    const agregarPractica = (practica) => {
        crearPractica(practica)
    }

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink 
                        className={(tabActual == 1 ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab(1)}>
                        Agrega Practica
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink 
                        className={(tabActual == 2 ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab(2)}>
                        Ver Practicas
                    </NavLink>
                </NavItem>
            </Nav> <br/>

            <TabContent activeTab={tabActual}>
                <TabPane tabId={1}>
                    <FormularioPractica className="contenido" agregar={(pract) => { agregarPractica(pract) }}/>
                </TabPane>

                <TabPane tabId={2}>

                </TabPane>
            </TabContent>
        </>
    )
}