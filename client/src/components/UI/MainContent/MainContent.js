import { Footer } from '../Footer/Footer'
import './MainContent.styles.scss'
import { Personnel } from '../../../pages/assets/personnel/Personnel'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../../../pages/home/Home'
import { Equipments } from '../../../pages/assets/equipments/Equipments'
import { ItAssets } from '../../../pages/assets/it-assets/ItAssets'
import { Entity } from '../../../pages/overview/entity/Entity'
import UpdatableEdge from '../../../pages/workflow/process-grading/ProcessGrading'
import { Activities } from '../../../pages/assets/activities/Activities'

export const MainContent = () => {
    return (
        <div className="main-content">
            <div className="page-content">
               
                <div className="container-fluid">
                    <Switch>
                        <Route exact path='/' render={() => <Home />} />
                        <Route exact path='/assets/personnel' component={() => <Personnel />} />
                        <Route exact path='/assets/equipments' component={() => <Equipments />} />
                        <Route exact path='/assets/it-assets' component={() => <ItAssets />} />
                        <Route exact path='/overview/entity' component={() => <Entity />} />
                        <Route exact path='/workflow/process-grading' component={() => <UpdatableEdge />} />
                        <Route exact path='/assets/activities' component={() => <Activities />} />
                        <Route exact path='/assets/equipments' component={() => <Equipments />} />
                    </Switch>
                </div>
            </div>
          
            <Footer />
        </div>
    )
}