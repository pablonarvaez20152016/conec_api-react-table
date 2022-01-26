import React, {useState} from 'react';
import ExampleArray from './ExampleArray';
import ExampleObjeto from './ExampleObjeto';

export default function ExampleEstate() {
//Definicion del state
    const [counter, setCounter] = useState(0);

//Funcion para incrementar
//1. forma directa en el render   <button onClick={()=>setCounter(counter+1)}></button>
//2. creando funcion
    const incrementarCounter = ()=>{
        console.log(counter);
        setCounter(counter+1)       //aumenta el contador

        //setCounter(counter+1)       //si necesitaria llamar dos veces el setcounter en una funcion no funciona

        //para el caso anterior se deberia utilizar
            setCounter(prevCounter => prevCounter+1);

        console.log(counter);
    }

    //*********************parte2************************** */
    // uso de boolean sin operador ternario
    const [condition, setCondition] = useState(true);

    //*******************parte 3**************************** */
    // uso de cadenas de texto
    const [error, setError] = useState("");

 




  return (
            <div>
                 {/* ---------------1. boton incrementar--------------------- */}
                <div>parte 1   </div>
                <button onClick={incrementarCounter}>Incrementar</button>
                <h1>Clicks: {counter}</h1>
                <hr/>

                {/* ---------------2. condiciones Boolenos--------------------- */}
                <h2> parte 2: vista con condicion - Sin operador ternario</h2>
                <div>
                    <button onClick={()=>setCondition(!condition)}>{condition?'ON':'OFF'}</button>
                    {
                        condition && 
                        <h1>mensaje que aparece y desaparece de acuerdo al estado de la condition</h1>
                    }

                    <h2>State value de contidion {condition.toString()}</h2>
                </div>
                {/* ---------------3. cadena de texto --------------------- */}
                <hr/>
                <h2> parte 3: cadena de texto</h2>
                <button onClick={()=>setError("caso 1 de error")}> error 1</button>
                <button onClick={()=>setError("caso 2 de error")}> error 2</button>
                <button onClick={()=>setError("caso 3 de error")}> error 3</button>
                    {error && <h1>{error}</h1>}
                {/* ---------------4.ExampleObjets.js --------------------- */}
                <hr/>
                <h1>4.ExampleObjets.js </h1>
                <ExampleObjeto></ExampleObjeto>

                {/* ---------------5.ExampleArrays.js --------------------- */}
                <hr/>
                <h1>5.ExampleArrays.js </h1>
                <ExampleArray></ExampleArray>
            </div>

  );/* fin del return */
}
