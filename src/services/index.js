const BASE_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://vuttr-shumax.herokuapp.com';

export default {
  BASE_URL,
};
