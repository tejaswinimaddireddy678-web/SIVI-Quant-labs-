import {useThree} from "@react-three/fiber";


export default function ExportButtons(){


const {gl}=useThree();



const saveImage=()=>{


const link=document.createElement("a");


link.download=
"box-preview.png";


link.href=
gl.domElement.toDataURL();


link.click();


};



return (

<button

onClick={saveImage}

>

Save PNG

</button>

);


}