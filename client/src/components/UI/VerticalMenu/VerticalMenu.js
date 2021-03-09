import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './VerticalMenu.styles.scss'

import { Link } from 'react-router-dom'

export const VerticalMenu = () => {
    return (

        <div className="vertical-menu">
            <SimpleBar style={{ height: '100%' }}>
                <div className="h-100 simplebar">
                    <div className="menu">
                        <label htmlFor="menu_bar01">Общие сведения</label>
                        <input type="checkbox" id="menu_bar01" className="accordion" />
                        <ul id="links01">
                            <li><Link to="/overview/entity">Организации</Link></li>
                        </ul>
                        <label htmlFor="menu_bar02">Активы</label>
                        <input type="checkbox" id="menu_bar02" className="accordion" />
                        <ul id="links02">
                            <li><Link to="/assets/personnel">Персонал</Link></li>
                           
                            <li><Link to="/assets/it-assets">ИТ-активы</Link></li>
                           
                           
                        </ul>
                        <label htmlFor="menu_bar03">Отчеты</label>
                        <input type="checkbox" id="menu_bar03" className="accordion" />
                        <ul id="links03">
                            <li><Link to="/workflow/process-grading">Рабочие процессы</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </SimpleBar>
        </div>

    )
}