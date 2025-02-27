import React from "react";
import Contact from "./Contact";
import "./ListContact.css";

class ListContact extends React.Component {
    render() {
        return <>
            <div className="list-contact">
                {this.props.listContact.map((contact) => {
                    return <Contact contactDetail={contact} key={contact.id}></Contact>
                })}
            </div>
        </>
    }
}

export default ListContact