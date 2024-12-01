import { Suspense, useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

function WindTurbineModel({ position, rotation }: { 
  position: [number, number, number];
  rotation: number;
}) {
  const gltf = useLoader(
    GLTFLoader,
    'https://raw.githubusercontent.com/Drroweisii/Solar/f4cc3f40731de7276a9d9c8c01d7df098d57eaa0/awesome.glb'
  );
  const modelRef = useRef<Mesh>(null);

  useEffect(() => {
    if (gltf.scene) {
      // Setting the scale of the model
      gltf.scene.scale.set(0.05, 0.05, 0.05);

      // Enabling shadows for the model
      gltf.scene.traverse((child) => {
        if ((child as Mesh).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [gltf]);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene.clone()}
      position={position}
      rotation={[0, rotation, 0]}
    />
  );
}

function FallbackBox({ position, rotation }: { 
  position: [number, number, number];
  rotation: number;
}) {
  return (
    <mesh position={position} rotation={[0, rotation, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffdd00" />
    </mesh>
  );
}

export function WindTurbine(props: { 
  position: [number, number, number];
  rotation: number;
}) {
  return (
    <Suspense fallback={<FallbackBox {...props} />}>
      <WindTurbineModel {...props} />
    </Suspense>
  );
}
