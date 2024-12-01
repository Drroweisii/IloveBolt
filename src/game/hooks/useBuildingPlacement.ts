import { useCallback } from 'react';
import { useGameStore } from '../store/gameStore';
import { BUILDING_CONFIGS } from '../constants/buildings';
import { BuildingType, Resources } from '../types';

export function useBuildingPlacement() {
  const { resources, grid, addBuilding, selectedBuilding } = useGameStore();

  const canAffordBuilding = useCallback((type: BuildingType) => {
    const cost = BUILDING_CONFIGS[type].cost;
    return (
      resources.energy >= cost.energy &&
      resources.iron >= cost.iron &&
      resources.food >= cost.food
    );
  }, [resources]);

  const isValidPlacement = useCallback((x: number, y: number, type: BuildingType) => {
    if (!grid[x]?.[y]) return false;
    
    const cell = grid[x][y];
    if (cell.occupied) return false;

    const config = BUILDING_CONFIGS[type];
    return config.allowedAreas.includes(cell.areaType);
  }, [grid]);

  const placeBuilding = useCallback((x: number, y: number) => {
    if (!selectedBuilding) return false;

    if (!canAffordBuilding(selectedBuilding.type)) return false;
    if (!isValidPlacement(x, y, selectedBuilding.type)) return false;

    addBuilding({
      type: selectedBuilding.type,
      position: [x, y],
      rotation: selectedBuilding.rotation,
    });

    return true;
  }, [selectedBuilding, canAffordBuilding, isValidPlacement, addBuilding]);

  return {
    canAffordBuilding,
    isValidPlacement,
    placeBuilding,
  };
}