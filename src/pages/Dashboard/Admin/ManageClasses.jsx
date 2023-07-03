import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { MdCheck, MdClear, MdChat } from 'react-icons/md';

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [status, setStatus] = useState('pending');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: classes = [] } = useQuery('classes', async () => {
    const res = await axiosSecure('/classes');
    return res.data;
  });

  const handleApprove = (classId) => {
    setStatus('approved');
  };

  const handleDeny = (classId) => {
    setStatus('denied');
  };

  const handleSendFeedback = (classId) => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFeedbackSubmit = () => {
    // Logic to send feedback and update status
    setStatus('approved'); // Assuming the feedback was sent successfully and the status is updated
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Manage Classes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border divide-y divide-gray-200">
          {/* Head */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Seats</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {classes.map((cls) => (
              <tr key={cls._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={cls.image} alt={cls.name} className="h-12 w-12 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.instructor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.availableseats}</td>
                <td className="px-6 py-4 whitespace-nowrap">${cls.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="btn btn-success btn-sm" onClick={() => handleApprove(cls._id)} disabled={status === 'approved' || status === 'denied'}>
                    <MdCheck className="inline-block mr-1" />
                    Approve
                  </button>
                  <button className="btn btn-error btn-sm" onClick={() => handleDeny(cls._id)} disabled={status === 'approved' || status === 'denied'}>
                    <MdClear className="inline-block mr-1" />
                    Deny
                  </button>
                  <button className="btn btn-neutral btn-sm" onClick={() => handleSendFeedback(cls._id)} disabled={status === 'approved' || status === 'denied'}>
                    <MdChat className="inline-block mr-1" />
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
            <textarea className="w-full h-20 mb-4" placeholder="Enter feedback here..." />
            <div className="flex justify-end">
              <button className="btn btn-neutral mr-2" onClick={handleFeedbackSubmit}>
                Send
              </button>
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
