import React from 'react';
import ImageCard from './imagecard';
import './image-list.css';

const image = prop =>{
   const images = prop.images.map((image) => {
    return(<ImageCard key={image.id} image={image} />);
    });
    return <div className="image-list" >{images}</div>
}

export default image;