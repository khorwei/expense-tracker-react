//basically how we specify the application state changes is response to certain actions to our store to our context

//state == initialstate from globalstate
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      //send the current state
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
