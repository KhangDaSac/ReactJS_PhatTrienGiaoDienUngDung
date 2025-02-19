import React from "react";

class Contact extends React.Component {
    render() {
        return <>
            <div style={{
                border: '1px solid'
            }}>
                <div >
                    <h1>{this.props.contactDetail.firstName}</h1>
                    <h2>{this.props.contactDetail.lastName}</h2>
                </div>
                <div style={{
                    'border-top': '1px solid'
                }}>
                    Phone: {this.props.contactDetail.phone}
                </div>
                <div style={{
                    'border-top': '1px solid'
                }}>
                    Address: {this.props.contactDetail.address}
                </div>
            </div>
        </>
    }
}

export default Contact