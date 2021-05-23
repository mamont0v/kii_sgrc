import './PageTitle.styles.scss'
import { AiOutlineMenu } from "react-icons/ai"

export const PageTitle = () => {
    return (
        <div className="page-title has-text-centered">
            <div className="hamburger-title">
                <AiOutlineMenu className="menu-toggle" />
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