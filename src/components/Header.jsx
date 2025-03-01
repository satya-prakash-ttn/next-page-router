import React from 'react';
import Link from 'next/link';
const Header = () => {
    return (
        <header>
            <nav className="container">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/teachers">Teachers</Link>
                <Link href="/students">Students</Link>
                <Link href="/clientsidefetching">CSR</Link>
                <Link href="/serversidefetching">SSR</Link>
                <Link href="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;
