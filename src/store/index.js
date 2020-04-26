import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const key = "NeteaseCloudMusic";
const persistConfig = {
  key,
  storage,
  // whitelist: [""]
};

let middlewares = [];
const logger = createLogger({});
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const clearState = localStorage.setItem(key, null);

export const persistor = persistStore(store);
export default store;
