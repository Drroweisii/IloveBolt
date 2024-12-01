import { useGameStore } from '../../game/store/gameStore';
import { BUILDING_CONFIGS } from '../../game/constants/buildings';
import { BuildingType } from '../../game/types';

export function Buildings() {
  const buildings = useGameStore((state) => state.buildings);
  const selectedBuilding = useGameStore((state) => state.selectedBuilding);

  return (
    <group>
      {buildings.map((building, index) => (
        <BuildingModel
          key={index}
          type={building.type}
          position={building.position}
          rotation={building.rotation}
        />
      ))}
      {selectedBuilding && (
        <BuildingPreview
          type={selectedBuilding.type}
          rotation={selectedBuilding.rotation}
        />
      )}
    </group>
  );
}

function BuildingModel({ type, position, rotation }: {
  type: BuildingType;
  position: [number, number];
  rotation: number;
}) {
  const config = BUILDING_CONFIGS[type];
  const { width, height, depth } = config.model;
  
  // Adjust position based on building size to center it in the grid cell
  const xOffset = width / 2 - 0.5;
  const zOffset = depth / 2 - 0.5;
  
  return (
    <mesh
      position={[
        position[0] - 8 + xOffset,
        height / 2,
        position[1] - 8 + zOffset
      ]}
      rotation={[0, rotation, 0]}
    >
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={getBuildingColor(type)} />
    </mesh>
  );
}

function BuildingPreview({ type, rotation }: {
  type: BuildingType;
  rotation: number;
}) {
  const config = BUILDING_CONFIGS[type];
  const { width, height, depth } = config.model;

  return (
    <mesh visible={false}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color={getBuildingColor(type)}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function getBuildingColor(type: BuildingType): string {
  switch (type) {
    case 'launchPad':
      return '#ff4444';
    case 'solarPlant':
      return '#ffdd00';
    case 'ironMine':
      return '#888888';
    case 'hydroponicFarm':
      return '#44ff44';
    case 'radar':
      return '#00ffff';
    case 'aiResearch':
      return '#ff00ff';
    case 'rocketFactory':
      return '#ff8800';
    case 'storage':
      return '#8844ff';
  }
}
