import React from 'react';
import { useQueryClient } from 'react-query';
// import { useHistory } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {
//   const history = useHistory();
  const queryClient = useQueryClient();
  const [axiosSecure] = useAxiosSecure();

  const selectedClasses = queryClient.getQueryData('selectedClasses') || [];

  const handlePay = async (classId) => {
    // Redirect to payment page
    // history.push(`/payment/${classId}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Selected Classes</h1>
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="btn btn-primary btn-sm" onClick={() => handlePay(cls.id)}>
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
