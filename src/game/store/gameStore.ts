import { create } from 'zustand';
import { Building, Resources, GridCell } from '../types';
import { initializeGameGrid } from './gridInitializer';
import { ResourceManager } from './resourceManager';

interface GameState {
  grid: GridCell[][];
  buildings: Building[];
  resources: Resources;
  selectedBuilding: Building | null;
  initializeGrid: () => void;
  addBuilding: (building: Building) => void;
  updateResources: (delta: Resources) => void;
  setSelectedBuilding: (building: Building | null) => void;
}

const resourceManager = new ResourceManager();

const initialBuildings: Building[] = [
  { type: 'launchPad', position: [6, 6], rotation: 0 }, // Updated position to top-left of 4x4 area
];

export const useGameStore = create<GameState>((set) => ({
  grid: [],
  buildings: initialBuildings,
  resources: {
    energy: 100,
    iron: 50,
    food: 100,
  },
  selectedBuilding: null,

  initializeGrid: () => {
    const grid = initializeGameGrid();
    set({ grid });
  },

  addBuilding: (building) => {
    set((state) => ({
      buildings: [...state.buildings, building],
      grid: state.grid.map((row, i) =>
        row.map((cell, j) =>
          i === building.position[0] && j === building.position[1]
            ? { ...cell, occupied: true, buildingType: building.type }
            : cell
        )
      ),
    }));
  },

  updateResources: (delta) => {
    set((state) => ({
      resources: resourceManager.updateResources(state.resources, delta),
    }));
  },

  setSelectedBuilding: (building) => {
    set({ selectedBuilding: building });
  },
}));