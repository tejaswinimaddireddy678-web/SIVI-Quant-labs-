import { DoubleSide } from "three";


export default function HingePanel({

position,

texture,

color

}){


return (

<mesh

position={position}

castShadow

receiveShadow

>


<boxGeometry

args={[
0.08,
3,
3
]}

/>


{

texture ?

<meshPhysicalMaterial

map={texture}

roughness={0.8}

side={DoubleSide}

/>

:

<meshPhysicalMaterial

color={color}

roughness={0.8}

side={DoubleSide}

/>

}



</mesh>

);


}