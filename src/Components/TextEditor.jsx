export default function TextEditor({

textData,

setTextData

}){


return (

<div className="panel">


<input

type="text"

placeholder="Brand Name"

value={textData.text}

onChange={(e)=>

setTextData({

...textData,

text:e.target.value

})

}

/>



<input

type="number"

value={textData.size}

onChange={(e)=>

setTextData({

...textData,

size:Number(e.target.value)

})

}

/>


</div>

);


}