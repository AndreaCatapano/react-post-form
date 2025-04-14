import axios from 'axios';
import { useState } from 'react'


const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

function App() {


  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: true
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(url, formData).then(res => {
      console.log('Post creato con successo:', res.data);
      setFormData({
        author: '',
        title: '',
        body: '',
        public: true
      });

    }).catch(error => {
      console.error('Errore durante la creazione del post:', error);
    });
  };

  return (
    <div className="post-form-container">
      <h2>Crea un nuovo post</h2>


      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="author">Autore:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Titolo:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Contenuto:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="public"
              checked={formData.public}
              onChange={handleChange}
            />
            Pubblica immediatamente
          </label>
        </div>

        <button
          type="submit"
          className="submit-button"
        > Aggiungi Elemento
        </button>
      </form>
    </div>
  );
};

export default App