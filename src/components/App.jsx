import { Profile } from "./Profile/Profile";
import user from './Profile/user.json'

export const App = () => {
  return (
  <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
  }}>
      <Profile 
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

    </div>)
};
