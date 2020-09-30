/* Initial State */
const userListInitialState = {
  users: [],
};

/**
 *  User List reducer
 * @param {object} state - local state
 * @param {String} action.type - type of action
 */
const userListReducer = (state, { type, ...params }) => {
  switch (type) {
    case 'USERS': {
      const newState = {
        ...state,
        users: params.payload.users,
      };

      return newState;
    }
    case 'EDIT_USER':
    case 'CHANGE_STATE':
    case 'NEW_USER': {
      return state;
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export { userListReducer, userListInitialState };
