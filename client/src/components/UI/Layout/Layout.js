import './Layout.styles.scss'
import { Header } from '../Header/Header'
import { MainContent } from '../MainContent/MainContent'
import { VerticalMenu } from '../VerticalMenu/VerticalMenu'
import { Sidebar } from '../Sidebar/Sidebar'
import { SidebarMenu } from '../Sidebar/SidebarMenu/SidebarMenu'


export const Layout = () => {
    return (
        <div className="default-layout sidebar-default">
            {/* <Header />
                 <VerticalMenu /> */}
            <Sidebar />
            <SidebarMenu/>
            <MainContent />
        </div>

    )
}