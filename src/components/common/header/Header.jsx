import './header.css'
import { FaRegBell } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import adminLogo from '../../../assets/Images/admin-logo.png'
function Header() {
    return (
        <div className='header'>
            <p>Dashboard</p>
            <div className='header_right'>
                <FaRegBell size={20} color={'gray'} />
                <FiMail size={20} color={'gray'} />
                <img src={adminLogo} alt="" />
                <div className='header-right-text'>
                    <p>Dashboard</p>
                    <p>Super admin</p>
                </div>
            </div>
        </div>
    )
}

export default Header