import React from 'react'
import { useForm } from 'react-hook-form';
import { signupUser } from '../../services/authServices'
import { useNavigate } from 'react-router-dom';


export default function Signup() {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const isSignedUp = signupUser(data);
        isSignedUp ? (alert(`signup completed Try to login`)) : (alert(`Something went wrong try again`))
        navigate('/login')
    };



    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <div className='text-center'>
                    <h2 className="text-2xl font-bold mb-6">SignUp</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                        <input type="text" id="fullName" {...register('fullName', { required: true })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        {errors.fullName && <p className="text-red-500">Full Name is required</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                        <input type="email" id="email" {...register('email', { required: true })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" {...register('password', { required: true })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        {errors.password && <p className="text-red-500">Password is required</p>}
                    </div>
                    {/* <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" {...register('confirmPassword', { required: true })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        {errors.confirmPassword && <p className="text-red-500">Confirm Password is required</p>}
                    </div> */}
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
