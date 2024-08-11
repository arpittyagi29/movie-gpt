import React, { useState } from 'react'
import Header from './Header'
import { Form } from 'react-router-dom'

const Login = () => {
  const[isSignInForm,setItSignForm]=useState(true);
  const toggleSignInForm=()=>{
    setItSignForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg' alt ="Bg-Img"/>
      </div>
      <Form className='p-12 bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80'>
      <h1 className='font-bold text-4xl p-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type='Password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        {!isSignInForm && <input type='Password' placeholder='Re-enter Password' className='p-4 my-4 w-full bg-gray-700'/>}
        <button className='p-4 col bg-red-700 align-middle  my-4 w-full rounded-xl' >{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 px-2 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm?"New to MovieFLex ? SignUp Now":"Already Registered... Sign In"}</p>
      </Form>
    
    </div>
  )
}

export default Login