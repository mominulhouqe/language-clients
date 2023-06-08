import React from 'react';
import useInstructor from '../../../hooks/useInstructor';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/img2.jpg'


const Instructors = () => {

  const [instructors] =useInstructor()

  return (
    <div>
        <Cover img={img} title="Instructors"></Cover>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-2 mx-6 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor._id} className="bg-white p-4  rounded-md shadow-md">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24  h-24 rounded-full object-cover mb-2"
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
    </div>


  );
};

export default Instructors;