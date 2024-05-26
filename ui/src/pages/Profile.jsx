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
      if (res.data.url !== ''){ 
        return window.location.replace(res.data.url);
      }
      setUser(res.data)
      setLoader(false)
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container shadow mt-5">
      {loader ? 
      <div className="row justify-content-center align-items-center">
      <Loader/> 
      </div> :
      <>
      <div className="row justify-content-center align-items-center">
        <CircleInitials />
      </div>
      <div className="row text-center">
        <h4 className="mb-3">{user?.first_name + ' ' + user?.last_name}</h4>
      </div>
      <div className="row text-center mb-4">
        <h6 className="mb-3">{user.occupation}</h6>
        <h6 className="mb-3">Telefon: {user.phone}</h6>
        <h6 className="mb-3">Email: {user.email}</h6>
      </div>
      <SocialsList className="col-6"/>
      </>
      }
    </div>
  )
}

export default Profile