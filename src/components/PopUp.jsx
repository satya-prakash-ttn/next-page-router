import React from 'react';

const PopUp = ({closePopUp}) => {
  return (
    <div className="popup">
       
      <div className="popup-content">
      <button onClick={closePopUp} className='close-btn'>X</button>
        <h2>This is a dynamically imported pop-up!</h2>
        <p>You can close this pop-up by clicking close button.</p>
      </div>
    </div>
  );
};

export default PopUp;
