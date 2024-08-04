import React from 'react';
import Navbar from '@/Components/Navbar';


const FormComponent = () => {
  return (
    <div>
    <Navbar />
 
 
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Issue</label>
          <input type="text" id="firstName" name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Issue" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Description</label>
          <input type="text" id="lastName" name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Description about the issue" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default FormComponent;
