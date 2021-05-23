import { EntityTable } from './EntityTable/EntityTable'
import {EntityForm} from './EntityForm/EntityForm'
import { useDispatch } from 'react-redux'
import {useEffect, useState} from 'react'
import { getEntity} from '../../../redux/entity/entity.action'

export const Entity = () => {
    const dispatch = useDispatch()
    
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getEntity())
    }, [currentId, dispatch])
    
    return (
        <>
        <h1>Организация</h1>
        <EntityTable setCurrentId={setCurrentId}/>
        <EntityForm currentId={currentId} setCurrentId={setCurrentId}/>
        </>
    )
}