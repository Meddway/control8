import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface Props {
  id: string;
  category: string;
  author: string;
  quoteText: string;
}

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [quotes, setQuotes] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!category) {
          console.log('Invalid category parameter:', category);
          setLoading(false);
          return;
        }

        const response = await axiosApi.get('/quotes.json', {
          params: {
            orderBy: '"category"',
            equalTo: `"${category}"`,
          },
        });

        const quotesArray = Object.values(response.data || {}) as Props[];
        const filteredQuotes = quotesArray.filter((quote) => quote.category === category);

        setQuotes(filteredQuotes);
      } catch (error) {
        console.error('Error fetch quotes:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetch();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <h2 className="mb-4">Category: {category}</h2>
          {quotes.length > 0 ? (
            <ul>
              {quotes.map((quote, index) => (
                <li key={quote.quoteText + index} className="border p-3 mb-3" style={{maxWidth:'420px'}}>
                  <p className="text-danger m-0">Quote:</p>
                  <p> {quote.quoteText}</p>
                  <p className="text-danger m-0">Author: </p>
                  <p>{quote.author}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No quotes found for this category</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
