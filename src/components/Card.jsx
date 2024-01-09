import React from 'react';
import './Card.css'
const Card = () => {
  const cardStyle = {
    display: 'flex',
  };

  

  const descStyle = {
    padding: '10px',
  };

  return (
    <div className="rows" style={cardStyle}>
      <div>
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFYgvOCM8VN2a4_m7udC_ZCt1hm71Ad9OEg&usqp=CAU">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFYgvOCM8VN2a4_m7udC_ZCt1hm71Ad9OEg&usqp=CAU"
            alt=""
            height="190px"
            width="190px"
            
          />
        </a>
        <div className="desc" style={descStyle}>
        <span className='span1'>Discover even more ways to play across thousands of creator-made game genres</span>
        </div>
      </div>
      <div>
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkYqMwVADXYdlYJ9h6xBfu6cQcEzTp04X4mqP839ahdMuucKhRnX8NQlmtQU-v1M6X0E&usqp=CAU">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkYqMwVADXYdlYJ9h6xBfu6cQcEzTp04X4mqP839ahdMuucKhRnX8NQlmtQU-v1M6X0E&usqp=CAU"
            alt=""
            height="190px"
            width="190px"
            
          />
        </a>
        <div className="desc" style={descStyle}>
        <span className='span1'>Discover even more ways to play across thousands of creator-made game genres</span>
        </div>
      </div>
      <div>
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9_Bp8zxj_-kIroion5DqVkItY3gnZ4bNpQ&usqp=CAU">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9_Bp8zxj_-kIroion5DqVkItY3gnZ4bNpQ&usqp=CAU"
            alt=""
            height="190px"
            width="190px"
            
          />
        </a>
        <div className="desc" style={descStyle}>
          <span className='span1'>Discover even more ways to play across thousands of creator-made game genres</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
