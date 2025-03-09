import React from "react";
import { useEffect, useState } from "react";

const CsrExample = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();

    }, [])

   
    return (
        <div className="container">
            <h1>Product List</h1>
            {products.map((product) => (
                <p key={product.id}> {product.title}</p>
            ))}
      
        </div>
    )
}

export default CsrExample;