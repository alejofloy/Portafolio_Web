import React from 'react';

const Categories = ({ children }) => {
  return (
    <div className='categories'>
      <h1>Intereses</h1>
      {children}
    </div>
  );
};

export default Categories;
