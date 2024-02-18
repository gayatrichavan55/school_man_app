import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'



export default function Headers() {

    const status = useSelector(state => state.auth.status);
    const logedIndata = useSelector(state => state.auth.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    console.log(`Status : ${status} || data : ${logedIndata}`);


    const handleLogOut = () => {

        dispatch(logout())
        navigate("/")

    }



    return (
        <div>
            <nav className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* <!-- Logo --> */}
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-lg font-semibold">Your Logo</Link>
                    </div>

                    {/* <!-- Centered Navigation links --> */}
                    <div className="flex justify-center flex-1">
                        <ul className="flex space-x-4">
                            <li><Link to="" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link to="about" className="text-white hover:text-gray-300">About</Link></li>
                            <li><Link to="contact" className="text-white hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* <!-- Right-aligned Sign In/Sign Up --> */}

                    {!status ? (


                        <div className="flex items-center space-x-8">
                            <Link to="login" className="text-white hover:text-gray-300 bg-blue-600 rounded-xl p-3">Sign In</Link>
                            <Link to="signup" className="text-white hover:text-gray-300 ml-4 bg-orange-400 rounded-xl p-3">Sign Up</Link>
                        </div>

                    ) : (


                        <div className="flex items-center space-x-8">
                            <Link to="#" className="text-orange-400 font-bold">Welcome : {logedIndata.fullName}</Link>
                            <Link to="#" className="text-black hover:text-gray-300 ml-4 bg-red-400 rounded-xl p-3"
                                onClick={handleLogOut}
                            >LogOut</Link>
                        </div>

                    )}


                    {/* <!-- Mobile menu button --> */}
                    <div className="sm:hidden">
                        <button className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}
