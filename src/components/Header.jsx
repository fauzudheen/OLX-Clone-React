import React from 'react'
import { FaPlus } from 'react-icons/fa';
import olxLogo from '../assets/olx-logo.png';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    const handleLogOut = async() => {
        try{
            await logOut()
            navigate('/login')
          }catch(error){
            alert(error)
          } 
    }

    return (
        <div className='grid grid-cols-12 bg-gray-100 h-18 py-1'>
          <div className='col-span-2 flex '>
           <img className='p-4 w-20' src={olxLogo} alt="" />
           <input type="text" placeholder='Your Location' className='px-1 my-2 py-2 border-2 border-dark-teal rounded'/>
          </div>
          <div className='col-span-7 ml-14 flex px-3'>
            <input type="text" className='border-2 border-dark-teal ms-3 px-1 my-2 py-2 w-full rounded' placeholder='Find Cars,Mobile Phones and More...' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-12 h-11 p-2.5 mt-2 mb-1 cursor-pointer border border-black bg-dark-teal text-white rounded-r-lg ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div className='col-span-3'>
            <div className="right-nav flex flex-1 h-full items-center justify-around">
              {/* <div  className='nav-text text-dark-teal hover:text-cyan-800 hover:cursor-pointer font-bold text-sm'>ENGLISH</div> */}
              {user ? (
                <>
                <Link to='/SellProduct'>
              <button className='nav-text px-6 py-1 bg-white rounded-3xl sell-button flex items-center'><FaPlus className='mr-1' />SELL</button>    
                </Link>
              <span className="text-blue-700 font-bold uppercase border rounded p-1 bg-blue-600 bg-opacity-20">{user.displayName}</span>
              <span onClick={handleLogOut} className='flex cursor-pointer'>Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
              </svg>
              </span>
                </>
              ) : (
                <>
              <Link to={'/login'}>
              <div className='nav-text underline hover:cursor-pointer font-bold'>Login</div>
              </Link>
              <Link to={'/signup'}>
              <div className='nav-text underline hover:cursor-pointer font-bold'>Signup</div>
              </Link>
                </>
              )}
             
            </div>
          
          </div>
    
        </div>
      )
      
}

export default Header
