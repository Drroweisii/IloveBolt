import { BuildingType } from '../types';

export interface BuildingConfig {
  type: BuildingType;
  name: string;
  description: string;
  cost: {
    energy: number;
    iron: number;
    food: number;
  };
  production: {
    energy: number;
    iron: number;
    food: number;
  };
  allowedAreas: string[];
  model: {
    width: number;
    height: number;
    depth: number;
  };
}

export const BUILDING_CONFIGS: Record<BuildingType, BuildingConfig> = {
  launchPad: {
    type: 'launchPad',
    name: 'Launch Pad',
    description: 'Central command and landing zone',
    cost: { energy: 0, iron: 0, food: 0 },
    production: { energy: 0, iron: 0, food: 0 },
    allowedAreas: ['launchPad'],
    model: { width: 4, height: 1.5, depth: 4 }
  },
  solarPlant: {
    type: 'solarPlant',
    name: 'Solar Plant',
    description: 'Generates energy from solar radiation',
    cost: { energy: 20, iron: 50, food: 0 },
    production: { energy: 10, iron: 0, food: 0 },
    allowedAreas: ['solar'],
    model: { width: 1, height: 0.5, depth: 1 }
  },
  ironMine: {
    type: 'ironMine',
    name: 'Iron Mine',
    description: 'Extracts iron from Martian soil',
    cost: { energy: 30, iron: 20, food: 0 },
    production: { energy: -5, iron: 8, food: 0 },
    allowedAreas: ['mining'],
    model: { width: 1, height: 1.5, depth: 1 }
  },
  hydroponicFarm: {
    type: 'hydroponicFarm',
    name: 'Hydroponic Farm',
    description: 'Produces food using advanced farming techniques',
    cost: { energy: 25, iron: 30, food: 10 },
    production: { energy: -3, iron: 0, food: 6 },
    allowedAreas: ['farming'],
    model: { width: 1, height: 0.8, depth: 1 }
  },
  radar: {
    type: 'radar',
    name: 'Radar Station',
    description: 'Monitors space and weather conditions',
    cost: { energy: 15, iron: 25, food: 0 },
    production: { energy: -2, iron: 0, food: 0 },
    allowedAreas: ['special'],
    model: { width: 0.8, height: 2, depth: 0.8 }
  },
  aiResearch: {
    type: 'aiResearch',
    name: 'AI Research Lab',
    description: 'Advances colony technology',
    cost: { energy: 40, iron: 35, food: 10 },
    production: { energy: -8, iron: 0, food: 0 },
    allowedAreas: ['special'],
    model: { width: 1, height: 1.2, depth: 1 }
  },
  rocketFactory: {
    type: 'rocketFactory',
    name: 'Rocket Factory',
    description: 'Manufactures rockets and equipment',
    cost: { energy: 50, iron: 60, food: 0 },
    production: { energy: -12, iron: -2, food: 0 },
    allowedAreas: ['special'],
    model: { width: 1.5, height: 1.8, depth: 1.5 }
  },
  storage: {
    type: 'storage',
    name: 'Storage Facility',
    description: 'Stores resources and equipment',
    cost: { energy: 10, iron: 40, food: 0 },
    production: { energy: -1, iron: 0, food: 0 },
    allowedAreas: ['special'],
    model: { width: 1.2, height: 1, depth: 1.2 }
  }
};