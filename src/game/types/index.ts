export type ResourceType = 'energy' | 'iron' | 'food';

export type BuildingType = 
  | 'launchPad'
  | 'solarPlant'
  | 'ironMine'
  | 'hydroponicFarm'
  | 'radar'
  | 'aiResearch'
  | 'rocketFactory'
  | 'storage';

export interface Building {
  type: BuildingType;
  position: [number, number];
  rotation: number;
}

export interface Resources {
  energy: number;
  iron: number;
  food: number;
}

export interface GridCell {
  occupied: boolean;
  buildingType?: BuildingType;
  areaType: 'launchPad' | 'solar' | 'mining' | 'farming' | 'special' | 'street' | 'empty';
}