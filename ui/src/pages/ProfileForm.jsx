import { useState, useEffect } from 'react';
import axios from "axios";
import '../index.css';
import { getIsAuthenticated, getUserFromLocalStorage, storeUserInLocalStorage, deleteUserFromLocalStorage } from '../lib/common';
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
  const [file, setFile] = useState()
  const [color, setColor] = useState('')
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

  const postUser = (email, password, username, firstName, lastName, occupation, phone, url, company, city, address, zipCode, facebookProfile, instagramProfile, linkedinProfile, twitterProfile, youtubeProfile, githubProfile, tiktokProfile, file, color) => {
    console.log(file);
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
      tiktok_profile: tiktokProfile,
      color: color,
      
    }).then((user) => {
      const formData = new FormData()
      console.log(user.data);
      formData.append('file', file, user.data.id+'.jpg')
      setUser(user)
      axios.post(import.meta.env.VITE_API_URL + 'upload', formData).then(()=>{
        window.location.href = APP_ROUTES.SIGN_IN
      })
    }).catch(err =>{
      console.log(err);
    })
  };

  const updateUser = (email, username, firstName, lastName, occupation, phone, url, company, city, address, zipCode, facebookProfile, instagramProfile, linkedinProfile, twitterProfile, youtubeProfile, githubProfile, tiktokProfile, file, color) => {
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
      tiktok_profile: tiktokProfile,
      color: color,
    }).then((user) =>{
      const formData = new FormData()
      console.log(user.data);
      formData.append('file', file, user.data.id+'.jpg')
      axios.post(import.meta.env.VITE_API_URL + 'upload', formData)
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
                                'tiktok_profile': tiktokProfile,
                                'color': color,
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
    setColor({value: user.color})
  }

  function logOut(){
    deleteUserFromLocalStorage()
    window.location.href = APP_ROUTES.SIGN_IN
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
  function handleChangeColor() {
    setColor({value: event.target.value});
    console.log(color);
  }
  function handleSubmit() {
    console.log(file);
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
        tiktokProfile.value,
        file,
        color.value,
        )
    }
    else {
      postUser(
        email.value, 
        password.value,
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
        tiktokProfile.value,
        file,
        color.value
        )
    }
    event.preventDefault();
  }

  return (
    <div className="full-screen d-flex justify-content-center col-4 mx-auto">
    <div className='d-flex w-100'>
    <div className='login-bg d-flex flex-column justify-content-center align-items-center w-50'>
        <h1 className='mx-5 big-text'>{isEdit ? 'EDIT ACCOUNT' : 'CREATE ACCOUNT'}</h1>
        {isEdit && 
         <div className='form-group mt-5 d-flex justify-content-end'>
          <button type='button' className='btn btn-primary input-font-size' onClick={logOut}>Logout</button>
        </div>
        }
       

    </div>
      <div className="row justify-content-center align-items-center bg-white w-50 px-3">
        <div className="row text-center" hidden={loader}>
            <form className='big-inputs' >
              <h3 className='text-start'>Osnovne informacije</h3>
              <div className='d-flex w-100 mb-5'>
                <div className='w-50 pe-3'>
                  <div className='form-group'>
                    <input type='email' className='form-control' id='email' placeholder='Email' value={email.value} onChange={handleChangeEmail}></input>
                  </div>
                  { !isEdit && 
                  <div className='form-group'>
                    <input type='password' className='form-control mt-3' id='password' placeholder='Password' value={password.value} onChange={handleChangePassword}></input>
                  </div>
                  }
                  <div className='form-group'>
                    <input type='text' className='form-control mt-3' id='firstName' placeholder='Ime'value={firstName.value} onChange={handleChangeFirstName}></input>
                  </div>
                  <div className='form-group'>
                    <input type='text' className='form-control mt-3' id='lastName' placeholder='Prezime' value={lastName.value} onChange={handleChangeLastName}></input>
                  </div>
                </div>

                <div className='w-50 ps-3'>
                <div className='form-group'>
                    <input type='text' className='form-control' id='username' placeholder='Ime biznisa' value={username.value} onChange={handleChangeUsername}></input>
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
                </div>
              </div>



              
              <h3 className='text-start'>Adresa</h3>

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

              <h3 className='text-start mt-5'>Društvene mreže</h3>
              <div className='d-flex w-100 mb-5'>
                <div className='w-50 pe-3'>
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
                </div>

                <div className='w-50 ps-3'>
                  <div className='form-group'>
                    <input type='text' className='form-control mt-3' id='youtubeProfile' placeholder='Youtube' value={youtubeProfile.value} onChange={handleChangeYoutubeProfile}></input>
                  </div>
                  <div className='form-group'>
                    <input type='text' className='form-control mt-3' id='githubProfile' placeholder='Github' value={githubProfile.value} onChange={handleChangeGithubProfile}></input>
                  </div>
                  <div className='form-group'>
                    <input type='text' className='form-control mt-3' id='tiktokProfile' placeholder='TikTok' value={tiktokProfile.value} onChange={handleChangeTiktokProfile}></input>
                  </div>
                </div>
                </div>


              <div className='d-flex mt-3'>
                <div className='form-group w-50'>
                <h3 className='mb-0'>Izaberi boju teme</h3>
                  <div className='d-flex justify-content-center'>
                  <input type='color' className='form-control color-picker' id='color' placeholder='Color' onChange={handleChangeColor}></input>

                  </div>
   
                </div>
                <div className="form-group w-50">
                <h3 className='mb-0'>Izaberi profilnu fotografiju</h3>

                <label htmlFor="file" className="custom-file-upload mt-3">
                  Custom Upload
              </label>
                  <input id="file" type="file" name="file" onChange={(e) => setFile(e.target.files[0])}/>
                </div>
              </div>
              
              <div className='form-group mt-5 d-flex justify-content-end'>
                { isEdit &&
                  <button type='button' className='btn btn-primary input-font-size' onClick={handleSubmit}>Spasi izmjene</button>
                }
                { !isEdit &&
                  <button type='button' className='btn btn-primary input-font-size' onClick={handleSubmit}>Pošalji zahtjev za karticu</button>
                }
              </div>
            </form>
        </div>
      </div>
      </div>
  </div>

  )
}

export default ProfileForm