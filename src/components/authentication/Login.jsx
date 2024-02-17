import React from 'react'
import { useForm } from 'react-hook-form';
import {login} from '../../services/authServices'


export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data.email);
      login(data.email);
    };
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <div className='text-center'>
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input type="email" id="email" {...register('email', { required: true })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" {...register('password', { required: true })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          {errors.password && <p className="text-red-500">Password is required</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
      </form>
    </div>
  </div>
  )
}
