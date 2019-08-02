import React from 'react';
import "./palette.css";

function Palette(props){

    

var rows = [];
    for (let i = 100; i < 125; i++) {
        rows.push(<div id={"box"+i} style={{backgroundColor:props.setColor[i]}}
        onClick={function(event){props.color(event.target.id)}}></div>);
    }

    return (rows)

}
export default Palette;