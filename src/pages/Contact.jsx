import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="row justify-content-center py-5">
      <div className="col-12 col-md-8 col-lg-6">
        <div className="card shadow-sm border-0 p-4">
          <h2 className="text-center fw-bold mb-4">Contacto</h2>
          {submitted ? (
            <div className="alert alert-success text-center">
              ¡Gracias por escribirnos! Te responderemos a la brevedad.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;