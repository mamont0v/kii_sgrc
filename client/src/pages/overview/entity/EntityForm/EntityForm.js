import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEntity, updateEntity } from '../../../../redux/entity/entity.action'
import './EntityForm.styles.scss'

export const EntityForm = ({currentId, setCurrentId}) => {
    const dispatch = useDispatch()


    const [inputs, handleInputs] = useState({
        title: '',
    })


    const entity = useSelector(state=> currentId ? state.entityList.find(p => p._id === currentId): null)

    useEffect(()=> {
        if (entity) handleInputs(entity) 
    }, [entity])

    const handleSubmit = (event) => {
        event.preventDefault()
            if (currentId) {
                dispatch(updateEntity(currentId, inputs))
                clear()
            } else {
                dispatch(addEntity(inputs))
                clear()
            }
    }


    const clear = () => {
        setCurrentId(null)
        handleInputs(
            {
                title: ''
            }
        )
    }

    return (
        <div className="container">
            <h2>{currentId ? 'Изменить данные об организации' : 'Создать новую организацию'}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="title">Название</label>
                    <input
                        name='title'
                        value={inputs.title}
                        type='text'
                        id='title'
                        autoComplete="off"
                        placeholder="Название организации"
                        onChange={(e) => handleInputs({ ...inputs, title: e.target.value })} />
                </div>
                
                <div className='form-group'>
                    <button type="submit">
                        Создать организацию
                        </button>
                </div>
            </form>
        </div>
    )
}