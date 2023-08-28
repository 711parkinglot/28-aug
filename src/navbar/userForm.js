import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: '',
  });

  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill the form correctly.');
      return;
    }

    setUserData(formData);
    setFormData({
      name: '',
      dob: '',
      email: '',
      contact: '',
      about: '',
    });
  };

  const validateForm = () => {
  };

  return (
    <div className="user-form">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {userData && (
        <div className="user-card">
          <h3>User Information</h3>
          <p>Name: {userData.name}</p>
          <p>Date of Birth: {userData.dob}</p>
          <p>Email: {userData.email}</p>
          <p>Contact: {userData.contact}</p>
          <p>About: {userData.about}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
