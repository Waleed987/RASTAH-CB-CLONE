import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const clientId = "659328278975-tvtk5plab7t388ma3gqetd2q0te5lchb.apps.googleusercontent.com"

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
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userData', JSON.stringify({
              userId: decoded.userId || decoded._id,
              isAdmin: decoded.isAdmin
            }));
          
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

  // Google OAuth success handler
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log('Google OAuth success:', credentialResponse);
      
      // Decode the JWT token from Google
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded Google user:', decoded);
      
      // Extract user information from Google response
      const googleUser = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        googleId: decoded.sub
      };
      
      // Send Google user data to your backend for authentication
      const res = await axios.post("http://localhost:5000/api/user/google-login", googleUser);
      
      if(res.data.token){
        const userDecoded = jwtDecode(res.data.token);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify({
          userId: userDecoded.userId || userDecoded._id,
          isAdmin: userDecoded.isAdmin
        }));
        
        if(userDecoded.isAdmin === true){
          navigate('/admin');
        } else {
          console.log(userDecoded);
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Google login error:', error);
      alert('Google login failed. Please try again.');
    }
  };

  // Google OAuth error handler
  const handleGoogleError = () => {
    console.log('Google OAuth failed');
    alert('Google login failed. Please try again.');
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gradient-to-br from-black via-blue-900 to-slate-900'>
        <div className='rounded-[20px] signupform px-3 py-9 flex flex-col  h-auto w-[clamp(400px,30%,80%)] bg-black border border-white space-y-6'>
            <h1 className='text-white text-2xl space-y-4 text-center border-b-2 pb-5'>Sign in</h1>
            
            {/* Google OAuth Button */}
            <div className='flex justify-center mb-4'>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
                theme="filled_black"
                size="large"
                text="signin_with"
                shape="rectangular"
                width="300"
              />
            </div>
            
            {/* Divider */}
            <div className='flex items-center'>
              <div className='flex-1 border-t border-gray-600'></div>
              <span className='px-3 text-gray-400 text-sm'>or</span>
              <div className='flex-1 border-t border-gray-600'></div>
            </div>
            
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