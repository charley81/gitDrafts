import { createStore } from "redux";
import reducer from "./reducers";

// reducer is just a function. it takes in old state and gives you new state
const store = createStore(
  reducer,
  // lets you use redux dev tools
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
