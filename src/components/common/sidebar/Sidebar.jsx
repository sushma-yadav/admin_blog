import './sidebar.css'
import { TbHome } from 'react-icons/tb'
import { CiUser } from 'react-icons/ci'
import { BiWallet } from 'react-icons/bi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { RiAdminLine } from 'react-icons/ri'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
// import { GoPrimitiveDot } from 'react-icons/go'
import { Link } from "react-router-dom";
import { useState } from 'react'

function Sidebar() {

    const [menuExpanded, setMenuExpanded] = useState(false)
    const [clientAccordian, setClientAccordian] = useState(false)

    return (
        <div className="sidebar_section" >
            <div className='sidebar_heading'>
                <p>{!menuExpanded ? 'BLOG SITE ' : 'BT'}</p>

                <button onClick={() => setMenuExpanded(!menuExpanded)}>
                    <BsArrowLeft
                        style={{ transform: menuExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                </button>
            </div>
            <ul className='sidebar_ul'>
                <Link to='/'>
                    <li>
                        <div className='elements'>
                            <TbHome size={18} color={'gray'} />
                            {!menuExpanded && <p>Dashboard</p>}
                        </div>
                        {/* {!menuExpanded && <MdOutlineKeyboardArrowRight
                            size={18}
                            style={{ textAlign: 'right' }}
                        />} */}
                    </li>
                </Link>
                <li onClick={() => setClientAccordian(!clientAccordian)}>
                    <div className='elements'>
                        <CiUser size={18} color={'gray'} />
                        {!menuExpanded && <p>Client Area</p>}
                    </div>
                    {!menuExpanded && <MdOutlineKeyboardArrowRight
                        size={18}
                        style={{ textAlign: 'right', transform: clientAccordian ? "rotate(90deg)" : 'rotate(0deg)' }}
                    />}
                </li>
                {!menuExpanded && clientAccordian && <ul className='subMenu'>
                    <Link to='/add-client'>
                        <li className='subList'> Add Client</li>
                    </Link>
                    <Link to="/client-list">
                        <li className='subList'>Client List</li>
                    </Link>
                    <li className='subList'>Client Report Setting</li>
                </ul>}
                <li>
                    <div className='elements'>
                        <BiWallet size={18} color={'gray'} />
                        {!menuExpanded && <p>Wallet Area</p>}
                    </div>
                    {!menuExpanded && <MdOutlineKeyboardArrowRight
                        size={18}
                        style={{ textAlign: 'right' }}
                    />}
                </li>
                <li>
                    <div className='elements'>
                        <HiOutlineDocumentReport size={18} color={'gray'} />
                        {!menuExpanded && <p>Report Area</p>}
                    </div>
                    {!menuExpanded && <MdOutlineKeyboardArrowRight
                        size={18}
                        style={{ textAlign: 'right' }}
                    />}
                </li>
                <li>
                    <div className='elements'>
                        <RiAdminLine size={18} color={'gray'} />
                        {!menuExpanded && <p>Admin Area</p>}
                    </div>
                    {!menuExpanded && <MdOutlineKeyboardArrowRight
                        size={18}
                        style={{ textAlign: 'right' }}
                    />}
                </li>
                <li>
                    <div className='elements'>
                        <AiOutlineExclamationCircle size={18} color={'gray'} />
                        {!menuExpanded && <p>Manage Concerns</p>}
                    </div>
                    {!menuExpanded && <MdOutlineKeyboardArrowRight
                        size={18}
                        style={{ textAlign: 'right' }}
                    />}
                </li>
                <li>
                    <div className='elements'>
                        <IoSettingsOutline size={18} color={'gray'} />
                        {!menuExpanded && <p>Manage Config.</p>}
                    </div>
                    {!menuExpanded && <MdOutlineKeyboardArrowRight
                        size={18}
                        style={{ textAlign: 'right' }}
                    />}
                </li>
            </ul>
        </div>

    )
}

export default Sidebar