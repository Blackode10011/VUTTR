import userRepository from '../services/api/users';

export const userAuth = (values) => (dispatch) => {
  userRepository.login({
    email: values.email,
    password: values.password,
  }).then(
    (response) => {
      if (response === 401) {
        dispatch({
          type: 'ERROR_USER',
          payload: 'Failed to validate token',
        });
      } else if (response === 404) {
        dispatch({
          type: 'ERROR_USER',
          payload: 'User not found',
        });
      } else if (response === 403) {
        dispatch({
          type: 'ERROR_USER',
          payload: 'Invalid password',
        });
      } else {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response,
        });
      }
    },
  );
};
export const createUser = (values) => (dispatch) => {
  userRepository.createUser({
    name: values.name,
    email: values.email,
    password: values.password,
  }).then(
    (response) => {
      if (response === 400) {
        dispatch({
          type: 'ERROR_USER',
          payload: 'User already exists',
        });
      } else {
        dispatch({
          type: 'CREATE_USER',
          payload: {
            user: response,
            message: 'User created',
          },
        });
      }
    },
  );
};
export const logoutUser = () => (dispatch) => {
  dispatch({ type: 'LOGOUT_SUCCESS' });
};
export const updateUser = (token, user) => (dispatch) => {
  userRepository.updateUser(token, user)
    .then(
      (response) => {
        if (response === 400) {
          dispatch({
            type: 'ERROR_USER',
            payload: 'E-mail already registered',
          });
        } else {
          dispatch({
            type: 'UPDATE_USER',
            payload: {
              user: response,
              message: 'User updated',
            },
          });
        }
      },
    );
};
export const updateUserAuth = (user) => (dispatch) => {
  dispatch({
    type: 'UPDATE_USER_AUTH',
    payload: user,
  });
};
export const deleteUser = (token, id) => (dispatch) => {
  userRepository.deleteUser(token, id)
    .then(
      (response) => {
        if (response === 204) {
          dispatch({ type: 'LOGOUT_SUCCESS' });
        }
      },
    );
};
