import { Group } from "three";

export default function Box({
  position,
  rotation,
  color,
  children
}) {
  return (
    <group
      position={position}
      rotation={rotation}
    >
      <mesh position={[1,0,0]}>
        <planeGeometry args={[2,2]} />
        <meshStandardMaterial
          color={color}
          side={2}
        />
      </mesh>

      {children}

    </group>
  );
}