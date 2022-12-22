import { createStore } from 'redux';

const initState = {
  counter: 0,
  counterToggle: false,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'increment':
      if (action.amount) {
        return { counter: state.counter + action.amount, counterToggle: state.counterToggle };
      }
      return { counter: state.counter + 1, counterToggle: state.counterToggle };
    case 'decrement':
      return { counter: state.counter - 1, counterToggle: state.counterToggle };
    case 'toggle':
      return {
        counter: state.counter,
        counterToggle: !state.counterToggle,
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

export default store;
