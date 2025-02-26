import Button from '../../basic-components/Button'
import './MenuOption.css'
const MenuOption = ({children, ...props}) => {
    return(
        <>
            <Button {...props}>{children}</Button>
        </>
    )
}

export default MenuOption