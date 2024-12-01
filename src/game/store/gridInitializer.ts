import { GridCell } from '../types';

export function initializeGameGrid(): GridCell[][] {
  const grid: GridCell[][] = Array(16).fill(null).map(() =>
    Array(16).fill(null).map(() => ({
      occupied: false,
      areaType: 'empty',
    }))
  );

  // Initialize Launch Pad (center)
  for (let i = 6; i < 10; i++) {
    for (let j = 6; j < 10; j++) {
      grid[i][j] = { 
        occupied: i === 7 && j === 7, // Only the center tile is occupied
        areaType: 'launchPad',
        buildingType: i === 7 && j === 7 ? 'launchPad' : undefined
      };
    }
  }

  // Initialize Solar Power Area (top-left)
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      grid[i][j] = { occupied: false, areaType: 'solar' };
    }
  }

  // Initialize Iron Mine Area (top-right)
  for (let i = 0; i < 4; i++) {
    for (let j = 12; j < 16; j++) {
      grid[i][j] = { occupied: false, areaType: 'mining' };
    }
  }

  // Initialize Farming Area (bottom-left)
  for (let i = 12; i < 16; i++) {
    for (let j = 0; j < 4; j++) {
      grid[i][j] = { occupied: false, areaType: 'farming' };
    }
  }

  // Initialize Special Buildings Area (bottom-right)
  for (let i = 12; i < 16; i++) {
    for (let j = 12; j < 16; j++) {
      grid[i][j] = { occupied: false, areaType: 'special' };
    }
  }

  return grid;
}