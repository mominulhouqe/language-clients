import React, { useState } from 'react';

const InstructorsClass = () => {
  const [classes, setClasses] = useState([]);

  const handleAddClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  const handleUpdateClass = (classId, updatedClass) => {
    const updatedClasses = classes.map((c) =>
      c.id === classId ? updatedClass : c
    );
    setClasses(updatedClasses);
  };

  const renderClasses = () => {
    if (classes.length === 0) {
      return <p>No classes added yet.</p>;
    }

    return classes.map((c) => (
      <div key={c.id}>
        <h3>{c.className}</h3>
        <p>Status: {c.status}</p>
        {c.status === 'denied' && <p>Feedback: {c.feedback}</p>}
        <p>Total Enrolled Students: {c.enrolledStudents.length}</p>
        <button onClick={() => handleUpdateClass(c.id, { ...c, status: 'approved' })}>
          Update
        </button>
      </div>
    ));
  };

  return (
    <div>
      <h1>My Classes</h1>
      {renderClasses()}
    </div>
  );
};

export default InstructorsClass;
