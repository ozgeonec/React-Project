import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component{
    constructor(props){
        super(props);
        this.changeColor=this.changeColor.bind(this);
        this.state={
            backgroundColor: "pink"
        };
    }
    changeColor(){
        this.setState((prevState)=>{
        let newColor=this.state.backgroundColor === "pink" ? "blue" : "pink";
        return{
            backgroundColor:newColor
    };
});
}
    render(){
        return(
            <div style={{width: "100px", height: "100px", backgroundColor:this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.changeColor}/>
            </div>
        );
    }
}

export default ColoredBlock;