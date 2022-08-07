export const createStore = (reducer, initState) => {
  let state = initState;
  let listeners = [];

  const subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((l) => l !== fn);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((fn) => fn());
  };

  const getState = () => {
    return state;
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
};

const myReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(myReducer({}));
store.dispatch();
