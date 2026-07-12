import * as pdfjsLib from "pdfjs-dist";


pdfjsLib
.GlobalWorkerOptions
.workerSrc =
new URL(

"pdfjs-dist/build/pdf.worker.min.mjs",

import.meta.url

).toString();




export async function pdfToTexture(file){


const buffer =
await file.arrayBuffer();



const pdf =
await pdfjsLib
.getDocument({

data:buffer

})
.promise;



const page =
await pdf.getPage(1);



const viewport =
page.getViewport({

scale:2

});



const canvas =
document.createElement("canvas");



canvas.width =
viewport.width;



canvas.height =
viewport.height;



const context =
canvas.getContext("2d");



await page.render({

canvasContext:context,

viewport

}).promise;



return canvas;


}