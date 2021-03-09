import * as types from './personnel.types'
import axios from 'axios'


export const getPersonnel = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/api/personnel")
        dispatch(
            {
                type: types.PERSONNEL_TABLE_LOAD_USER_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_UPDATE_FAILED,
            dispatch: error.response
        })
    }
}


export const personnelTableDelete = (id) => async (dispatch) => {
    try {

        await axios.delete(`/api/personnel/${id}`)
        dispatch(
            {
                type: types.PERSONNEL_TABLE_DELETE_USER_SUCCESS,
                payload: id
            })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_UPDATE_FAILED,
            dispatch: error.response
        })
    }
}

export const addPersonnel = (person) => async (dispatch) => {
    try {

        const {data} = await axios.post(`/api/personnel/`, person)

        dispatch(
            {
                type: types.PERSONNEL_TABLE_ADD_USER_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_UPDATE_FAILED,
            dispatch: error.response
        })
    }
}


export const updatePersonnel = (id, updatePerson) => async (dispatch) => {
    try {

        const { data } = await axios.patch(`/api/personnel/${id}`, updatePerson)

        dispatch(
            {
                type: types.PERSONNEL_TABLE_UPDATE_USER_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: types.PERSONNEL_TABLE_UPDATE_FAILED,
            dispatch: error.response
        })
    }
}