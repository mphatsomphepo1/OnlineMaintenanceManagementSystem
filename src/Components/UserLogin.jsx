import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginUser } from '../Services/UserService';
import { doLogin } from '../auth/Auth';
import swal from 'sweetalert'

export default function UserLogin() {

    const navigate = useNavigate()
    const [logindetail, setLogindetail] = useState({
        userName: '',
        userPassword: ''
    });

    const handleChange = (event, field) => {
        let actualValue = event.target.value
        setLogindetail({
            ...logindetail,[field]: actualValue
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(logindetail);
        // handle validation
        if(logindetail.userName.trim() ==="" || 
          logindetail.userPassword.trim() ==="") {
            swal("Error!", "Username & Password is required", "error");
            return;
        }
        // submit data to server
        LoginUser(logindetail).then((jwtTokenData)=> {
            console.log("User Login: ")
            let userRoles =jwtTokenData.user.role 
            let isUser = false;
            userRoles.map(async (role) => {
                if(role.roleName === "User"){
                    isUser = true;
                    swal({
                        title: "Good job!",
                        text: "Logged Successfull",
                        icon: "success",
                        button: "Aww yiss!",
                      });
                    navigate("/addreport")
                }
            })
            // console.log(jwtTokenData.user.role )
            console.log(jwtTokenData.user.role )
            // save the data to localStorage
            doLogin(jwtTokenData, ()=>{
                console.log("Login details saved to localStorage")
            })
            // toast.success("User Login is Successful")
           if(isUser === false){
            swal("Not Authorized!", "Not a User", "error");
           }
        }).catch(error => {
            console.log(error)
            if(error.response.status===401 || error.response.status===404){
                toast.error(error.response.data.message)
            }
            toast.error("something went wrong on server ")
        })
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b ">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1 >
                    Sign in as Student
                    </h1>
                </div>
                <form className="mt-6" onSubmit={handleFormSubmit}>
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
                            value={logindetail.userName}
                            onChange={(e) => handleChange(e, 'userName')}
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
                            value={logindetail.userPassword}
                            onChange={(e) => handleChange(e, 'userPassword')}
                            className="h-10 w-96 border  bg-slate-100 mt-2 px-2
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