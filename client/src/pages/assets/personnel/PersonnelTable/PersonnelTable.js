import { useSelector } from 'react-redux'
import './PersonnelTable.styles.scss'
import {useDispatch} from 'react-redux'
import {personnelTableDelete } from '../../../../redux/personnel/personnel.action'




export const PersonnelTable = ({setCurrentId}) => {
    const fethedPersonnel = useSelector(state => state.personnelList)
    const dispatch = useDispatch()


    return (
        !fethedPersonnel.length > 0 ? (
            <p>Информации о пользователях нет.</p>
        ) : (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ФИО</th>
                        <th>Username</th>
                        <th>Должность</th>
                        <th>E-mail</th>
                        <th>Домен</th>
                        <th>Связанное оборудование</th>
                        <th>Уровень привилегии</th>
                        <th>Администратор безопасности</th>
                        <th>Количество инцидентов</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fethedPersonnel.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td>{user.id}</td>
                                <td>{user.realname}</td>
                                <td>{user.username}</td>
                                <td>{user.position}</td>
                                <td>{user.email}</td>
                                <td>{user.domain}</td>
                                <td>{user.related_hardware}</td>
                                <td>{user.privilege_level}</td>
                                <td>{user.is_security_administrator}</td>
                                <td>{user.number_of_incidents}</td>
                                <td><button type="button" onClick={()=>setCurrentId(user._id)}>Edit</button></td>
                                <td><button type="button" onClick={()=>dispatch(personnelTableDelete(user._id))}>
                                    DELETE
                        </button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    )
}