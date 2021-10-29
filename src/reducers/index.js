import { combineReducers } from 'redux';
import user from './user';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
};

const authPersistConfig = {
    key: 'auth',
    storage: storage
};

const rootReducer = combineReducers({
    user: persistReducer(authPersistConfig, user)
});

export default persistReducer(rootPersistConfig, rootReducer);