import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";


import commentsReducer from "./reducers/commentsReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
};
