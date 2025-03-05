import React from "react";
import Item from "../item/Item";
const ListItem = ({ listItem }) => {
    return (
        <>
            {console.log(listItem)}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {
                    listItem.map((item, index) => {
                        return <Item key={index} image={item.image_url} title={item.title}></Item>
                    })
                }
            </div>
        </>
    )
}

export default ListItem;