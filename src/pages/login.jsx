import React, { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
    const [countdown, setCountdown] = useState(5);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;  

        if (session && countdown === 0) {
            router.replace('/dashboard');
        }

        if (session && countdown > 0) {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;  
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }

    }, [session, countdown, status, router]);  

    return (
        <div className="container">
            {session ? (
                countdown > 0 ? (
                    <p>Already logged in, Redirecting you in {countdown} seconds...</p>
                ) : (
                    <p>Redirecting...</p>
                )
            ) : (
                <div>
                    <h1 className='mb-10 '>Login Page</h1>
                    <button
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                        className="google-login-btn"
                    >
                        Login with Google
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
