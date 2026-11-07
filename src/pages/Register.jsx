import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario registrado: ${formData.nombre}`);
  };

  return (
    <div className="row justify-content-center py-5">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card shadow-sm border-0 p-4">
          <h2 className="text-center fw-bold mb-4">Registrarse</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input 
                type="text" 
                className="form-control" 
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input 
                type="email" 
                className="form-control" 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required 
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-2">Crear Cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;