import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';


export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const getData = async () => {
            try {
                const response = await fetch(`https://6750666869dc1669ec1afc0f.mockapi.io/auth/`)
                const data = await response.json();
                const filterData = data.filter((el) => {
                    return el.firstName.toLowerCase() == username.toLowerCase() && el.password.toString() == password.toString();
                }
                )
                console.log(filterData, "enter");
                if (filterData.length > 0) {
                    console.log(filterData);
                    //Navigate to home
                    const id = filterData[0].id;
                    console.log(id, "yyyyyy");
                    localStorage.setItem('userId', id);
                    // console.log("Stored User ID in localStorage:", localStorage.getItem('userId'));
                    toast(' Login Successfull!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    navigate(`/home`)

                } else {
                    console.log("invalid input", filterData.length);
                    setError('Invalid username or password.')
                    errorMessage.textContent = 'Invalid username or password.';
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getData();

    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 mb-10">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <img src="https://www.envistaforensics.com/media/jsunplk3/adobestock_346159155.jpeg?anchor=center&mode=crop&width=900&height=447&rnd=132893360860700000&format=webp&quality=80" alt="" />
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">My Fitness Tracker - Login</h2>

                    <form id="login-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="input-group">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="input-group">
                            <button type="submit"  className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <NavLink to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign Up</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

