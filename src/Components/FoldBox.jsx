import { useSpring, animated } from "@react-spring/three";
import HingePanel from "./HingePanel";

export default function FoldBox({ folded, texture }) {

  const { angle } = useSpring({
    angle: folded ? Math.PI / 2 : 0,
    config: {
      tension: 170,
      friction: 20,
    },
  });


  return (
    <group>

      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.15, 3]} />
        <meshStandardMaterial
          map={texture}
          color={!texture ? "orange" : "white"}
        />
      </mesh>


      {/* Left Side */}
      <animated.group
        position={[-1.5, 0, 0]}
        rotation={angle.to(a => [0, 0, a])}
      >
        <HingePanel
          position={[-1.5, 1.5, 0]}
          texture={texture}
          color="red"
        />
      </animated.group>


      {/* Right Side */}
      <animated.group
        position={[1.5, 0, 0]}
        rotation={angle.to(a => [0, 0, -a])}
      >
        <HingePanel
          position={[1.5, 1.5, 0]}
          texture={texture}
          color="green"
        />
      </animated.group>


      {/* Front */}
      <animated.group
        position={[0, 0, -1.5]}
        rotation={angle.to(a => [a, 0, 0])}
      >
        <HingePanel
          position={[0, 1.5, -1.5]}
          texture={texture}
          color="blue"
        />
      </animated.group>


      {/* Back */}
      <animated.group
        position={[0, 0, 1.5]}
        rotation={angle.to(a => [-a, 0, 0])}
      >
        <HingePanel
          position={[0, 1.5, 1.5]}
          texture={texture}
          color="yellow"
        />
      </animated.group>


    </group>
  );
}