import React from 'react';

export default function Login() {
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
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            className="h-10 w-96 border bg-slate-400 px-4 py-2 mt-2 text-gray-700  rounded-md focus:border-slate-400
                             focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="h-10 w-96 border bg-slate-400 mt-2 px-2
                             text-gray-700 rounded-md focus:border-slate-400
                             focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                    <button
                        className='rounded text-white font-semibold bg-slate-900 py-2 px-8 hover:bg-indigo-500'>
                           Login
                   </button>
                    </div>
                </form>
            </div>
        </div>
    );
}