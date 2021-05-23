import './Layout.styles.scss'
import { Header } from '../Header/Header'
import { MainContent } from '../MainContent/MainContent'
import { VerticalMenu } from '../VerticalMenu/VerticalMenu'
import { Sidebar } from '../Sidebar/Sidebar'


export const Layout = () => {
    return (
        <div className="default-layout sidebar-default">
            {/* <Header />
                 <VerticalMenu /> */}
            <Sidebar />
            <MainContent />
        </div>

    )
}