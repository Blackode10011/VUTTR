import toolRepository from '../services/api/tools';

export const getAllTools = (token) => (dispatch) => {
  toolRepository.getAll(token)
    .then(
      (response) => {
        dispatch({
          type: 'LOAD_TOOLS',
          payload: response,
        });
      },
    );
};

export const createTool = (token, tool) => (dispatch) => {
  toolRepository.createTool(token, tool)
    .then(
      dispatch({
        type: 'CREATE_TOOL',
        payload: 'Tool created',
      }),
    );
};

export const deleteTool = (token, id) => (dispatch) => {
  toolRepository.deleteTool(token, id)
    .then(
      (response) => {
        if (response === 204) {
          dispatch({ type: 'CLOSE_DELETE' });
        }
      },
    );
};

export const filterTools = (title, tools) => (dispatch) => {
  if (title !== '') {
    dispatch({
      type: 'SEARCH_TOOL',
      payload: {
        filteredTools: tools.filter(
          (findTool) => findTool.title.toLowerCase()
            .includes(title.toLowerCase()),
        ),
        search: title,
      },
    });
  } else {
    dispatch({
      type: 'SEARCH_TOOL',
      payload: {
        filteredTools: tools,
        search: title,
      },
    });
  }
};
export const getByTag = (token, tag) => (dispatch) => {
  toolRepository.getByTag(token, tag)
    .then(
      (response) => {
        dispatch({
          type: 'SEARCH_TOOL',
          payload: {
            filteredTools: response,
            search: tag,
          },
        });
      },
    );
};
