import React from 'react';

import './ImageStyles.css';
import Background from '../assets/background.png';

const Image = () => {
  return (
    <div>
        <img source={Background} id='image'/>
    </div>
  )
}

export default Image