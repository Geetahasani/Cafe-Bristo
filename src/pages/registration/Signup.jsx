import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import Context from "../../context/data/Context";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fireDB, auth } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const signup = async () => {
    
    if (name === "" || email === "" || password === "") {
        return toast.error("All fields are required")
    }

    try {
        const users = await createUserWithEmailAndPassword(auth, email, password);

         console.log(users)

        const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
            time : Timestamp.now()
        }
        const userRef = collection(fireDB, "users")
        await addDoc(userRef, user);
        toast.success("Signup Succesfully")
        setName("");
        setEmail("");
        setPassword("");
        
        
    } catch (error) {
        console.log(error)
        toast.error(error.message);
        
    }
}
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://static.india.com/wp-content/uploads/2014/10/coffee.jpg')" }}>
      
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md "></div>
      
      <div className=" p-8 rounded-lg shadow-2xl w-80 z-10 relative ring-1  ">
        <div className="flex justify-center mb-6">
            <img className="h-10" src="https://cdn-icons-png.flaticon.com/128/3848/3848218.png" alt="" />
        </div>
        <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 text-white bg-gray-700 bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 text-white bg-gray-700 bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 text-white bg-gray-700 bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
         onClick={signup}
         className="w-full p-2 text-white bg-orange-500 rounded hover:bg-orange-600">
          Signup
        </button>
        <p className="mt-4 text-center text-white">
          Already have an account? <Link className=' font-bold text-orange-400 cursor-pointer' to={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;