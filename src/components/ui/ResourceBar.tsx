import { useGameStore } from '../../game/store/gameStore';
import { ResourceDisplay } from './ResourceDisplay';

export function ResourceBar() {
  const resources = useGameStore((state) => state.resources);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 text-white p-4">
      <div className="container mx-auto flex justify-center">
        <ResourceDisplay
          energy={resources.energy}
          iron={resources.iron}
          food={resources.food}
        />
      </div>
    </div>
  );
}