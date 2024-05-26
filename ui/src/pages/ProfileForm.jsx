import { useState, useEffect } from 'react';
import axios from "axios";
import '../index.css';
import { getIsAuthenticated, getUserFromLocalStorage, storeUserInLocalStorage } from '../lib/common';
import { APP_ROUTES } from '../utils/constants';

const ProfileForm = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [url, setUrl] = useState('')
  const [phone, setPhone] = useState('')
  const [occupation, setOccupation] = useState('')
  const [company, setCompany] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [facebookProfile, setFacebookProfile] = useState('')
  const [instagramProfile, setInstagramProfile] = useState('')
  const [linkedinProfile, setLinkedinProfile] = useState('')
  const [twitterProfile, setTwitterProfile] = useState('')
  const [youtubeProfile, setYoutubeProfile] = useState('')
  const [githubProfile, setGithubProfile] = useState('')
  const [tiktokProfile, setTiktokProfile] = useState('')
  const [user, setUser] = useState()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function isAuthenticated() {
      const authenticated = await getIsAuthenticated();
      if (await !authenticated) {
        if (window.location.href == APP_ROUTES.SIGN_UP){
          setIsEdit(false)
          setLoader(false)
          return;
        }
        if (window.location.href == APP_ROUTES.UPLOAD_IMG){
          setIsEdit(false)
          setLoader(false)
          return;
        }
        window.location.href = APP_ROUTES.SIGN_IN;
      }
      setIsEdit(true)
      loadUserData().then((userData)=>{
        setUserData(userData)})
      setLoader(false)
    }
    isAuthenticated();
  }, []); 

  const postUser = (email, password, username, firstName, lastName, occupation, phone, url, company, city, address, zipCode, facebookProfile, instagramProfile, linkedinProfile, twitterProfile, youtubeProfile, githubProfile, tiktokProfile) => {
    

    axios.post(import.meta.env.VITE_API_URL + 'register',{
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      occupation: occupation,
      username: username,
      url: url,
      phone: phone,
      company: company,
      city: city,
      address: address,
      zip_code: zipCode,
      facebook_profile: facebookProfile,
      instagram_profile: instagramProfile,
      linkedin_profile: linkedinProfile,
      twitter_profile: twitterProfile,
      youtube_profile: youtubeProfile,
      github_profile: githubProfile,
      tiktok_profile: tiktokProfile
    }).then((user) => {
      
      setUser(user)
    }).catch(err =>{
      console.log(err);
    })
  };

  const updateUser = (email, username, firstName, lastName, occupation, phone, url, company, city, address, zipCode, facebookProfile, instagramProfile, linkedinProfile, twitterProfile, youtubeProfile, githubProfile, tiktokProfile) => {
    axios.put(import.meta.env.VITE_API_URL + 'edit',{
      username: username,
      first_name: firstName,
      last_name: lastName,
      email: email,
      occupation: occupation,
      url: url,
      phone: phone,
      id: user.id,
      company: company,
      city: city,
      address: address,
      zip_code: zipCode,
      facebook_profile: facebookProfile,
      instagram_profile: instagramProfile,
      linkedin_profile: linkedinProfile,
      twitter_profile: twitterProfile,
      youtube_profile: youtubeProfile,
      github_profile: githubProfile,
      tiktok_profile: tiktokProfile
    }).then((user) =>{
      
      storeUserInLocalStorage({ 'email': email, 
                                'first_name': firstName, 
                                'last_name': lastName, 
                                'occupation': occupation, 
                                'phone': phone, 
                                'url': url, 
                                'username': username, 
                                'id': user.id,
                                'company': company,
                                'city': city,
                                'address': address,
                                'zip_code': zipCode,
                                'facebook_profile': facebookProfile,
                                'instagram_profile': instagramProfile,
                                'linkedin_profile': linkedinProfile,
                                'twitter_profile': twitterProfile,
                                'youtube_profile': youtubeProfile,
                                'github_profile': githubProfile,
                                'tiktok_profile': tiktokProfile
                              })
      setUser(user)                      
    }).catch(err =>{
      console.log(err);
    })
  };

  function loadUserData(){
    return new Promise((resolve) =>{
        getUserFromLocalStorage().then((userData)=>{
        setUser(userData)
        return userData
      }).then((userData)=>{
        resolve(userData)
      })
    })
  }

  function setUserData(user){
    // changeElementValue('email', user.email)
    // changeElementValue('firstName',user.first_name)
    // changeElementValue('lastName',user.last_name)
    // changeElementValue('username',user.username)
    // changeElementValue('occupation',user.occupation)
    // changeElementValue('phone',user.phone)
    // changeElementValue('business',user.url)
    setEmail({value: user.email})
    setFirstName({value: user.first_name})
    setLastName({value: user.last_name})
    setUsername({value: user.username})
    setOccupation({value: user.occupation})
    setPhone({value: user.phone})
    setUrl({value: user.url})
    setCompany({value: user.company})
    setCity({value: user.city})
    setAddress({value: user.address})
    setZipCode({value: user.zip_code})
    setFacebookProfile({value: user.facebook_profile})
    setInstagramProfile({value: user.instagram_profile})
    setLinkedinProfile({value: user.linkedin_profile})
    setTwitterProfile({value: user.twitter_profile})
    setYoutubeProfile({value: user.youtube_profile})
    setGithubProfile({value: user.github_profile})
    setTiktokProfile({value: user.tiktok_profile})
  }

  // function changeElementValue(elementId, newValue) {
  //   const el = document.getElementById(elementId);
  //   if (el) el.value = newValue;
  //   }

  function handleChangeEmail() {
    setEmail({value: event.target.value});
  }
  function handleChangePassword() {
    setPassword({value: event.target.value});
  }
  function handleChangeFirstName() {
    setFirstName({value: event.target.value});
  }
  function handleChangeLastName() {
    setLastName({value: event.target.value});
  }
  function handleChangeUsername() {
    setUsername({value: event.target.value});
  }
  function handleChangeUrl() {
    setUrl({value: event.target.value});
  }
  function handleChangePhone() {
    setPhone({value: event.target.value});
  }
  function handleChangeOccupation() {
    setOccupation({value: event.target.value});
  }
  function handleChangeCompany() {
    setCompany({value: event.target.value});
  }
  function handleChangeCity() {
    setCity({value: event.target.value});
  }
  function handleChangeAddress() {
    setAddress({value: event.target.value});
  }
  function handleChangeZipCode() {
    setZipCode({value: event.target.value});
  }
  function handleChangeFacebookProfile() {
    setFacebookProfile({value: event.target.value});
  }
  function handleChangeInstagramProfile() {
    setInstagramProfile({value: event.target.value});
  }
  function handleChangeLinkedinProfile() {
    setLinkedinProfile({value: event.target.value});
  }
  function handleChangeTwitterProfile() {
    setTwitterProfile({value: event.target.value});
  }
  function handleChangeYoutubeProfile() {
    setYoutubeProfile({value: event.target.value});
  }
  function handleChangeGithubProfile() {
    setGithubProfile({value: event.target.value});
  }
  function handleChangeTiktokProfile() {
    setTiktokProfile({value: event.target.value});
  }
  function handleSubmit() {
    if (isEdit){
      
      updateUser(
        email.value, 
        username.value, 
        firstName.value, 
        lastName.value, 
        occupation.value, 
        phone.value, 
        url.value,
        company.value,
        city.value,
        address.value,
        zipCode.value,
        facebookProfile.value,
        instagramProfile.value,
        linkedinProfile.value,
        twitterProfile.value,
        youtubeProfile.value,
        githubProfile.value,
        tiktokProfile.value
        )
    }
    else {
     
      postUser(
        email.value, 
        username.value, 
        firstName.value, 
        lastName.value, 
        occupation.value, 
        phone.value, 
        url.value,
        company.value,
        city.value,
        address.value,
        zipCode.value,
        facebookProfile.value,
        instagramProfile.value,
        linkedinProfile.value,
        twitterProfile.value,
        youtubeProfile.value,
        githubProfile.value,
        tiktokProfile.value
        )
    }
    event.preventDefault();
  }

  return (
    <div className="container col-4 mt-5">
    <div className="row justify-content-center align-items-center">
      <div className="row text-center" hidden={loader}>
          <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" action="/register">
            <div className='form-group'>
              <input type='email' className='form-control' id='email' placeholder='Email' value={email.value} onChange={handleChangeEmail}></input>
            </div>
            { !isEdit && 
            <div className='form-group'>
              <input type='password' className='form-control mt-3' id='password' placeholder='Password' value={password.value} onChange={handleChangePassword}></input>
            </div>
            }
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='username' placeholder='Ime biznisa' value={username.value} onChange={handleChangeUsername}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='firstName' placeholder='Ime'value={firstName.value} onChange={handleChangeFirstName}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='lastName' placeholder='Prezime' value={lastName.value} onChange={handleChangeLastName}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='occupation' placeholder='Zanimanje/Zvanje' value={occupation.value} onChange={handleChangeOccupation}></input>
            </div>
            <div className='form-group'>
              <input type='tel' className='form-control mt-3' id='phone' placeholder='Broj telefona' value={phone.value} onChange={handleChangePhone}></input>
            </div>
            <div className='form-group'>
              <input type='url' className='form-control mt-3' id='url' placeholder='Link na koji kartica vodi' value={url.value} onChange={handleChangeUrl}></input>
            </div>

            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='company' placeholder='Firma' value={company.value} onChange={handleChangeCompany}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='city' placeholder='Grad' value={city.value} onChange={handleChangeCity}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='address' placeholder='Adresa' value={address.value} onChange={handleChangeAddress}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='zipCode' placeholder='Poštanski broj' value={zipCode.value} onChange={handleChangeZipCode}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='facebookProfile' placeholder='Facebook' value={facebookProfile.value} onChange={handleChangeFacebookProfile}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='instagramProfile' placeholder='Instagram' value={instagramProfile.value} onChange={handleChangeInstagramProfile}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='linkedinProfile' placeholder='LinkedIn' value={linkedinProfile.value} onChange={handleChangeLinkedinProfile}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='twitterProfile' placeholder='Twitter' value={twitterProfile.value} onChange={handleChangeTwitterProfile}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='youtubeProfile' placeholder='Youtube' value={youtubeProfile.value} onChange={handleChangeYoutubeProfile}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='githubProfile' placeholder='Github' value={githubProfile.value} onChange={handleChangeGithubProfile}></input>
            </div>
            <div className='form-group'>
              <input type='text' className='form-control mt-3' id='tiktokProfile' placeholder='TikTok' value={tiktokProfile.value} onChange={handleChangeTiktokProfile}></input>
            </div>
            <div className="form-group">
              <input type="file" name="file"/>
            </div>
            <div className='form-group'>
              <input type='submit' value="Pošalji zahtjev za karticu" />
            </div>
          </form>
      </div>
    </div>
  </div>

  )
}

export default ProfileForm