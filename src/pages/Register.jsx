import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({ name: '', email: '', password: '', file: '' });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ name: '', email: '', password: '', file: '' });

        // Validation
        if (!name) return setErrors((prev) => ({ ...prev, name: 'Name is required' }));
        if (!email) return setErrors((prev) => ({ ...prev, email: 'Email is required' }));
        if (!password) return setErrors((prev) => ({ ...prev, password: 'Password is required' }));
        if (!file) return setErrors((prev) => ({ ...prev, file: 'Profile image is required' }));

        try {
            setLoading(true);

            // 1️⃣ Upload image to Cloudinary
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'my_unsigned_preset');

            const cloudinaryRes = await fetch(
                `https://api.cloudinary.com/v1_1/dldd5ynzu/image/upload`,
                { method: 'POST', body: formData }
            );

            const cloudinaryData = await cloudinaryRes.json();
            const imageUrl = cloudinaryData.secure_url;

            // 2️⃣ Create Firebase Auth user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // 3️⃣ Update Firebase Auth profile
            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: imageUrl
            });

            // 4️⃣ Store user in Firestore
            await setDoc(doc(db, "users", userCredential.user.uid), {
                uid: userCredential.user.uid,
                name: name,
                email: email,
                photoURL: imageUrl,
                createdAt: serverTimestamp()
            });

            //5️⃣ Store user chats in Firestore
            await setDoc(doc(db, "userChats", userCredential.user.uid), {})

            // alert("Registration successful!");
            resetForm();
            navigate("/")

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setErrors((prev) => ({ ...prev, email: 'This email is already registered' }));
            } else if (error.code === 'auth/invalid-email') {
                setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
            } else if (error.code === 'auth/weak-password') {
                setErrors((prev) => ({ ...prev, password: 'Password should be at least 6 characters' }));
            } else {
                console.error(error);
                setErrors((prev) => ({ ...prev, email: error.message }));
            }
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setFile(null);
        setErrors({ name: '', email: '', password: '', file: '' });
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#4a4e91] to-[#6366f1]">
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 h-max">
                    <h2 className="card-title mb-2">Register</h2>

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

                    <input type="file" className="file-input file-input-ghost my-3"
                        onChange={(e) => setFile(e.target.files[0])} />
                    {errors.file && <p className="text-red-500 text-xs">{errors.file}</p>}

                    <button className="btn btn-neutral mt-2" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                    <p className="flex justify-center mt-2 cursor-pointer text-blue-500">
                        Don't have an account? <Link to='/login'>Login</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
