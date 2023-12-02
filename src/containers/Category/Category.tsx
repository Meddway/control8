import React from 'react';

interface Props {
  category: string;
}

const Category: React.FC<Props> = ({category}) => {
  return (
    <div>
      <h2>{category} Quotes</h2>
    </div>
  );
};

export default Category;