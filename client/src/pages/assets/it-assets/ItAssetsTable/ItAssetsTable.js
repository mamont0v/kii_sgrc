import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteAssets } from '../../../../redux/itAssets/itAssets.action'


export const ItAssetsTable = ({ setCurrentId }) => {
    const fethedAssets = useSelector(state => state.assetsList)
    
    const dispatch = useDispatch()

    // const deletePerson = (id) => {
    //     if (window.confirm('Удалить пользователя?')) {
    //         dispatch(deleteAssets(id))
    //         window.alert('Действие выполнено. Обновите страницу.')
    //     } else {
    //         window.alert('Действие было отменено')
    //     }
    // }

    return (
        <div style={{ overflow: "scroll" }}>
            {!fethedAssets.length ? (
            <p>Информации о пользователях нет.</p>
        ) : (
            <table style={{ overflow: "visible" }} className="table">
                <thead>
                    <tr>
                        <th>Идентификатор</th>
                        <th>Наименование</th>
                        <th>Критичность</th>
                        <th>Локация</th>
                        <th>Владелец актива</th>
                        <th>Администратор безопасности</th>
                        <th>Аудитор безопасности</th>
                        <th>Менеджер по контролю соответствия</th>
                        <th>Описание</th>
                        <th>Объект КИИ</th>
                        <th>Тип</th>
                        <th>Адреса размещения объекта</th>
                        <th>КПП подразделений</th>
                        <th>Сфера деятельности</th>
                        <th>Назначение объекта</th>
                        <th>Архитектура объекта</th>
                        <th>Критичность на основе показателей</th>
                        <th>Дата категорирования</th>
                        <th>Изменить</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {fethedAssets.map((asset) => {
                        return (
                            <tr key={asset._id}>
                                <td>{asset.id}</td>
                                <td>{asset.title}</td>
                                <td>{asset.status_critical}</td>
                                <td>{asset.location}</td>
                                <td>{asset.owner_asset}</td>
                                <td>{asset.sec_administrator}</td>
                                <td>{asset.sec_auditor}</td>
                                <td>{asset.manager_compliance}</td>
                                <td>{asset.description}</td>
                                <td>{asset.is_kii}</td>
                                <td>{asset.type}</td>
                                <td>{asset.adress}</td>
                                <td>{asset.kpp_object}</td>
                                <td>{asset.sphere_activity}</td>
                                <td>{asset.purpose_obj}</td>
                                <td>{asset.architecture}</td>
                                <td>{asset.category_critical}</td>
                                <td>{asset.date}</td>
                                <td><button type="button" onClick={() => setCurrentId(asset._id)}>Edit</button></td>
                                <td><button type="button" onClick={() => dispatch(deleteAssets(asset._id))}>
                                    DELETE
                        </button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )}
        </div>
    )
}