import React from 'react';

interface CarDataLevel1Props {
  onClose: () => void; // Prop to close the component
}

const CarDataLevel1: React.FC<CarDataLevel1Props> = ({ onClose }) => {
  return (
    <div className="car-data-overlay">
      <div className="car-data-container">
        <div className="car-data-content">
          <div className="car-data-popup">
            <h3>Car Data Level 1</h3>
            <div className="circle1"></div>
            <div className="status-row">
              <div className="status-label">Speed L (0 to 5000rpm)</div>
              <div className="status-level-value">4000rpm</div>
            </div>
            <div className="status-row">
              <div className="status-label">Speed R (0 to 5000rpm)</div>
              <div className="status-level-value">4000rpm</div>
            </div>
            <div className="status-row">
              <div className="status-label">Steering Angle (0 to 1000)</div>
              <div className="status-level-value1">259</div>
            </div>
            <div className="status-row">
              <div className="status-label">Brake Level (0 to 300)</div>
              <div className="status-level-value1">259</div>
            </div>
            <div className="status-row">
              <div className="status-label">Gear</div>
              <div className="status-level-label">Status</div>
              <div className="status-level-value">FORWARD</div>
            </div>
            <div className="status-row">
              <div className="status-label">Foot Switch</div>
              <div className="status-level-label">State</div>
              <div className="status-level-value1">OFF</div>
            </div>
            <div className="status-row">
              <div className="status-label">Motor Brake</div>
              <div className="status-level-label">State</div>
              <div className="status-level-value1">ON</div>
            </div>
          </div>
          <div className="car-image2">
            <img src="/images/car-model.svg" alt="Car Model" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDataLevel1;
