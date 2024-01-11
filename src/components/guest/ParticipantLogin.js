import React, { useState } from 'react';
import { useContextApi } from '../../context/ContextApi';

const ParticipantLogin = () => {
  const { login, errors } = useContextApi();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login('participant', e.target.email.value, e.target.password.value);
    setShowAlert(true);
  };

  return (
    <div className="d-flex justify-content-center w-100 mt-5">
      <form onSubmit={handleSubmit} className="w-50 p-4 border rounded shadow-lg" style={{ backgroundColor: '#FAD02E', color: '#000000' }}>
        <h1 className="mb-4">Login Participant</h1>
        {showAlert && errors?.message && (
          <div className="alert alert-danger" role="alert">
            {errors.message}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" required id="email" pattern='[^\s@]+@[^\s@]+\.[^\s@]+' />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" required id="password" pattern='.{8,}' />
        </div>
        <button type="submit" className="btn btn-dark">Login</button>
      </form>
    </div>
  );
};

export default ParticipantLogin;
