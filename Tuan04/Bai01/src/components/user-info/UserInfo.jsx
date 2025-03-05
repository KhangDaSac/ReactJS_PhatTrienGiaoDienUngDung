import Button from "../basic-components/Button"
import user from "../../assets/images/user-info/user-info.jpg"
import './UserInfo.css'

const UserInfo = () => {
    return (
        <>
            <Button style = {{
                backgroundColor: "#FDB7EA",
                color: "#F37199",
                borderRadius: "8px"
                }}>Your Recipe Box</Button>
            <img src={user} alt="" />
        </>
    )
}

export default UserInfo