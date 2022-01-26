import React, { useState } from 'react';

const initialProduct = {
    name:"Nevera",
    valor:3000,
    moneda:'Dolares'
}

export default function ExampleObjeto() {
    const [product, setProduct] = useState(initialProduct);

    const updateProduct = (property, valorParam)=>{
        setProduct({
            ...product,     //pasa todos los atributos que tiene el objeto anterior
            // valor: valorParam
            [property]: valorParam,
            nuevopropiedad:"nuevo valor"
        })
    }

  return (  <div>
                <button onClick={()=>updateProduct("valor","4000")}>Update Product</button>

                <h2>{product.name}</h2>
                <h2>{product.valor}</h2>
                <h2>{product.moneda}</h2>

                <h3>propiedades del Objeto</h3>
                <div>
                    {JSON.stringify(product)}
                </div>
                <div>
                    {JSON.stringify(product,null,2)}
                </div>
                
                <pre>
                    {JSON.stringify(product,null,2)}
                </pre>
                
            </div>);
}
