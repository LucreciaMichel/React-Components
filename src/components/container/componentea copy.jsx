import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';

{/* la jerarquia es App.js > componentea.jsx > componenteb.jsx */}
{/* la jerarquia es App.js > task_list.jsx > task.jsx */}
const Componentea = () => {

    const defaultContacto = new Contacto('Maria', 'Gutierrez', 'mgutierrez@mail.com', false)

    return (
        <div>
            <h1>
                Información del Contacto
            </h1>
            <ComponenteB contacto = { defaultContacto }></ComponenteB>
        </div>
    );
};

export default Componentea;





