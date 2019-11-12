import React from 'react';
import '../assets/styles/components/Interests.scss';

function Interests({ children }) {
  return (
    <div>
      <section className='intersts'>
        <div className='interests__containers'>{children}</div>
      </section>
    </div>
  );
}

export default Interests;
