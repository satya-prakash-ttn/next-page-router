import React from "react";

export async function getServerSideProps() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return {
        props: {
            data,
        },
    }

}



const SsrExample = ({ data }) => {
    //console.log(data);
    return (
        <div className="container">
            {data.products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}

        </div>
    )
}

export default SsrExample;