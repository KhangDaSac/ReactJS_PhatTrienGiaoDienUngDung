import React from "react";
import Contact from "./Contact";
import "./ListContact.css";

const ListContact = (props) => {
    return <>
        <div className="list-contact">
            {props.listContact.map((contact) => {
                return <Contact contactDetail={contact} key = {contact.id}></Contact>
            })}
        </div>
    </>
}

export default ListContact