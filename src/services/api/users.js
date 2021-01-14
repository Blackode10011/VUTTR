import service from '../index';

const url = service.BASE_URL;

function login(user) {
  return fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(
      async (response) => {
        if (response.ok) {
          const resp = await response.json();
          return resp;
        }
        const resp = await response.status;
        return resp;
      },
    );
}
function createUser(user) {
  return fetch(`${url}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(
      async (response) => {
        if (response.ok) {
          const resp = await response.json();
          return resp;
        }
        const resp = await response.status;
        return resp;
      },
    );
}
function updateUser(token, user) {
  return fetch(`${url}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(user),
  })
    .then(
      async (response) => {
        if (response.ok) {
          const resp = await response.json();
          return resp;
        }
        const resp = await response.status;
        return resp;
      },
    );
}
function deleteUser(token, id) {
  return fetch(`${url}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then(
      async (response) => {
        const resp = await response.status;
        return resp;
      },
    );
}

export default {
  login,
  createUser,
  updateUser,
  deleteUser,
};
