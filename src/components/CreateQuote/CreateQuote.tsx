import React, { useState } from 'react';
import axiosApi from '../../axiosApi';
import { useNavigate } from 'react-router-dom';
import Home from '../../containers/Home/Home';

const categories = [
  { title: 'Star Wars', id: 'star-wars' },
  { title: 'Famous People', id: 'famous-people' },
  { title: 'Saying', id: 'saying' },
  { title: 'Humor', id: 'humor' },
  { title: 'Motivational', id: 'motivational' },
];

const CreateQuote = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(categories[0].id);
  const [author, setAuthor] = useState('');
  const [quoteText, setQuoteText] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleQuoteTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuoteText(event.target.value);
  };

  const handleSave = async () => {
    if (!author || !quoteText) {
      alert('Автор или текст цитаты не указан!');
      return;
    }
    try {
      const response = await axiosApi.post('/quotes.json', {
        category,
        author,
        quoteText,
      });
      console.log('Quote:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error add quote:', error);
    }
  };

  return (
    <div className="container mt-4 ms-0">
      <div className="row">
        <div className="col-md-6">
          <Home/>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Submit new quote</h2>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category:
              <select
                id="category"
                className="form-select"
                value={category}
                onChange={handleCategoryChange}
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author:
              <input
                type="text"
                className="form-control"
                id="author"
                required
                value={author}
                onChange={handleAuthorChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="quoteText" className="form-label">
              Quote Text:
              <textarea
                className="form-control"
                id="quoteText"
                required
                value={quoteText}
                onChange={handleQuoteTextChange}
              />
            </label>
          </div>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuote;