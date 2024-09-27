import React, { useState } from 'react';
import CarModePopup from './CarModePopup';
import ByWirePopup from './ByWirePopup';
import TV from './TV';
import CarDataLevel1 from './CarDataLevel1';
import CarDataLevel3 from './CarDataLevel3';
import VehicleStatusDisplay from './VehicleStatusDisplay';
import CarStatusUI from './CarStatusUI';
import CarDataDisplay from './CarDataDisplay';


const MainContent: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState<string>('Battery');
  const [activeMiniSidebar, setActiveMiniSidebar] = useState<string | null>(null);
  const [showCarModePopup, setShowCarModePopup] = useState<boolean>(false);
  const [showByWirePopup, setShowByWirePopup] = useState<boolean>(false);
  const [showTVPopup, setShowTVPopup] = useState<boolean>(false);
  const [showCarDataLevel1, setShowCarDataLevel1] = useState<boolean>(false);
  const [showCarDataLevel2, setShowCarDataLevel2] = useState<boolean>(false);
  const [showCarDataLevel3, setShowCarDataLevel3] = useState<boolean>(false);
  const [showVehicleStatusDisplay, setShowVehicleStatusDisplay] = useState<boolean>(false);
  const [showCarDataDisplay, setShowCarDataDisplay] = useState<boolean>(false);
  const [isVehicleStatusVisible, setIsVehicleStatusVisible] = useState<boolean>(false);

  const handleSidebarClick = (category: string) => {
    setActiveSidebar(category);
    setActiveMiniSidebar(null);
    resetPopups();
  };

  const handleMiniSidebarClick = (buttonLabel: string) => {
    setActiveMiniSidebar(buttonLabel);
    resetPopups();
    switch (buttonLabel) {
      case 'Car Mode':
        setShowCarModePopup(true);
        break;
      case 'Bywire System':
        setShowByWirePopup(true);
        break;
      case 'TV':
        setShowTVPopup(true);
        break;
      case 'Car Data Level1':
        setShowCarDataLevel1(true);
        break;
      case 'Car Data Level2':
        setShowCarDataLevel2(true);
        break;
      case 'Car Data Level3':
        setShowCarDataLevel3(true);
        break;
      case 'Car Data Level4':
        setShowVehicleStatusDisplay(true);
        break;
      case 'Error Statuses':
        setShowCarDataDisplay(true);
        break;
      default:
        break;
    }
  };

  const resetPopups = () => {
    setShowCarModePopup(false);
    setShowByWirePopup(false);
    setShowTVPopup(false);
    setShowCarDataLevel1(false);
    setShowCarDataLevel2(false);
    setShowCarDataLevel3(false);
    setShowVehicleStatusDisplay(false);
    setShowCarDataDisplay(false);
    setIsVehicleStatusVisible(false);
  };

  const BackButton = ({ onClick }: { onClick: () => void }) => (
    <button className="back-button" onClick={onClick}>
      <img src="public/images/backbutton.svg" />
    </button>
  );

  return (
    <div className="body">
      <div className="sidebar">
        {['Battery', 'OBC', 'AC', 'Seating and Lights', 'Car Status', 'Doors and Tyres', 'Vehicular Control'].map((category) => (
          <button
            key={category}
            className={`sidebar-button ${activeSidebar === category ? 'active' : ''}`}
            onClick={() => handleSidebarClick(category)}
          >
            <div className="sidebar-icon"><img src={`images/${category === 'Car Status' ? 'tesla' : category}.svg`} alt={category} /></div>
            <div className="sidebar-text">{category}</div>
          </button>
        ))}
      </div>

      <div className="mini-sidebar">
        {['Car Mode', 'Bywire System', 'TV', 'Car Data Level1', 'Car Data Level2', 'Car Data Level3', 'Car Data Level4', 'Error Statuses'].map((buttonLabel) => (
          <button
            key={buttonLabel}
            className={`mini-sidebar-button ${activeMiniSidebar === buttonLabel ? 'active' : ''}`}
            onClick={() => handleMiniSidebarClick(buttonLabel)}
          >
            <div className="mini-sidebar-text">{buttonLabel}</div>
          </button>
        ))}
      </div>

      {showCarModePopup && (
        <div>
          <BackButton onClick={() => setShowCarModePopup(false)} />
          <CarModePopup onClose={() => setShowCarModePopup(false)} />
        </div>
      )}
      {showByWirePopup && (
        <div>
          <BackButton onClick={() => setShowByWirePopup(false)} />
          <ByWirePopup onClose={() => setShowByWirePopup(false)} />
        </div>
      )}
      {showTVPopup && (
        <div>
          <BackButton onClick={() => setShowTVPopup(false)} />
          <TV onClose={() => setShowTVPopup(false)} />
        </div>
      )}
      {showCarDataLevel1 && (
        <div>
          <BackButton onClick={() => setShowCarDataLevel1(false)} />
          <CarDataLevel1 onClose={() => setShowCarDataLevel1(false)} />
        </div>
      )}
      {showCarDataLevel2 && (
        <div>
          <BackButton onClick={() => setShowCarDataLevel2(false)} />
          <CarStatusUI onClose={() => setShowCarDataLevel2(false)} />
        </div>
      )}
      {showCarDataLevel3 && (
        <div>
          <BackButton onClick={() => setShowCarDataLevel3(false)} />
          <CarDataLevel3 onClose={() => setShowCarDataLevel3(false)} />
        </div>
      )}
      {showVehicleStatusDisplay && (
        <div>
          <BackButton onClick={() => setShowVehicleStatusDisplay(false)} />
          <VehicleStatusDisplay onClose={() => setShowVehicleStatusDisplay(false)} />
        </div>
      )}
      {showCarDataDisplay && (
        <div>
          <BackButton onClick={() => setShowCarDataDisplay(false)} />
          <CarDataDisplay onClose={() => setShowCarDataDisplay(false)} />
        </div>
      )}
    </div>
  );
};

export default MainContent;
