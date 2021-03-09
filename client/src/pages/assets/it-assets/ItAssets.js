import { useDispatch } from 'react-redux'
import {useEffect, useState} from 'react'
import {getAssets} from '../../../redux/itAssets/itAssets.action'
import { ItAssetsTable } from './ItAssetsTable/ItAssetsTable'
import { ItAssetsForm } from './ItAssetsForm/ItAssetsForm'

export const ItAssets = () => {
    const dispatch = useDispatch()
    
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getAssets())
    }, [dispatch, currentId])
    
    return (
        <>
        <ItAssetsTable setCurrentId={setCurrentId}/>
        <ItAssetsForm currentId={currentId} setCurrentId={setCurrentId}/>
        </>
    )
}