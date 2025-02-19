import React from "react";
import Contact from "./Contact";

class ListContact extends React.Component {
    render() {
        return <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100vw"
            }}>
                {this.props.listContact.map((contact) => {
                    return <Contact contactDetail={contact}></Contact>
                })}
            </div>

        </>
    }
}

export default ListContact