import React from 'react'

const Register = () => {
    return (
        <div className="flex h-screen align-middle justify-center mt-25">
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 h-max" >
                    <legend className="fieldset-legend text-s">Register</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <input type="file" className="file-input file-input-ghost my-3" />

                    <button className="btn btn-neutral mt-2">register</button>

                    <p className='flex justify-center mt-2'>You don't have an account ? Login</p>

                </fieldset >
            </form>
        </div >
    )
}

export default Register
