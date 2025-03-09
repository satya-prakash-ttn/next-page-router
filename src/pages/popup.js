import React, { useState, Suspense, lazy } from 'react';

const PopUp = lazy(() => import('../components/PopUp'));

const Popup = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="container">
      <button onClick={openPopUp}>Open Pop-up</button>

   
      <Suspense fallback={<div>Loading...</div>}>
        {isPopUpOpen && (
          <div>
            <PopUp closePopUp={closePopUp}/>
            
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Popup;
