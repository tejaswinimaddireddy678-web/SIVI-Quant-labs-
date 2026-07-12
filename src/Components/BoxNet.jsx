import {
useSpring,
animated
}
from "@react-spring/three";


import {
Text
}
from "@react-three/drei";


import HingePanel from "./HingePanel";



export default function BoxNet({

folded,

texture,

panelTextures,

dimensions,

textData

}){


const length =
dimensions?.length || 3;


const width =
dimensions?.width || 3;


const height =
dimensions?.height || 3;



const {angle}=useSpring({

angle:
folded
?
Math.PI/2
:
0,


config:{

tension:170,

friction:25

}

});



const material=(map,color)=>{


return map ?

<meshPhysicalMaterial

map={map}

roughness={0.8}

/>


:

<meshPhysicalMaterial

color={color}

roughness={0.8}

/>


};



return (

<group>


{/* Bottom */}

<mesh

castShadow

receiveShadow

>

<boxGeometry

args={[
length,
0.1,
width
]}

/>


{material(
panelTextures?.top,
"#c58b4f"
)}


</mesh>





{/* Left */}

<animated.group

position={[
-length/2,
0,
0
]}

rotation={
angle.to(
a=>[0,0,a]
)
}

>


<mesh

position={[
0,
height/2,
0
]}

castShadow

>

<boxGeometry

args={[
0.1,
height,
width
]}

/>


{material(
panelTextures?.left,
"red"
)}


</mesh>


</animated.group>





{/* Right */}

<animated.group

position={[
length/2,
0,
0
]}

rotation={
angle.to(
a=>[0,0,-a]
)
}

>


<mesh

position={[
0,
height/2,
0
]}

castShadow

>

<boxGeometry

args={[
0.1,
height,
width
]}

/>


{material(
panelTextures?.right,
"green"
)}


</mesh>


</animated.group>





{/* Front */}

<animated.group

position={[
0,
0,
-width/2
]}

rotation={
angle.to(
a=>[-a,0,0]
)
}

>


<mesh

position={[
0,
height/2,
0
]}

castShadow

>

<boxGeometry

args={[
length,
height,
0.1
]}

/>


{material(
panelTextures?.front,
"blue"
)}


</mesh>


</animated.group>





{/* Back */}

<animated.group

position={[
0,
0,
width/2
]}

rotation={
angle.to(
a=>[a,0,0]
)
}

>


<mesh

position={[
0,
height/2,
0
]}

castShadow

>

<boxGeometry

args={[
length,
height,
0.1
]}

/>


{material(
panelTextures?.back,
"yellow"
)}


</mesh>


</animated.group>






{/* Branding Text */}

<Text

position={[
0,
height/2,
-width/2-0.06
]}

rotation={[
0,
0,
0
]}

fontSize={
textData?.size || 0.5
}

color="black"

>

{textData?.text}


</Text>



</group>

);


}