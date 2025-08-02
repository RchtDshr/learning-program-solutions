import GuestPage from './GuestPage';
import UserPage from './UserPage';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserPage /> : <GuestPage />;
}
export default Greeting;
