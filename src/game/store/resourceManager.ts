import { Resources } from '../types';

export class ResourceManager {
  updateResources(current: Resources, delta: Resources): Resources {
    return {
      energy: Math.max(0, Math.floor(current.energy + delta.energy)),
      iron: Math.max(0, Math.floor(current.iron + delta.iron)),
      food: Math.max(0, Math.floor(current.food + delta.food)),
    };
  }
}