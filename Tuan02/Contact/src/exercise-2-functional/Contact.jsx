import './Contact.css'
const Contact = (props) => {
    return <>
        <div className="contact">
            <div>
                <h1>{props.contactDetail.firstName}</h1>
                <h3>{props.contactDetail.lastName}</h3>
            </div>
            <div>
                <p>Phone: {props.contactDetail.phone}</p>
            </div>
            <div>
                <p>Address: {props.contactDetail.address}</p>
            </div>
        </div>
    </>
}

export default Contact