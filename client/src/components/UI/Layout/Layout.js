import { Header } from '../Header/Header'
import { MainContent } from '../MainContent/MainContent'
import { VerticalMenu } from '../VerticalMenu/VerticalMenu'


export const Layout = ({state}) => {
    return (
        
            <div id="layout-wrapper">
                <Header />
                <VerticalMenu />
                <MainContent state={state}/>
            </div>
        
    )
}