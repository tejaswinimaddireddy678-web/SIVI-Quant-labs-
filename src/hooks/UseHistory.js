import {useState} from "react";


export default function useHistory(initial){


const [history,setHistory]=useState([initial]);


const [index,setIndex]=useState(0);



const update=(value)=>{


const newHistory =
history.slice(0,index+1);


newHistory.push(value);


setHistory(newHistory);


setIndex(
newHistory.length-1
);


};



const undo=()=>{


if(index>0)

setIndex(index-1);


};



const redo=()=>{


if(index<history.length-1)

setIndex(index+1);


};



return {

value:history[index],

update,

undo,

redo,

canUndo:index>0,

canRedo:index<history.length-1

};


}