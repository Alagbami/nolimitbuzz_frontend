import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { User } from '../types';

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
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-lg text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center sm:text-4xl lg:text-5xl">
          User List
        </h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-700 font-semibold text-sm sm:text-base">
                  Name
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-700 font-semibold text-sm sm:text-base">
                  Email
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-700 font-semibold text-sm sm:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="border border-gray-200 px-4 py-2 text-sm sm:text-base">
                    {user.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm sm:text-base">
                    {user.email}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <Link
                      to={`/user/${user.id}`}
                      className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-9">
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





