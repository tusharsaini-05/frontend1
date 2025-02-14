"use client"
import React from 'react'
import Navbar from '../../Components/Navbar'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import axios from 'axios'
const myFunction = async () => {
  // run asynchronous tasks here
  const res = await axios.get('http://44.201.225.87:8080/issue/numIssue/')
  console.log(res.data)
  return res.data;
}


export default function Page() {

  const [numIssues,setNum] = useState(0);
  useEffect(() =>{
    const val = myFunction().then((data) => setNum(data))
    
},[])
  
  return (

    <div>
   <Navbar/>
   {/* hero section starts */}
 
<section
  className="relative bg-[url(https://images.shiksha.com/mediadata/images/1607331878phpYmd02Y.jpeg)] bg-cover bg-center bg-no-repeat brightness-70 opacity-90"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        NITR LABS

        <strong className="block font-extrabold text-blue-700"> MANAGER </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        Get All Labs Data under one page
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white shadow-md hover:shadow-lg focus:outline-none focus:ring active:bg-rose-500 sm:w-auto hover:-translate-y-1 transition"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-blue-900 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

{/* hero section ends */}

<div class="text-center p-10 bg-gray-900">
    <h1 class="font-bold text-4xl mb-4 text-white">All Departments</h1>
    


{/*   Grid Section - Starts Here  */}
<div class = "bg-gray-900">
<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-14 mt-1 mb-5 ">

   {/*  department 1*/}
    <div class="w-50 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/ViewOnly/cse">
            <Image src="/Assets/icon.jpg"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" width={50} height={50}/>
            <div class="px-4 py-3 w-72">
                
                <p class="text-lg font-bold text-black truncate block capitalize">Computer Science and Engineering</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">3 labs</p>
                    
                   
                </div>
            </div>
        </a>
    </div>
    {/*  Ends Here */}


    {/*  department 2  */}
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/ViewOnly/ee">
            <Image src="/Assets/ee-logo.jpg"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" width = {50} height = {50} />
            <div class="px-4 py-3 w-72">
                
                <p class="text-lg font-bold text-black truncate block capitalize">Electrical Engineering</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">3 labs</p>
                    
                   
                </div>
            </div>
        </a>
    </div>

   {/* 2 ends  */}

   {/* 3 starts */}
   <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/ViewOnly/cr">
            <img src="/Assets/cr.png"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                
                <p class="text-lg font-bold text-black truncate block capitalize">Ceramic Engineering</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">3 labs</p>
                    
              
                </div>
            </div>
        </a>
    </div>
    {/* 3 ends */}


   

</section>
</div>
</div>

{/* Grid Section - Ends Here */}

{/* Stats section starts */}

<section class="bg-gradient-to-r from-blue-900 to-black  w-full">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold text-white sm:text-4xl dark:text-white">
        Labs @NITR at a glance
      </h2>

      <p class="mt-4 text-white sm:text-xl dark:text-white">
      Engineering is not only about making things
      work, but about making things work better.
      </p>
    </div>

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
          <dt class="order-last text-lg font-medium text-gray-500 dark:text-white/75">
            Labs
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">50+</dd>
        </div>

        <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
          <dt class="order-last text-lg font-medium text-gray-500 dark:text-white/75">
            Issues Solved
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">100+</dd>
        </div>

        <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
          <dt class="order-last text-lg font-medium text-gray-500 dark:text-white/75">
            Pending Issues
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">{numIssues}</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

{/* stats end */}


    </div>
  )
}
