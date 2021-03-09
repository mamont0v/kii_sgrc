import * as types from './personnel.types'

// const INITIAL_STATA = {
//     personnel: []
// }

export const personnelReducer = (personnel = [], action) => {
    switch (action.type) {

        case types.PERSONNEL_TABLE_LOAD_USER_SUCCESS:
            return action.payload
        case types.PERSONNEL_TABLE_DELETE_USER_SUCCESS:
            return personnel.filter(person => person._id !== action.payload)
        case types.PERSONNEL_TABLE_ADD_USER_SUCCESS:
            return [...personnel, action.payload]
        case types.PERSONNEL_TABLE_UPDATE_USER_SUCCESS:
            return personnel.map(person => person._id === action.payload._id ? action.payload : person)
        case types.PERSONNEL_TABLE_UPDATE_FAILED:
            return personnel
        default:
            return personnel
    }
}




