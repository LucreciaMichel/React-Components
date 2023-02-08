
import React, { useState } from 'react';
import PropTypes from 'prop-types';

{/* la jerarquia es App.js > componentea.jsx > componenteb.jsx */}
{/* la jerarquia es App.js > task_list.jsx > task.jsx */}

function ComponenteB(estado) {

    /**
     * Funcion que actualiza el valor de la propiedad conectado
     */
    const [conectado, setConectado] = useState(estado)

    const cambiarEstado = () => {
        //actualizamos el state
        setConectado(!conectado)
    }

    return (
        <div>        
            <h3>
                { conectado === true ? 'Contacto En Linea' : 'Contacto No Disponible' }
            </h3>
            <div>
                <button onClick = { cambiarEstado }>
                    { conectado === false ? 'Conectar' : 'Desconectar' }
                </button>
            </div>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool
};

export default ComponenteB;






