import React, { useState } from 'react';

const listaX = [
    {id:1, name: 'Lucas'},
    {id:2, name: 'Sara'},
]


export default function ExampleArray() {
    const [personas, setPersonas] = useState(listaX);

    //funcion que filtra el array
    const filtrar =(id_filtrar)=>{
        const personasFiltrado = personas.filter(persona=>(persona.id == id_filtrar)
            
        )

        setPersonas(personasFiltrado);
    }

  return (  <div>
                <button onClick={()=>filtrar(1)}>filtrar</button>
                    
                    <div>
                        {personas.map(persona =>(
                            <div key={persona.id} >
                                {persona.name}
                            </div>
                        ))}
                    </div>
                

            </div>
    );
}
