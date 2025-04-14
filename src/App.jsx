import { useState } from 'react'


function App() {

  return (
    <div className="post-form-container">
      <h2>Crea un nuovo post</h2>


      <form onSubmit="" className="post-form">
        <div className="form-group">
          <label htmlFor="author">Autore:</label>
          <input
            type="text"
            id="author"
            name="author"
            value=""
            onChange=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Titolo:</label>
          <input
            type="text"
            id="title"
            name="title"
            value=""
            onChange=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Contenuto:</label>
          <textarea
            id="body"
            name="body"
            value=""
            onChange=""
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="public"
              checked=""
              onChange=""
            />
            Pubblica immediatamente
          </label>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
        </button>
      </form>
    </div>
  );
};

export default App
