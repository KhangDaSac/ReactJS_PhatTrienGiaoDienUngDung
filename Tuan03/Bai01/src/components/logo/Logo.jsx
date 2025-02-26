import './Logo.css'
import LogoChef from '../../assets/images/logo/logo-chef.svg'
const Logo = () => {
    return (
        <>
            <div className='group-logo'>
                <img src={LogoChef}/>
                <h1>Chefilfy</h1>
            </div>
        </>
    )
}

export default Logo