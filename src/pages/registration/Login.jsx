import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { auth  } from '../../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



    const signin = async () => {
        
        try {
          await signInWithEmailAndPassword(auth, email, password)
         
          toast.success('Signin Successfully');
          window.location.href='/'
          
        } catch (error) {
            console.log(error);
          toast.error('Sigin Failed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          
        }
      }
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://static.india.com/wp-content/uploads/2014/10/coffee.jpg')" }}>
      
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md "></div>
      
      <div className=" p-8 rounded-lg shadow-2xl w-80 z-10 relative  bg-neutral-300/30">
      
        <div className="flex justify-center mb-6">
            <img className="h-10" src="https://cdn-icons-png.flaticon.com/128/3848/3848218.png" alt="" />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 text-black bg-neutral-200 bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 text-black bg-neutral-200 bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button
            onClick={signin}
         className="w-full p-2 text-white bg-neutral-700 rounded hover:bg-neutral-600">
          Login
        </button>
        <p className="mt-4 text-center text-white">
          Don't have an account? <Link className=' font-bold text-red-400 cursor-pointer' to={'/signup'}>Create an Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;