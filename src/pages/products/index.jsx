"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            const url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error - ${response.status}`);
                }
                const data = await response.json();
                setProducts(data.products);
                setTotalPages(Math.ceil(data.total / productsPerPage));
            }
            catch (error) {
                setError(error.message);
            }
        }
        fetchProducts();

    }, [currentPage]);

    return (
        <div className="container">
            <h2 className='mb-4 text-4xl font-extrabold'>Products</h2>
            {error && <p>Error - {error}</p>}
            <div class="flex items-center justify-center">
                <table className="text-sm border border-slate-300">
                    <thead >
                        <tr className='text-slate-500 border-b border-slate-300 bg-slate-50 '>
                            <th className='p-2'>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr key={item.id} className='border-b border-slate-300 ' >
                                <td className='p-2'>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div className='pagination mt-4'>
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1} >Prev</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages} >Next</button>
            </div>
        </div>
    );
}

export default Page;
