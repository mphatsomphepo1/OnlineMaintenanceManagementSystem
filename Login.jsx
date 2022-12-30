import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginUser } from '../Services/UserService';
import { doLogin } from '../auth/Auth';

export default function Login() {

    const navigate = useNavigate()
    // const [logindetail, setLogindetail] = useState({
    //     userName: '',
    //     userPassword: ''
    // });
    const [userName, setUserName] = useState("");
    const [userPassword, setuserPassword] = useState("");

    function handlesubmit() {
        console.log(userName);
        console.log(userPassword);
        const request = {
            userName: userName,
            userPassword: userPassword
        };

        fetch("http://localhost:9090/authenticate",{
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(request) 
        });

    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b ">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1 >
                    Sign in
                    </h1>
                </div>
                <form className="mt-6">
                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id='userName'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="h-10 w-96 border  bg-slate-100 px-4 py-2 mt-2 text-gray-700  rounded-md focus:border-slate-400
                             focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id='userPassword'
                            value={userPassword}
                            onChange={(e) => setuserPassword(e.target.value)}
                            className="h-10 w-96 border  bg-slate-100 mt-2 px-2
                             text-gray-700 rounded-md focus:border-slate-400
                             focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                    <button
                    onClick={()=> handlesubmit()}
                        className='rounded text-white font-semibold bg-slate-900 py-2 px-8 hover:bg-indigo-500'>
                           Login
                   </button>
                    </div>
                </form>
            </div>
        </div>
    );
}