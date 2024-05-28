import { useState } from 'react';
import { BuildingLibraryIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';

function ConForm() {
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [formData, setFormData] = useState({
    host: '',
    port: '',
    dbName: '',
    username: '',
    password: '',
    connectionName: '',
    query: ''
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await window.electron.connectToDB(formData);
      setResponse(result);
      console.log(result);
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  };

  return (
    <>
      <div className="QueryWindow">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Connect to Database</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <BuildingLibraryIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="host"
                placeholder="Database Host"
                value={formData.host}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <BuildingLibraryIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="port"
                placeholder="Port"
                value={formData.port}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <BuildingLibraryIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="dbName"
                placeholder="Database Name"
                value={formData.dbName}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <BuildingLibraryIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="connectionName"
                placeholder="Connection Name"
                value={formData.connectionName}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowQueryModal(true)}
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Enter Query
            </button>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Connect
            </button>
          </form>
        </div>
      </div>
      
      {showQueryModal && (
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md '>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4">Enter Your Query</h2>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Query"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => setShowQueryModal(false)}
                  className="py-2 px-4 bg-gray-500 text-white font-bold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowQueryModal(false)}
                  className="py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {response && (
        <div className='QueryResultWindow p-8'>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Query Result</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
        </div>
        </div>
      )}
    </>
  );
}

export default ConForm;
