import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PageTitle.styles.scss'
import { AiOutlineMenu } from "react-icons/ai"
import { toggleSidebarMenu } from '../../redux/menu-sidebar/sidemenu.action'
import { BsX } from "react-icons/bs";

export const PageTitle = () => {
    // const [menuSidebar, toggleMenuSidebar] = useState()
    const dispatch = useDispatch()

    const sidebarMenu = useSelector(state => state.sidebarMenu)

    const { hidden } = sidebarMenu

    return (
        <div className="page-title has-text-centered">
            <div className="hamburger-title"
                onClick={() => dispatch(toggleSidebarMenu())}>
                {hidden ? <AiOutlineMenu className='menu-toggle' /> : <BsX className='menu-toggle' />
                }
            </div>
            <div className="title-wrap">
                <h1 className="title is-4">
                    Главная
                </h1>
            </div>
            <div className="toolbar ml-auto">
                <div className="toolbar-link">
                    <span></span>
                </div>
                <div className="toolbar-link">
                    <span></span>
                </div>
                <div className="toolbar-link">
                    <span></span>
                </div>
            </div>
        </div>
    )
}





