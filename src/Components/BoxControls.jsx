export default function BoxControls({

dimensions,

setDimensions

}){


const update=(key,value)=>{


setDimensions({

...dimensions,

[key]:Number(value)

});


};



return (

<div className="panel">


<label>
Length
</label>

<input

type="number"

value={dimensions.length}

onChange={(e)=>
update(
"length",
e.target.value
)
}

/>



<label>
Width
</label>

<input

type="number"

value={dimensions.width}

onChange={(e)=>
update(
"width",
e.target.value
)
}

/>



<label>
Height
</label>

<input

type="number"

value={dimensions.height}

onChange={(e)=>
update(
"height",
e.target.value
)
}

/>


</div>

);

}