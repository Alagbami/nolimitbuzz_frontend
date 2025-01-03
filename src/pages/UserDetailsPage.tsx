import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { User } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error('Error fetching user details:', error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-red-600 text-lg text-white font-semibold">
        User not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-blue-600 hover:underline inline-block mb-6 text-sm sm:text-base font-medium"
        >
          &#8592; Back to Home
        </Link>
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            {user.name}
          </h1>
          <div className="text-gray-800 space-y-4 text-lg sm:text-xl">
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-semibold">Website:</span>{' '}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </p>
            <p>
              <span className="font-semibold">Address:</span>{' '}
              {`${user.address.street}, ${user.address.city}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
