import UserDetails from './UserDetails';
import { UserContext } from '../UserContext';

function UserInfo() {
  return (
    <UserContext.Consumer>
      {userData => <UserDetails userData={userData} />}
    </UserContext.Consumer>
  );
}

export default UserInfo;