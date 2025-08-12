import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Logged in:', userCredential.user);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="flex h-screen align-middle justify-center mt-25">
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn btn-neutral mt-2">
                        Login
                    </button>
                    <p className="flex justify-center mt-2 cursor-pointer text-blue-500">"Don't have an account? Register"</p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
