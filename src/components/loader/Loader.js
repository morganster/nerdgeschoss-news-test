import React from 'react';

import './Loader.scss';
const Loader = () => {
 
    return(
      <div className='loader__container'>
            <div className='loader__spinner--center'>
                    <div className='loader__spinner'>
                    </div>
            </div>
      </div>
    );
  };

export default Loader;