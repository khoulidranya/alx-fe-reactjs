import UserInfo from './UserInfo';
import UserContext from './UserContext';

function ProfilePage() {
  return (
    <UserContext.Consumer>
      {(userData) => (
        <UserInfo userData={userData} />
      )}
    </UserContext.Consumer>
  );
}

export default ProfilePage;

