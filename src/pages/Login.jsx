import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Iniciando sesión para: ${email}`);
  };

  return (
    <div className="row justify-content-center py-5">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card shadow-sm border-0 p-4">
          <h2 className="text-center fw-bold mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input 
                type="email" 
                className="form-control" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;