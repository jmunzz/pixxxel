import React from 'react';
import './canvas.css';


function Canvas(props){

    var rows2 = [];
    for (let x = 0; x < 10000; x++) {
        rows2.push(<div id={"canvas"+x} onMouseOver={function(event){props.color(event.target.id)}}></div>);
    }

    return (rows2)
}

export default Canvas;