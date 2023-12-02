import React from 'react';
import Home from '../Home/Home';

interface Props {
  category: string;
}

const Category: React.FC<Props> = ({ category }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Home/>
        </div>
        <div className="col-md-9">
          <h2 className="mb-4">{category} Quotes</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
