import React, {createContext, useContext, useEffect} from 'React';

import {API_GET_USERS} from '../constants';

// UserContext.Provider
export const UserContext = React.createContext([]);

const UserProvider = () => {
  const [users, setUsers] = useContext(UserContext);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // TODO: Add options of Axois alternation
        const res = await fetch(API_GET_USERS, {});
        console.log('res', res);
        const json = await res.json();

        setUsers(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);


  return (
    <UserContext.Provider value={[users, setUsers]}>
      {isLoading && <span>loading...</span>}
      {users && users.map(user => {
        <div>{user.id}</div>
      })}
      {props.children}
      {error && <span>{error}</span>}
    </UserContext.Provider>
  )
};

export default UserProvider;
