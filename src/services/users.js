import fetch from 'isomorphic-fetch';
import {API_GET_USERS} from '../constants';

export const userApi = {
  getAllUsers: async () => {
    const allUsers = await fetch(API_GET_USERS).then(response => response.json());
    return allUsers;
  },
};
