import { BuildingConfig } from '../../game/constants/buildings';
import { useGameStore } from '../../game/store/gameStore';

interface BuildingButtonProps {
  building: BuildingConfig;
}

export function BuildingButton({ building }: BuildingButtonProps) {
  const { selectedBuilding, setSelectedBuilding, resources } = useGameStore();
  const isSelected = selectedBuilding?.type === building.type;
  
  const canAfford = 
    resources.energy >= building.cost.energy &&
    resources.iron >= building.cost.iron &&
    resources.food >= building.cost.food;

  const handleClick = () => {
    if (selectedBuilding?.type === building.type) {
      setSelectedBuilding(null);
    } else {
      setSelectedBuilding({ type: building.type, position: [0, 0], rotation: 0 });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        p-2 rounded-lg transition-colors text-center
        ${isSelected ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}
        ${!canAfford && 'opacity-50 cursor-not-allowed'}
      `}
      disabled={!canAfford}
    >
      <h3 className="font-bold text-white">{building.name}</h3>
    </button>
  );
}