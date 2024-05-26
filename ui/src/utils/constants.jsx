const API_URL = 'http://localhost:3000/api'
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/register`,
  SIGN_IN: `${API_URL}/login`,
  GET_USER: `${API_URL}/auth/me`,
}
const APP_URL = 'http://127.0.0.1:5173'
export const APP_ROUTES = {
  SIGN_IN: `${APP_URL}/login`,
  SIGN_UP: `${APP_URL}/register`,
  UPLOAD_IMG: `${APP_URL}/register/upload`,
  DASHBOARD: `${APP_URL}/my-tuspass`,
}