import React from "react";
import ChildComponent from "./ChildComponent";
import DislayInfo from "./DislayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
    state = {
        listUser: [
            {
                id: 1,
                Name: 'Khang',
                Age: 22
            },
            {
                id: 2,
                Name: 'Khanh',
                Age: 23
            },
            {
                id: 3,
                Name: 'Hung',
                Age: 20
            }
        ]
    }
    handleAddNewUser = (newUser) => {
        this.setState({
            listUser: [...this.state.listUser, newUser]
        })
    }
    handleDeleteUser = (userID) => {
        this.setState({
            listUser: this.state.listUser.filter((user) => user.id != userID)
        })
    }
    render() {
        return (
            <>
                <AddUserInfo handleAddNewUser={this.handleAddNewUser}></AddUserInfo>
                <hr />
                <DislayInfo listUser={this.state.listUser} handleDeleteUser = {this.handleDeleteUser}></DislayInfo>
            </>
        );
    }
}

export default MyComponent;