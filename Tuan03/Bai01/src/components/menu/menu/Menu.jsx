import MenuOption from "../menu-options/MenuOption"
const Menu = (props) => {
    return (
        <>
            <div>
                {
                    props.listOption.map(option => {
                        { console.log(option) }
                        return <MenuOption key={option.id}>{option.content}</MenuOption>
                    })
                }
            </div>

        </>
    )
}

export default Menu