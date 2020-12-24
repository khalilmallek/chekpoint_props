import './App.css';
import Profile from './Components/profile/Profile';
import imageProfile from './logo.png'

function App() {
  const profile=[{name:'khalil',bio:'kalb sou9',profession:'web developper'}]
  return (
    <div>
      <Profile profile={profile}>
        {imageProfile}
        </Profile>
    </div>
  );
}

export default App;
