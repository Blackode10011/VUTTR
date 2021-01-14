import service from '../index';

const url = service.BASE_URL;

function getAll(token) {
  return fetch(`${url}/tools`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
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

function getByTag(token, tag) {
  return fetch(`${url}/tools?tag=${tag}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
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

function createTool(token, tool) {
  return fetch(`${url}/tools`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(tool),
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

function deleteTool(token, id) {
  return fetch(`${url}/tools/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
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
  getAll,
  createTool,
  deleteTool,
  getByTag,
};
