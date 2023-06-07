import React from 'react';
import { useParams } from 'react-router-dom';

const InstructorClasses = () => {
  const { instructorId } = useParams();
console.log(instructorId);
  // Fetch instructor data based on the instructorId from your data source or API

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Classes Taken by Instructor</h2>
      {/* Render the classes taken by the instructor */}
    </div>
  );
};

export default InstructorClasses;
