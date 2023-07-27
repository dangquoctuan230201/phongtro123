import authReducer from "./authReducer";
import userReducer from "./useReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2
}

const authConfig = {
  ...commonConfig,
	key: 'auth',
  //whitelist để chon ra những state nào của reducer đc lưu ở localstorage
  //blacklist thì chon ra state nào của reducer k lưu ở localstorage
  // nếu trong config k có whitelist or blacklist thì mặc định nó lưu hết các state của reducer dó dưới localstorage
	whitelist: ['isLoggedIn', 'token']
};



const rootReducer = combineReducers({
	//reducer nao muon persist thì bọc trong hàm persistReducer
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
});

export default rootReducer
