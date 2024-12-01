import { Scene } from './components/game/Scene';
import { ResourceBar } from './components/ui/ResourceBar';
import { BuildingMenu } from './components/ui/BuildingMenu';
import { useGameLoop } from './game/hooks/useGameLoop';

function App() {
  useGameLoop();

  return (
    <div className="w-full h-screen">
      <ResourceBar />
      <Scene />
      <BuildingMenu />
    </div>
  );
}

export default App;