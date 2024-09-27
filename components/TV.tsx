import React from 'react';

const TV: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="new-popup-container">
      <div className="new-popup-content">
        <div className="new-popup-section1">
          <div className="status-row">
            <span className="status-tv-label1">TV State Level</span>
            <span className="status-tv-value1">Open Mode</span>
          </div>
          <div className="status-row">
            <span className="status-tv1">Status (Off/Mid/Open)</span>
            <span className="status-tv2">Operating Level</span>
            <span className="status-tv-value2">100%</span>
          </div>
        </div>
        <div className="new-popup-section2">
          <div className="status-row">
            <span className="status-tv-label2">TV Status</span>
            <span className="status-tv-value3">State 1</span>
          </div>
          <div className="status-row">
            <span className="status-tv3">Status (Moving Up/ Moving</span>
            <span className="status-tv4">Down/State 1/State 2/State 3)</span>
          </div>
        </div>
        <div className="car-image3">
          <img src="/images/car-model.svg" alt="Car Model" />
        </div>
      </div>
    </div>
  );
};

export default TV;
