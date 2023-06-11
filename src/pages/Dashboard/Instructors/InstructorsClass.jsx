import React, { useContext, useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import useAuth from '../../../hooks/useAuth';
import { AuthContext } from '../../../provider/AuthProvider';


const InstructorsClass = () => {

  const { user, loading } = useContext(AuthContext);
  const [menu] = useMenu();

  const renderUserItems = () => {
    const filteredItems = menu.filter((item) => item.email === user?.email);

    if (loading) {
      return (
        <div className="flex items-center justify-center h-full">

          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      );
    }

    if (filteredItems.length === 0) {
      return <p className="text-gray-600 text-lg">No Class items found.</p>;
    }

    return filteredItems.map((item) => (
      <div
        key={item._id}
        className="bg-white w-full mx-6 shadow-md rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-96  rounded-2xl mr-4 mb-4 md:mb-0"
        />
        <div className='mx-6' >
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-2">Name: {item.instructor}</p>
          <p className="text-gray-600">Available Seats: {item.availableseats}</p>
          <p className="text-gray-600">Price: ${item.price}</p>
          <p className="text-gray-600">
            Status: {item.status === 'pending' ? 'Pending' : item.status === 'approved' ? 'Approved' : 'Denied'}
          </p>
          <p className="text-gray-600">
            {/* Total Enrolled Students: {item.enrolledStudents.length} */}
          </p>
          {item.status === 'denied' && (
            <div className="mt-2">
              <p className="text-gray-600">Feedback: {item.feedback}</p>
            </div>
          )}
          <button className="btn btn-primary hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4">
            Update
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      {renderUserItems()}
    </div>
  );
};

export default InstructorsClass;






// const handleAddClass = (newClass) => {
  //   setClasses([...classes, newClass]);
  // };

  // const renderClasses = () => {
  //   const instructorClasses = classes.filter((c) => c.instructorEmail === user?.email);

  //   if (instructorClasses.length === 0) {
  //     return <p>No classes added yet.</p>;
  //   }

  //   return instructorClasses.map((c) => (
  //     <div key={c.id} className="bg-gray-100 p-4 mb-4">
  //       <h3 className="text-xl font-bold">{c.name}</h3>
  //       <p className="mb-2">Status: {c.status}</p>
  //       {c.status === 'denied' && <p>Feedback: {c.feedback}</p>}
  //       <p>Total Enrolled Students: {c.enrolledStudents.length}</p>
  //       <button
  //         className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
  //         onClick={() => handleUpdateClass(c.id, { ...c, status: 'approved' })}
  //       >
  //         Update
  //       </button>
  //     </div>
  //   ));
  // };