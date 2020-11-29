import React, {useContext} from 'react';
import UserProvider, {UserContext} from '../contexts/UserProvider';

const View = () => {
  const [users, setUsers] = useContext(UserContext);

  return (<div>{users}</div>);
}

export default View;
