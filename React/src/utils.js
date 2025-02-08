// src/utils.js
import { v4 as uuidv4 } from 'uuid';

export const getUserID = () => {
  let userId = localStorage.getItem('user_id');
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem('user_id', userId);
  }
  return userId;
};
