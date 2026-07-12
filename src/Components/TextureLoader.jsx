import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function TextureImage({ image }) {
  const texture = useLoader(TextureLoader, image);

  return (
    <meshStandardMaterial
      map={texture}
      side={2}
    />
  );
}