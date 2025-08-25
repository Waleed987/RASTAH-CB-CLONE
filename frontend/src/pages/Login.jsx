import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import { jwtDecode } from "jwt-decode";



function Login() {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email:"",
    password:""
  });

  const handleUserLoginChange = async(e)=>{
    const {name,value} = e.target;
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleUserLoginSubmit = async (e) => {
    e.preventDefault()
    try {
          const res = await axios.post("http://localhost:5000/api/user/login",user);
          console.log(res.data);
         
          if(res.data.token){
            const decoded = jwtDecode(res.data.token);
            localStorage.setItem('token',res.data);
          
            if(decoded.isAdmin === true){
             
              navigate('/admin');
            }
            else{
              console.log(decoded);
              navigate('/home');
            }
          }

          setUser({
            email:"",
            password:""
          })
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gradient-to-br from-black via-blue-900 to-slate-900'>
        <div className='rounded-[20px] signupform px-3 py-9 flex flex-col  h-auto w-[clamp(400px,30%,80%)] bg-black border border-white space-y-6'>
            <h1 className='text-white text-2xl space-y-4 text-center border-b-2 pb-5'>Sign in</h1>
            <div className='p-2 email border-2 space-y-3 flex flex-col justify-center border-b'>
                <h2 className='text-white text-xl'>Email</h2>
                <input 
                  name="email" 
                  onChange={handleUserLoginChange} 
                  value={user.email} 
                  className='border w-[99%] h-10 rounded-[10px] bg-white hover:border-blue-400'
                  placeholder="Enter your email"
                />
            </div>

            <div className='p-2 email border-2 mb-3 space-y-3 flex flex-col justify-center'>
                <h2 className='text-white text-xl'>Password</h2>
                <input 
                  name="password" 
                  type="password"
                  onChange={handleUserLoginChange} 
                  value={user.password} 
                  className='border w-[99%] h-10 rounded-[10px] bg-white hover:border-blue-400 mb-1'
                  placeholder="Enter your password"
                />
                <a href='/resetpassword' className='font-serif text-red-500 text-right mr-[20px]'>Forgot Password</a>
            </div>
            <div className='w-full h-auto flex justify-center'>
         
            <button onClick={handleUserLoginSubmit} className='bg-white text-xl w-[150px] py-2 rounded-[10px]'>Sign in</button>
            <button className='bg-white'><Link to='/signup'>Signup</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Login    