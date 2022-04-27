import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);

export default store;
