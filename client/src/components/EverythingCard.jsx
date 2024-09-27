import React from 'react';
import '../styles/EverythingCard.css';

const EverythingCard = ({ title, description, imgUrl, url, publishedAt, author, source }) => {
  return (
    <div className='card'>
      {imgUrl && <img src={imgUrl} alt={title} className='card-img' />}
      <div className='card-content'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{description}</p>
        <div className='card-footer'>
          <p className='card-author'>{author ? author : 'Unknown Author'} - {source}</p>
          <p className='card-date'>{new Date(publishedAt).toLocaleDateString()}</p>
        </div>
        <a href={url} target='_blank' rel='noopener noreferrer' className='card-link'>Read more...</a>
      </div>
    </div>
  );
};

export default EverythingCard;
