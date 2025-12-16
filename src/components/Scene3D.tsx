import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense } from "react";

const AnimatedSphere = ({ position, color, speed, distort }: { 
  position: [number, number, number]; 
  color: string; 
  speed: number;
  distort: number;
}) => {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} position={position} scale={0.8}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-5 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#a855f7" intensity={0.5} />
          <pointLight position={[10, -10, 5]} color="#00d4ff" intensity={0.5} />
          
          <AnimatedSphere position={[-3, 1, -2]} color="#00d4ff" speed={2} distort={0.4} />
          <AnimatedSphere position={[3, -1, -3]} color="#a855f7" speed={1.5} distort={0.5} />
          <AnimatedSphere position={[0, 2, -4]} color="#ec4899" speed={1} distort={0.3} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
