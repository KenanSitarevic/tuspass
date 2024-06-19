import axios from 'axios';
export function storeTokenInLocalStorage(token) {
  localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export function storeUserInLocalStorage(data) {
  console.log(data);
  localStorage.setItem('email', data.email);
  localStorage.setItem('first_name', data.first_name);
  localStorage.setItem('last_name', data.last_name);
  localStorage.setItem('occupation', data.occupation ? data.occupation : '');
  localStorage.setItem('phone', data.phone ? data.phone : '');
  localStorage.setItem('url', data.url ? data.url : '');
  localStorage.setItem('color', data.color ? data.color : '');
  localStorage.setItem('company', data.company ? data.company : '');
  localStorage.setItem('city', data.city ? data.city : '');
  localStorage.setItem('address', data.address ? data.address : '');
  localStorage.setItem('username', data.username ? data.username : '');
  localStorage.setItem('zip_code', data.zip_code ? data.zip_code : '');
  localStorage.setItem('facebook_profile', data.facebook_profile ? data.facebook_profile : '');
  localStorage.setItem('instagram_profile', data.instagram_profile ? data.instagram_profile : '');
  localStorage.setItem('linkedin_profile', data.linkedin_profile ? data.linkedin_profile : '');
  localStorage.setItem('twitter_profile', data.twitter_profile ? data.twitter_profile : '');
  localStorage.setItem('youtube_profile', data.youtube_profile ? data.youtube_profile : '');
  localStorage.setItem('github_profile', data.github_profile ? data.github_profile : '');
  localStorage.setItem('tiktok_profile', data.tiktok_profile ?data.tiktok_profile : '');
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
      "color": localStorage.getItem('color'),
      "company": localStorage.getItem('company'),
      "city": localStorage.getItem('city'),
      "address": localStorage.getItem('address'),
      "zip_code": localStorage.getItem('zip_code'),
      "facebook_profile": localStorage.getItem('facebook_profile'),
      "instagram_profile": localStorage.getItem('instagram_profile'),
      "linkedin_profile": localStorage.getItem('linkedin_profile'),
      "twitter_profile": localStorage.getItem('twitter_profile'),
      "youtube_profile": localStorage.getItem('youtube_profile'),
      "github_profile": localStorage.getItem('github_profile'),
      "tiktok_profile": localStorage.getItem('tiktok_profile'),
      "id": localStorage.getItem('id'),
    }
    resolve(user);
  })

  
}

export function deleteUserFromLocalStorage(){
  localStorage.removeItem('email')
   localStorage.removeItem('first_name')
  localStorage.removeItem('last_name')
    localStorage.removeItem('occupation')
   localStorage.removeItem('phone')
       localStorage.removeItem('url')
    localStorage.removeItem('username')
     localStorage.removeItem('color')
      localStorage.removeItem('company')
      localStorage.removeItem('city')
    localStorage.removeItem('address')
     localStorage.removeItem('zip_code')
      localStorage.removeItem('facebook_profile')
  localStorage.removeItem('instagram_profile')
      localStorage.removeItem('linkedin_profile')
    localStorage.removeItem('twitter_profile')
       localStorage.removeItem('youtube_profile')
      localStorage.removeItem('github_profile')
       localStorage.removeItem('tiktok_profile')
       localStorage.removeItem('token')
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