import { Link } from 'react-router-dom'
import './Sidebar.styles.scss'
import logo from '../../../images/atom-svg.svg'
import { FiActivity } from 'react-icons/fi'
import { FiAlertTriangle } from 'react-icons/fi'
import { FiClock } from 'react-icons/fi'
import {FiDatabase} from 'react-icons/fi'


export const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-fixed">
            <div className="sidebar-brand">
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
            <div className="sidebar-inner">
                <ul className="icon-menu">
                    <li>
                        <Link>
                            <FiActivity className="sidebar-svg router-link-active" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FiClock className="sidebar-svg" />
                        </Link>
                    </li>
                    <li>
                        <Link className="disable">
                            <FiAlertTriangle className="sidebar-svg disable" />
                        </Link>
                    </li>
                </ul>

                <ul className="bottom-menu">
                    <li>
                        <Link>
                            <FiDatabase className="sidebar-svg disable" />
                        </Link>
                    </li>
                    <li id="user-menu">
                        <div id="profile-menu" className="dropdown">
                            <img/>
                            <span className="status-indicator"></span>
                        </div>
                       
                    </li>

                </ul>
            </div>
        </aside>
    )
}