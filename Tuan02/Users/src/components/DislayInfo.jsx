import React from "react";

class DislayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHideListUser = () =>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUser } = this.props;
        return (
            <>
                <div>
                    <button onClick={() => {this.handleShowHideListUser()}}>{this.state.isShowListUser ? "Hide list user" : "Show list user"}</button>
                </div>
                <hr />
                {this.state.isShowListUser && listUser.map((user) => {
                    return (
                        <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                            <div className="show-content-user-group">My name is: {user.Name}</div>
                            <div className="show-content-user-group">My age: {user.Age}</div>
                            <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default DislayInfo;