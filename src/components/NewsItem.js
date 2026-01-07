import React from 'react';

const NewsItem = ({ title, description, image, url }) => {

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '12px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease'
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '5px'
  };

  const titleStyle = {
    fontSize: '16px',
    margin: '10px 0',
    color: '#222'
  };

  const descStyle = {
    fontSize: '14px',
    color: '#555'
  };

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      style={cardStyle}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img
        src={image || 'https://dummyimage.com/300x180/000/fff'}
        alt="News"
        style={imageStyle}
      />
      <h4 style={titleStyle}>{title}</h4>
      <p style={descStyle}>
        {description || 'No description for this news'}
      </p>
    </div>
  );
};

export default NewsItem;
