import { useState } from 'react'
import ConForm from './ConForm'
import mgImage from '../assets/mg.png';
import cgImage from '../assets/cg.png';
function Sidebar() {


  return (
    <>
      


 
<div className="h-screen w-screen flex bg-gray-200">


	<aside
		className="flex flex-col items-center bg-white text-gray-700 shadow h-full">


		<div className="h-16 flex items-center w-full">

			<a className="h-6 w-6 mx-auto" >
      <img src={cgImage} alt="Description" className="h-6 w-6 mx-auto" />
			</a>
		</div>

		<ul className=''>

			<li className="hover:bg-gray-100 flex justify-center">

      <button type="button" class="m-3 flex justify-center items-center p-3 text-sm font-medium text-center text-white bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg shadow-lg backdrop-blur-md transition duration-300 ease-in-out hover:bg-opacity-20 focus:ring-4 focus:ring-blue-300">
      <p className='text-black font-bold'>MG</p>
    </button>
					

				
			</li>

			<li className="hover:bg-gray-100">

			</li>

			<li className="hover:bg-gray-100 flex justify-center ">
      <button type="button" class="m-3 flex justify-center items-center p-3 text-sm font-medium text-center text-white bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg shadow-lg backdrop-blur-md transition duration-300 ease-in-out hover:bg-opacity-20 focus:ring-4 focus:ring-blue-300">
      <p className='text-black font-bold'>CG</p>
    </button>
			</li>

			<li className="hover:bg-gray-100 flex justify-center ">
      <button type="button" class="m-3 flex justify-center items-center p-3 text-sm font-medium text-center text-white bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg shadow-lg backdrop-blur-md transition duration-300 ease-in-out hover:bg-opacity-20 focus:ring-4 focus:ring-blue-300">
      <p className='text-black font-bold'>AG</p>
    </button>
			</li>

			<li className="hover:bg-gray-100 flex justify-center ">
      <button type="button" class="m-3 flex justify-center items-center p-3 text-sm font-medium text-center text-white bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg shadow-lg backdrop-blur-md transition duration-300 ease-in-out hover:bg-opacity-20 focus:ring-4 focus:ring-blue-300">
      <p className='text-black font-bold'>SL</p>
    </button>
			</li>



		</ul>



	</aside>
  <main className='flex flex-row items-top bg-white text-gray-700 shadow h-full w-full overflow-hidden '>
      <ConForm></ConForm>
  </main>
</div>


    </>
  )
}

export default Sidebar
