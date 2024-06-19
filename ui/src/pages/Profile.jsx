import { useState, useEffect } from "react";
import CircleInitials from "../components/profile/CircleInitials"
import SocialsList from "../components/profile/SocialsList"
import Loader from "../components/loader/Loader";

import axios from "axios";

// import {
//   useParams
// } from "react-router-dom";
// let { id } = useParams();

const Profile = () => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)
  const location = window.location.href.split('/')[3]


  const getProfile = () => {
    axios({
      method: 'get',
      url: import.meta.env.VITE_API_URL + location,
    }).then(res => {
      if (res.data.url !== null){ 
        window.location.replace(res.data.url);
      }
      setUser(res.data)
      console.log(res.data)
      setLoader(false)
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container shadow mt-5 profile-background-color height-full d-flex flex-column justify-content-around">
      {loader ? 
      <div className="row justify-content-center align-items-center">
      <Loader/> 
      </div> :
      <>
      <div className="row justify-content-center align-items-center">
        <CircleInitials img={user.img} />
      </div>

      <SocialsList user={user} />
      <div className="row text-center profile-form">
        <h4 className="mb-3">{user?.first_name + ' ' + user?.last_name}</h4>
      </div>
      <div className="row text-center mb-4 profile-form">
        <h6 className="mb-3">{user.occupation}</h6>
        <h6 className="mb-3">Phone: {user.phone}</h6>
        <h6 className="mb-3">Email: {user.email}</h6>
        <h6 className="mb-3">Company: {user.company}</h6>
        <h6 className="mb-3">City: {user.city}</h6>
        <h6 className="mb-3">Adress: {user.address}</h6>
        <h6 className="mb-3">Zip code: {user.zip_code}</h6>
        
      </div>
      
      </>
      }
    </div>
  )
}

export default Profile