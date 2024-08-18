// NewPageComponent.js
import React from 'react';
import './exp.scss';

const NewPageComponent = () => {
  return (
    <div className="experience-section" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <div>
            <h1 className="exp-header"> Skills and Experience &#x1F4CA;</h1>
            <p>This is the new page content that appears after scrolling to the bottom.</p>
            <p>You can add any additional content here.</p>
        </div>
    </div>
  );
};

export default NewPageComponent;
