import { useState } from 'react';
import { BuildingLibraryIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';

function ConfigCon() {
  return (
    <>
            <div className="queryContainer flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Connect to Database</h2>
          <form className="space-y-6" >
            <div className="relative">
              <BuildingLibraryIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="host"
                placeholder="Database Host"

                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </form>
        </div>
        
      </div>
    </>
  );
}

export default ConfigCon;
