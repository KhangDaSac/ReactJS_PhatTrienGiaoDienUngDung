import React from "react";

class ChildComponent extends React.Component{
    state = {
        valueInput: 'abc'
    }
    handleInput = (event) => {
        console.log(event.target.value);
        this.setState({
            valueInput: event.target.value
        });
    }
    handleOnSubmit = (event) =>{
        
    }
    render(){
        return(
            <div>
                <input type="text" name="" id="" value={this.state.valueInput} onChange={(event)=>{this.handleInput(event)}}/>
            </div>
        )
    }
}

export default ChildComponent;