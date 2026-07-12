import {useCallback} from "react";
import {useDropzone} from "react-dropzone";


export default function Uploads({onFile}){


const onDrop=useCallback(
(files)=>{

if(files.length>0){

onFile(files[0]);

}

},
[onFile]
);



const {
getRootProps,
getInputProps,
isDragActive

}=useDropzone({

onDrop,

accept:{

"image/*":[".png",".jpg",".jpeg"],

"application/pdf":[".pdf"]

}

});



return (

<div className="panel"

{...getRootProps()}

>


<input {...getInputProps()}/>


{

isDragActive

?

<p>
Drop file here
</p>

:

<p>
Upload PDF / Image
</p>

}


</div>

);


}