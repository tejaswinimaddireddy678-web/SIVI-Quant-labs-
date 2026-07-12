export default function HistoryButtons({

undo,

redo,

canUndo,

canRedo

}){


return (

<div>


<button

disabled={!canUndo}

onClick={undo}

>

Undo

</button>



<button

disabled={!canRedo}

onClick={redo}

>

Redo

</button>


</div>

);


}