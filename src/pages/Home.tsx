import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { User } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-100 to-blue-200 p-6">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 text-center">
          User List
        </h1>

        <div className="overflow-x-auto bg-white shadow-xl rounded-lg p-6">
          <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="border border-gray-200 px-6 py-3 text-left text-base font-medium">Name</th>
                <th className="border border-gray-200 px-6 py-3 text-left text-base font-medium">Email</th>
                <th className="border border-gray-200 px-6 py-3 text-left text-base font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-blue-100 transition-all rounded-lg shadow-sm`}
                >
                  <td className="border border-gray-200 px-6 py-4 text-sm sm:text-base">{user.name}</td>
                  <td className="border border-gray-200 px-6 py-4 text-sm sm:text-base">{user.email}</td>
                  <td className="border border-gray-200 px-6 py-4">
                    <Link
                      to={`/user/${user.id}`}
                      className="inline-block px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Alagbami/nolimitbuzz_frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm sm:text-base"
          >
            Visit my GitHub for more details on the README
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;


