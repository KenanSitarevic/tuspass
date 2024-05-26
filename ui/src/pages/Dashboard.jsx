import { useEffect, useState } from 'react';
import { getIsAuthenticated, getUserFromLocalStorage } from '../lib/common';
import { APP_ROUTES } from '../utils/constants';
import SocialsList from '../components/profile/SocialsList';
import CircleInitials from '../components/profile/CircleInitials';
import Loader from '../components/loader/Loader';

const Dashboard = () => {
  const [user, setUser] = useState()
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    async function isAuthenticated() {
      const authenticated = await getIsAuthenticated();
      if (await !authenticated) {
        window.location.href = APP_ROUTES.SIGN_IN;
      }
      setUser(getUserFromLocalStorage())
      setLoader(false)
    }
    isAuthenticated();
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
  );



}

export default Dashboard;