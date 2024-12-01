import { useGameStore } from '../../game/store/gameStore';
import { useBuildingPlacement } from '../../game/hooks/useBuildingPlacement';

export function Grid() {
  const grid = useGameStore((state) => state.grid);
  const selectedBuilding = useGameStore((state) => state.selectedBuilding);
  const { isValidPlacement, placeBuilding } = useBuildingPlacement();

  const handleCellClick = (x: number, y: number) => {
    if (selectedBuilding) {
      placeBuilding(x, y);
    }
  };

  return (
    <group>
      {grid.map((row, i) =>
        row.map((cell, j) => {
          const isValid = selectedBuilding
            ? isValidPlacement(i, j, selectedBuilding.type)
            : false;

          return (
            <mesh
              key={`${i}-${j}`}
              position={[i - 8, 0, j - 8]}
              rotation={[-Math.PI / 2, 0, 0]}
              onClick={(e) => {
                e.stopPropagation();
                handleCellClick(i, j);
              }}
            >
              <planeGeometry args={[0.95, 0.95]} />
              <meshStandardMaterial
                color={getColorForArea(cell.areaType, isValid)}
                transparent
                opacity={0.5}
              />
            </mesh>
          );
        })
      )}
    </group>
  );
}

function getColorForArea(areaType: string, isValidPlacement: boolean): string {
  if (isValidPlacement) return '#00ff00';

  switch (areaType) {
    case 'launchPad':
      return '#ff4444';
    case 'solar':
      return '#ffaa00';
    case 'mining':
      return '#666666';
    case 'farming':
      return '#44ff44';
    case 'special':
      return '#4444ff';
    case 'street':
      return '#cccccc';
    default:
      return '#999999';
  }
}