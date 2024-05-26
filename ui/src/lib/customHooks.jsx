import { getAuthenticatedUser } from './common';
import { APP_ROUTES } from '../utils/constants';

export async function Authenticated() {
  // const [user, setUser] = useState(null);
    // async function getUserDetails() {
      const isAuthenticated = await getAuthenticatedUser()
        if (await !isAuthenticated) {
          if (window.location.href == APP_ROUTES.SIGN_IN) {
            return false;
          }
          window.location.href = APP_ROUTES.SIGN_IN;
          return false;
        }
        return(true)
    

      // setUser(user);
      // setAuthenticated(authenticated);
    // }
    // getUserDetails();

  // return { Authenticated };
}