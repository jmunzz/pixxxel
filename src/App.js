import React from 'react';
import Palette from './Palette';
import Canvas from './Canvas';
import './App.css';

 function rdmz (){
        return Math.random() *(250 -1) + 1;
    }

    var colors =[]
    for (let y = 0; y < 255 ; y++){
        colors.push(`rgb(${rdmz()},${rdmz()},${rdmz()})`)
    }


 class App extends React.Component{

    constructor(){
      super();
      this.state = {color: "white", mousedown: false, canvasColor: "black"};
    };

chooseColor=(id)=>{
  this.setState({color: document.getElementById(id).style.backgroundColor}) 

};

 fillColor = (id)=>{
   if(this.state.mousedown === true){
  document.getElementById(id).style.backgroundColor = this.state.color 
   }
 };

 startPaint = () =>{
    this.setState({mousedown: true})
  }

 stopPaint = () =>{
  this.setState({mousedown: false})
 }

 clearCanvas = () =>{
  for (let x = 0; x < 10000; x++) {
  document.getElementById(`canvas${x}`).style.backgroundColor = "black" 
 }
}

 randomizeColor = () => {
  colors=[]
  for (let y = 0; y < 255 ; y++){
    colors.push(`rgb(${rdmz()},${rdmz()},${rdmz()})`)
}
this.forceUpdate()
}

 
render(){
    return(
      <div>
        <div className="container">
        <div id="palette"><Palette color={this.chooseColor} setColor={colors}/></div>
        <div id='canvas' onMouseDown={()=>this.startPaint()} onMouseUp={()=>this.stopPaint()}>
          <Canvas color={this.fillColor} canvasColor={this.clearCanvas}/></div>
      </div>
      <button onClick={() => this.randomizeColor()}>randomize</button>
      <button onClick= {() => this.clearCanvas()}>clear</button>
      </div>
    )
  }
}

export default App;