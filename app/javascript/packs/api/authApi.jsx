import axios from 'axios'

export function setAuthenticationHeader(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token.access_token}`;
}

export function removeAuthHeader() {
  axios.defaults.headers.common['Authorization'] = null;
}
