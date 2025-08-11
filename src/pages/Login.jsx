import React from 'react'

const Login = () => {
    return (
        <div className="flex h-screen align-middle justify-center mt-25">
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-2">Login</button>

                    <p className='flex justify-center mt-2'>You don't have an account ? Register</p>

                </fieldset >
            </form>
        </div>
    )
}

export default Login