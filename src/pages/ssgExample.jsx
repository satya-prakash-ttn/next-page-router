import React from 'react';

export async function getStaticProps(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return{
        props:{
            data,
        },
        revalidate:10,
    }
}



const CsrExample = ( {data} ) => {
   const {products} = data;
   //console.log(products);
    return (
        <div className='container'>
            <ul>
                {products.map( (product)=>(
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default CsrExample;
