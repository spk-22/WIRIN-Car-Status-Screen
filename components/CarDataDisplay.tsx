import React from 'react';

interface CarDataDisplayProps {
  onClose: () => void; // Prop to handle closing the component
}

const CarDataDisplay: React.FC<CarDataDisplayProps> = ({ onClose }) => {
  return (
    <div className="dashboardContainer">
      <div className="statusContainer">
        <div className="infoPanel">
          <div className="statusCard">
            <h3>Vehicle Error Status</h3>
            <div className="statusDetails">
              <span className="label">Currently:</span>
              <span className="value">Working Fine</span>
            </div>
            <div className="statusDetails">
              <span className="label">Last Error Code:</span>
              <span className="value">232</span>
            </div>
            <div className="statusDetails">
              <span className="label">On:</span>
              <span className="value">23/7 15:30</span>
            </div>
            <button className="historyButton">Check History</button>
          </div>
        </div>

        {/* Repeat the infoPanel for other error statuses */}
        {/* ... */}
      </div>

      <div className="vehicleDisplay">
        <img src="/images/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarDataDisplay;
