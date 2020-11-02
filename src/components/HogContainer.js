import React from 'react';
import HogCard from './HogCard';

const HogContainer = ({ hogs }) => {
  return (
    <div className='ui grid container'>
      {hogs.map(hog => {
        return <HogCard key={hog.id} hog={hog} />;
      })}
    </div>
  );
};
export default HogContainer;
