import Input from "../basic-components/Input"
import Menu from "../menu/menu/Menu"
import UserInfo from "../user-info/UserInfo"
import Logo from "../logo/Logo"
import './Navbar.css'

const Navbar = () => {
    const listOption = [
        {
            id: 1,
            content: "What to cook"
        },
        {
            id: 2,
            content: "Recipes"
        },
        {
            id: 3,
            content: "Ingredients"
        },
        {
            id: 4,
            content: "Occasions"
        },
        {
            id: 5,
            content: "About us"
        }
    ]
    return (
        <>
            <div className="navbar">
                <Logo></Logo>
                <Input placeholder={'cakescascsa'}></Input>
                <Menu listOption={listOption}></Menu>
                <UserInfo></UserInfo>
            </div>
        </>
    )
}

export default Navbar