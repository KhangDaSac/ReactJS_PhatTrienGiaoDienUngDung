import React from "react";

class AddUserInfo extends React.Component {
    state = {
        Name: '',
        Age: ''
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            ...this.state,
            id: Math.floor(Math.random() * 100) + this.state.Name
        })
    };

    handleOnChangeInputName = (event) => {
        this.setState({
            ...this.state,
            Name: event.target.value
        })
    };

    handleOnChangeInputAge = (event) => {
        this.setState({
            ...this.state,
            Age: event.target.value
        })
    };
    render() {
        return (
            <>
                <form action="" onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <div className="show-content-group">My name: {this.state.Name}</div>
                    <div className="show-content-group">My age: {this.state.Age}</div>

                    <div className="input-group">
                        <div>Your name: </div>
                        <input type="text" onChange={(event) => { this.handleOnChangeInputName(event) }} />
                    </div>
                    <div className="input-group">
                        <div>Your age: </div>
                        <input type="text" onChange={(event) => { this.handleOnChangeInputAge(event) }} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default AddUserInfo;