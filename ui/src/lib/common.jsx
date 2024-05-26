import axios from 'axios';
export function storeTokenInLocalStorage(token) {
  localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export function storeUserInLocalStorage(data) {
  localStorage.setItem('email', data.email);
  localStorage.setItem('first_name', data.first_name);
  localStorage.setItem('last_name', data.last_name);
  localStorage.setItem('occupation', data.occupation);
  localStorage.setItem('phone', data.phone);
  localStorage.setItem('url', data.url);
  localStorage.setItem('username', data.username);
  localStorage.setItem('id', data.id);
}

export function getUserFromLocalStorage() {
  return new Promise((resolve)=> {
    const user = {
      "email": localStorage.getItem('email'),
      "first_name": localStorage.getItem('first_name'),
      "last_name": localStorage.getItem('last_name'),
      "occupation": localStorage.getItem('occupation'),
      "phone": localStorage.getItem('phone'),
      "url": localStorage.getItem('url'),
      "username": localStorage.getItem('username'),
      "id": localStorage.getItem('id'),
    }
    resolve(user);
  })

  
}

export async function getIsAuthenticated() {
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      return false;
    }
    const response = await axios({
      method: 'GET',
      url: import.meta.env.VITE_API_URL + 'my-tuspass',
      headers: {
        Authorization: token
      }
    });
    return response.data
  }
  catch (err) {
    console.log('1. getAuthenticatedUser, Something Went Wrong', err);
    return false;
  }
}