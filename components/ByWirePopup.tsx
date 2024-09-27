import React from 'react';

interface ByWirePopupProps {
  onClose: () => void; // Prop to close the popup
}

const ByWirePopup: React.FC<ByWirePopupProps> = ({ onClose }) => {
  return (
    <div className="bywire-popup-overlay">
      <div className="bywire-popup-container">
        <div className="bywire-popup-header">
          <h2>By Wire System</h2>
        </div>
        <div className="bywire-popup-content">
          <div className="bywire-system-section">
            <h3>Steering</h3>
            <div className="status-row">
              <div className="status-label">Status</div>
              <div className="status-label5">(Open/Close/Opening/Closing)</div>
              <div className="status-value">Open</div>
            </div>
          </div>
          <div className="bywire-system-section">
            <h3>Acc / Brake Pedal</h3>
            <div className="status-row">
              <div className="status-label1">Acc </div>
              <div className="status-label8"> Pedal</div>
              <div className="status-label6">Status</div>
              <div className="status-label2">(Open/Close/Opening/Closing)</div>
              <div className="status-value1">Open</div>
            </div>
            <div className="status-row">
              <div className="status-label3">Brake Pedal</div>
              <div className="status-label7"> Status</div>
              <div className="status-label4">(Open/Close/Opening/Closing)</div>
              <div className="status-value2">Open</div>
            </div>
          </div>
          {/* Car image aligned to the right */}
          <div className="car-image4">
            <img src="/images/car-model.svg" alt="Car Model" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByWirePopup;

