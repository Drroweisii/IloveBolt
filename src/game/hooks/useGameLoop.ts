import { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';
import { BUILDING_CONFIGS } from '../constants/buildings';

export function useGameLoop() {
  const updateResources = useGameStore((state) => state.updateResources);
  const buildings = useGameStore((state) => state.buildings);
  const lastUpdate = useRef(Date.now());

  useEffect(() => {
    const gameLoop = () => {
      const now = Date.now();
      const delta = (now - lastUpdate.current) / 1000; // Convert to seconds
      lastUpdate.current = now;

      // Calculate total resource production/consumption
      const resourceDelta = buildings.reduce(
        (acc, building) => {
          const config = BUILDING_CONFIGS[building.type];
          return {
            energy: acc.energy + config.production.energy * delta,
            iron: acc.iron + config.production.iron * delta,
            food: acc.food + config.production.food * delta,
          };
        },
        { energy: 0, iron: 0, food: 0 }
      );

      updateResources(resourceDelta);
    };

    const intervalId = setInterval(gameLoop, 1000);
    return () => clearInterval(intervalId);
  }, [buildings, updateResources]);
}