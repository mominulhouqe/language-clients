import React from 'react';

const instructors = [
  // Replace these dummy instructor data with your actual instructor data
  {
    id: 1,
    name: 'John Doe',
    image: 'instructor1.jpg',
    email: 'johndoe@example.com',
    numClasses: 5,
    classNames: ['Mathematics', 'Science', 'English'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'instructor2.jpg',
    email: 'janesmith@example.com',
    numClasses: 3,
    classNames: ['History', 'Geography'],
  },
  // ...
];

const Instructors = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={(`./images/${instructor.image}`).default}
              alt={instructor.name}
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
            <h3 className="text-lg font-semibold mb-2">{instructor.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{instructor.email}</p>
            {instructor.numClasses && (
              <p className="text-sm text-gray-500 mb-2">
                Number of Classes: {instructor.numClasses}
              </p>
            )}
            {instructor.classNames && (
              <div className="mb-2">
                <p className="text-sm text-gray-500">Classes Taken:</p>
                <ul className="ml-4">
                  {instructor.classNames.map((className) => (
                    <li key={className} className="text-xs text-gray-500">
                      {className}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <a href={`/instructors/${instructor.id}`} className="text-sm text-blue-500">
              See Classes
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
