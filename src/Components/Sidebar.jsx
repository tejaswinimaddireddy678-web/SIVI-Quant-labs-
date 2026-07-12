import Uploads from "./Uploads";
import BoxControls from "./BoxControls";
import PanelUploads from "./PanelUploads";
import TextEditor from "./TextEditor";
import DielineExport from "./DielineExport";



export default function Sidebar({

  onFile,

  dimensions,

  setDimensions,

  setPanelTextures,

  textData,

  setTextData

}) {


return (

<div

style={{

position:"absolute",

top:20,

left:20,

width:300,

height:"90vh",

overflowY:"auto",

zIndex:100

}}

>


<h2>
📦 Box Designer
</h2>


<h3>
Upload
</h3>


<Uploads

onFile={onFile}

/>



<h3>
Dimensions
</h3>


<BoxControls

dimensions={dimensions}

setDimensions={setDimensions}

/>



<h3>
Panels
</h3>


<PanelUploads

setPanelTextures={setPanelTextures}

/>



<h3>
Branding
</h3>


<TextEditor

textData={textData}

setTextData={setTextData}

/>



<h3>
Project
</h3>






<h3>
PDF Export
</h3>


<DielineExport

dimensions={dimensions}

/>


</div>


);


}