import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from '../pure/componenteB';
import { Contacto } from '../../models/contacto.class';

{/* la jerarquia es App.js > componentea.jsx > componenteb.jsx */}
{/* la jerarquia es App.js > task_list.jsx > task.jsx */}

const ComponenteA = ({ contacto }) => {
    
    return (
        <div>
            <h1>
                Información del Contacto
            </h1>
            <h3>
                Nombre: { contacto.nombre } 
            </h3>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h3>
                Email: { contacto.email }
            </h3>
            <ComponenteB estado = { true }></ComponenteB>
        </div>
    );
};

ComponenteA.protoTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteA;





