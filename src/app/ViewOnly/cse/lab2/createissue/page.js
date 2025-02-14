"use client"
import React from 'react';
import Navbar from '@/Components/Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { error } from 'console';

const FormComponent = () => {

  const [department,setDepartment] = useState("")
  const [issue,setIssue] = useState("") 
  const [labno,setlabno] = useState() 
  const [status,setStatus] = useState("")
  const [description,setDescription] = useState("") 
  const [bool,setBool] = useState(false);
  const [token,setToken] = useState(null);
  const [render,setRender] = useState(false);
  
  const AddIssue = async(e)=>{
    e.preventDefault();
    setDepartment('')
    setIssue('');
    setlabno();
    setStatus('');
    setDescription('');
    axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://54.174.251.56:8080/admin/issue',
      headers: { 
         'Authorization': `bearer ${JSON.parse(token).token}`, 
         'Content-Type': 'application/json'
      },
     data : JSON.stringify({
       "department": "cse",
       "issue": issue,
       "labno": 2,
       "status": "notcompleted",
       "description": description
       })
      }).then((response) =>{
        console.log(response.data.newIssue)
     }).then(() => {
      window.location.href = "/ViewOnly/cse/lab2"
     })}
  
  useEffect(() =>{
    const valToken =  window.localStorage.getItem('user');
    console.log(valToken)
    if(bool != null){
      setBool(true)
      setToken(valToken)
    }
},[])
  return (
    <div>
    <Navbar />
 
 
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Issue</label>
          <input  type="text" id="firstName" name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Issue" onChange={(e) => { setIssue(e.target.value) }} value={issue} />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Description</label>
          <input type="text" id="lastName" name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Description about the issue" onChange={(e) => { setDescription(e.target.value) }} value={description} />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={AddIssue}  type="reset" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default FormComponent;
