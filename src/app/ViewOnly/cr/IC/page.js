"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Image from 'next/image'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { render } from 'react-dom'


const myFunction = async () => {
  // run asynchronous tasks here
  const res = await axios.get('http://54.174.251.56:8080/issue/labIssue?department=cr&labno=1')
  return res.data;
}

export default function Page() {

  const [bool,setBool] = useState(false);
  const [data,setData] = useState([]);
  const [token,setToken] = useState(null);
  const [render,setRender] = useState(false);


  useEffect(() =>{
    const val = myFunction().then(data => setData(data))    
    const valToken =  window.localStorage.getItem('user');
    console.log(valToken)
    if(bool != null){
      setBool(true)
      setToken(valToken)
    }
},[render])


  return (
    <div>
   <Navbar/>
   
   

{/* hero section starts */}
<section
  className="overflow-hidden bg-[url(https://www.materials-talks.com/wp-content/uploads/2023/05/PN11525_037_FRKL__Hero-Header-1920x675-1-1024x360.jpg)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Instrument Characteristics</h2>

      <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
        This lab has experiments like Xray Diffraction , BET, UV etc for finding the properties of the materials.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Info
        </a>
      </div>
    </div>
  </div>
</section>
{/* hero section ends */}
{/* issues sections  */}
<section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Pending issues</h2>

      <p className="mt-4 text-gray-300">
       All the pending issues that needs to be Solved
      </p>
    </div>

    
    <div className="mt-8 grid grid-flow-cols md:grid-flow-row">
    

      {data.map((issue,i) =>{
         return <div
        key={i}  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">{issue.issue}</h2>
        <div class="flex justify-end">
        <button hidden={!bool} onClick={async() =>{
                      await fetch(`http://54.174.251.56:8080/admin/deleteIssue?id=${issue.id}&labno=${issue.labno}&department=${issue.department}`, {
            method: "DELETE",
            headers: { 'Authorization': `Bearer ${JSON.parse(token).token}` },

        })
        setRender(!render);
        

                }} >
           <strong 
            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
          >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
               />
             </svg>

               <span  class="text-[10px] font-medium sm:text-xs">
                 Solved
              </span>
           </strong> 
        </button>
        
    
  </div>

        <p className="mt-1 text-sm text-gray-300">
         {issue.description}
        </p>
      </div>
       })}

     
    <div className="mt-12 text-center">
      <a
        href="#"
        className="inline-flex rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
       View More
      </a>
    </div>
    <div className="mt-12 text-center">
      <a
        href="/ViewOnly/cr/IC/createissue"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
      <div><i class="fa-solid fa-plus"></i></div>
      
       Add Issue

      </a>
    </div>
  </div>
  </div>
</section>
{/* issue ends */}
{/* lab assistants  */}

<section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
      Lab Assistants
    </h2>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
        <Image
            alt=""
            src="/Assets/assistant2.jpg"
            className="size-14 rounded-full object-cover"
            width={20}
            height={20}
          />
          <div>
           

            <p className="mt-0.5 text-lg font-medium text-gray-900">Akash Tiwari</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
        
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        
          
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            alt=""
            src="/Assets/assistant1.jpg"
            className="size-14 rounded-full object-cover"
            width={20}
            height={20}
          />

          <div>
           

            <p className="mt-0.5 text-lg font-medium text-gray-900">Tushar saini</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
        <Image
            alt=""
            src="/Assets/assistant3.jpg"
            className="size-14 rounded-full object-cover"
            width={20}
            height={20}
          />

          <div>
           

            <p className="mt-0.5 text-lg font-medium text-gray-900">Shekhar yadav</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>
    </div>
  </div>
</section>
<Footer />
</div>
  )
}