import * as types from './itAssets.types'

// const INITIAL_STATA = {
//     assets: []
// }

export const assetsReducer = (assets = [], action) => {
    switch (action.type) {
        case types.IT_ASSETS_TABLE_LOAD_SUCCESS:
            return action.payload

        case types.IT_ASSETS_TABLE_DELETE_SUCCESS:
            return assets.filter(asset => asset._id !== action.payload)

        case types.IT_ASSETS_TABLE_ADD_SUCCESS:
            return [...assets, action.payload]
        case types.IT_ASSETS_TABLE_UPDATE_SUCCESS:
            return assets.map(asset => asset._id === action.payload._id ? action.payload : asset)
        case types.IT_ASSETS_TABLE_FAILED:
            return assets
        default:
            return assets
    }
}
