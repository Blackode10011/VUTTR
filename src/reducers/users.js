const INITIAL_STATE = {
  message: '',
  showManageAccount: false,
  showDeleteUser: false,
  userUpdated: [],
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_USER': {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        message: action.payload.message,
        userUpdated: action.payload.user,
      };
    }
    case 'ERROR_USER': {
      return {
        ...state,
        message: action.payload,
      };
    }
    case 'CLOSE_SUCCESS': {
      return {
        ...state,
        message: action.payload,
      };
    }
    case 'SHOW_MANAGE_ACCOUNT': {
      return {
        ...state,
        showManageAccount: true,
      };
    }
    case 'CLOSE_MANAGE_ACCOUNT': {
      return {
        ...state,
        showManageAccount: false,
      };
    }
    case 'SHOW_DELETE_USER': {
      return {
        ...state,
        showDeleteUser: true,
      };
    } case 'CLOSE_DELETE_USER': {
      return {
        ...state,
        showDeleteUser: false,
      };
    }
    default:
      return state;
  }
};

export default users;
