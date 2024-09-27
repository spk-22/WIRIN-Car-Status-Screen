import React from 'react';

interface CarModePopupProps {
  onClose: () => void;
}

const CarModePopup: React.FC<CarModePopupProps> = ({ onClose }) => {
  return (
    <div className="car-mode-popup">
      <div className="circle2"></div>
      {/* Text box with a description */}
      <div className="text-box">
        <p id="carmodestyle0">Car Mode</p>
        <p id="carmodestyle1"> CAR MODE</p>
        <p id="carmodestyle2"> AMBIENT</p>
        <p id="carmodestyle3">MODE</p>
      </div>

      {/* Car image that is larger and completely aligned to the right */}
      <div className="car-image1">
        <img src="/images/car-model.svg" alt="Car Model" />
      </div>
    </div >
  );
};

export default CarModePopup;
