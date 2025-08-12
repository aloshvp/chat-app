import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', general: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({ email: '', password: '', general: '' });

        // Basic validation
        if (!email) return setErrors((prev) => ({ ...prev, email: 'Email is required' }));
        if (!password) return setErrors((prev) => ({ ...prev, password: 'Password is required' }));

        try {
            setLoading(true);

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Logged in:', userCredential.user);
            navigate("/");

        } catch (error) {
            console.error(error);

            if (error.code === 'auth/invalid-email') {
                setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
            } else if (error.code === 'auth/user-not-found') {
                setErrors((prev) => ({ ...prev, email: 'No account found with this email' }));
            } else if (error.code === 'auth/wrong-password') {
                setErrors((prev) => ({ ...prev, password: 'Incorrect password' }));
            } else {
                setErrors((prev) => ({ ...prev, general: 'Login failed. Please try again.' }));
            }
        } finally {
            setLoading(false);
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
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

                    {errors.general && <p className="text-red-500 text-xs">{errors.general}</p>}

                    <button type="submit" className="btn btn-neutral mt-2" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>

                    <p className="flex justify-center mt-2 cursor-pointer text-blue-500">
                        Don't have an account? Register
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
