import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Enrollied = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClasses = [] } = useQuery('selectedClasses', async () => {
    const res = await axiosSecure('/selected-classes');
    return res.data;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Classes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border divide-y divide-gray-200">
          {/* Head */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {selectedClasses.map((cls) => (
              <tr key={cls.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={cls.image} alt={cls.name} className="h-12 w-12 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.instructor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.instructorEmail}</td>
                <td className="px-6 py-4 whitespace-nowrap">${cls.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enrollied;
