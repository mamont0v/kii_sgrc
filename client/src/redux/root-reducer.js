import { combineReducers } from "redux";
import {personnelReducer} from './personnel/personnel.reducers'
import {assetsReducer} from './itAssets/itAssets.reducer'

export default combineReducers({
  personnelList: personnelReducer,
  assetsList: assetsReducer
});