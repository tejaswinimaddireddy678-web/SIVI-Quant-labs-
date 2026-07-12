import { jsPDF } from "jspdf";


export default function DielineExport({

dimensions

}){


const generatePDF=()=>{


const pdf=new jsPDF();


const length =
dimensions.length*20;


const width =
dimensions.width*20;


const height =
dimensions.height*20;



const x=20;

const y=60;



pdf.setFontSize(18);

pdf.text(
"Box Dieline Template",
20,
20
);



pdf.setFontSize(10);

pdf.text(
"Solid lines = Cut | Dashed lines = Fold",
20,
35
);




// Center

pdf.rect(

x+width,

y,

length,

height

);



// Left

pdf.rect(

x,

y,

width,

height

);



// Right

pdf.rect(

x+width+length,

y,

width,

height

);



// Top flap

pdf.rect(

x+width,

y-height,

length,

height

);



// Bottom flap

pdf.rect(

x+width,

y+height,

length,

height

);



// Fold lines

pdf.setLineDashPattern(
[5,5],
0
);


pdf.line(

x+width,

y,

x+width,

y+height

);



pdf.line(

x+width+length,

y,

x+width+length,

y+height

);



pdf.save(
"box-dieline.pdf"
);


};



return (

<button

onClick={generatePDF}

>

Export Dieline PDF

</button>

);


}