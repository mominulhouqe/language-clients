import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../provider/AuthProvider';

const AddAClass = () => {
  const { register, handleSubmit } = useForm();
  const {user} = useContext(AuthContext);
console.log(user);
  const onSubmit = (data) => {
    // Perform submission logic here
    console.log(data);
  };

  return (
    <div>
      <h1>Create Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="className">Class Name</label>
          <input id="className" name="className" type="text" ref={register} />
        </div>
        <div>
          <label htmlFor="classImage">Class Image</label>
          <input id="classImage" name="classImage" type="text" ref={register} />
        </div>
        <div>
          <label htmlFor="instructorName">Instructor Name</label>
          <input
            id="instructorName"
            name="instructorName"
            type="text"
            readOnly
            value={user.displayName}
          />
        </div>
        <div>
          <label htmlFor="instructorEmail">Instructor Email</label>
          <input
            id="instructorEmail"
            name="instructorEmail"
            type="email"
            readOnly
            value={user}
          />
        </div>
        <div>
          <label htmlFor="availableSeats">Available Seats</label>
          <input
            id="availableSeats"
            name="availableSeats"
            type="number"
            ref={register}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input id="price" name="price" type="number" ref={register} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddAClass;
