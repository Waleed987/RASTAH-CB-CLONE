import { useState } from "react";
import axios from "axios";


function Signup(){
    const [user ,setUser] = useState({
        username:"",
        email:"",
        password:"",
        isAdmin:false
    })

    const handleUserFormChange = async(e)=>{
        const {name,value} = e.target;
        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }


    const handleSignUpSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/user/signup",user);
            console.log(res.data.message);
            alert("User added Successfully");

            setUser({
                username:"",
                email:"",
                password:"",
                isAdmin:false
            });
        } catch (error) {
            alert(error.message);
        }
    }
    return(
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <form onSubmit={handleSignUpSubmit} className="h-100 w-100 border-2 flex flex-col p-5 space-y-6">
                    <input onChange={handleUserFormChange} type="text" name="username" value={user.username} className="border-2 w-full h-10"></input>
                    <input onChange={handleUserFormChange} type="email" name="email" value={user.email}  className="border-2 w-full h-10"></input>
                    <input onChange={handleUserFormChange} type="password" name="password" value={user.password} className="border-2 w-full h-10"></input>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </>
    )
}

export default Signup;