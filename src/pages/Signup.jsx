import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import olxLogo from '../assets/olx-logo.png'
import { UserAuth } from '../context/AuthContext'


const Signup = () => {

    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signUp} = UserAuth()  
    const navigate = useNavigate()
    const handleCreate = async(e) => {
        e.preventDefault()
        try{
            await signUp(username, phone, email, password)
            navigate('/login');
        }catch(error){
            alert(error);
        }
    };

    return (
        <div className='bg-gray-100 grid grid-cols-12 h-screen pb-5'>
    
          <span className='col-span-4'></span>
          <div className='col-span-4 m-10 bg-white h-3/3 my-auto rounded-xl'>
    
          <Link to={'/'}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-7 w-7 h-7 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg></Link>
            <div className='mx-auto text-center'>
              <img className='p-2 w-24 mx-auto' src={olxLogo} alt="" />
    
              <h1 className='font-bold text-xl mt-6'>Create your Account </h1>
    
              <input onChange={(e) => setUsername(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-10 border-black' type="text" placeholder='Username' />
              <input onChange={(e) => setPhone(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Phone Number' />
              <input onChange={(e) => setEmail(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Email' />
              <input onChange={(e) => setPassword(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="password" placeholder='Password' />
    
              <button onClick={handleCreate} className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-6'>Create</button>
    
              <Link to={'/login'}><p className='underline my-5'>Login with Account</p></Link>
    
            </div>
          </div>
          <span className='col-span-4'></span>
    
    
        </div>
      )
}

export default Signup
