import { combineReducers } from "redux";
import {personnelReducer} from './personnel/personnel.reducers'
import {assetsReducer} from './itAssets/itAssets.reducer'
import {entityReducer} from './entity/entity.reducers'

export default combineReducers({
  personnelList: personnelReducer,
  assetsList: assetsReducer,
  entityList: entityReducer
});