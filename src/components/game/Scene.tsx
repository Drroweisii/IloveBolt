import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Grid } from './Grid';
import { Buildings } from './Buildings';
import { useEffect } from 'react';
import { useGameStore } from '../../game/store/gameStore';

export function Scene() {
  const initializeGrid = useGameStore((state) => state.initializeGrid);

  useEffect(() => {
    initializeGrid();
  }, [initializeGrid]);

  return (
    <Canvas
      camera={{ position: [20, 20, 20], fov: 50 }}
      style={{ height: '100vh' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Grid />
      <Buildings />
      <OrbitControls />
    </Canvas>
  );
}