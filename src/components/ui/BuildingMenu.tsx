import { BUILDING_CONFIGS } from '../../game/constants/buildings';
import { BuildingButton } from './BuildingButton';

export function BuildingMenu() {
  // Filter out the Launch Pad since it's pre-built
  const availableBuildings = Object.values(BUILDING_CONFIGS)
    .filter(building => building.type !== 'launchPad');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {availableBuildings.map((building) => (
            <BuildingButton key={building.type} building={building} />
          ))}
        </div>
      </div>
    </div>
  );
}