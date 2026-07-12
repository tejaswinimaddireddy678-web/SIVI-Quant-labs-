import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import BoxNet from "./BoxNet";

export default function Scene({
  folded,
  texture,
  panelTextures,
  dimensions,
  textData,
}) {
  return (
    <Canvas
      shadows
      camera={{
        position: [8, 6, 8],
        fov: 45,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={2}
        castShadow
      />

      {/* Environment */}
      <Environment preset="studio" />

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      {/* Box */}
      <BoxNet
        folded={folded}
        texture={texture}
        panelTextures={panelTextures}
        dimensions={dimensions}
        textData={textData}
      />

      {/* Camera Controls */}
      <OrbitControls
        makeDefault
        enableRotate={true}
        enableZoom={true}
        enablePan={true}
        enableDamping={true}
        dampingFactor={0.08}
        rotateSpeed={1}
        zoomSpeed={1}
        panSpeed={1}
        minDistance={4}
        maxDistance={20}
        target={[0, 1.5, 0]}
      />
    </Canvas>
  );
}