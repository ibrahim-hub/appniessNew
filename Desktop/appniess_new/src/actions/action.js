import { FETCH_POSTS, AUTH_LOGIN, AUTH_FAIL } from './types';
import loginData from "../data/login.json";
import userData from "../data/userList.json";

export const fetchPosts = () => dispatch => {

  let uData = userData.user
    dispatch({
      type: FETCH_POSTS,
      payload: uData
    })
};


export const auth = postData => dispatch => {
  if(loginData.username == postData.username && loginData.password == postData.password){
    let auth = {
      "isAuthenticated": true,
      "authRedirectPath": '/dashborad'
    }
    localStorage.setItem("token", `${postData.username}-${postData.password}`);
    dispatch({
      type: AUTH_LOGIN,
      payload: auth
    })
    
  }else{
    let msg = {
      "error": "Username or password is incorrect"
    }
    dispatch({
      type: AUTH_FAIL,
      payload: msg
    })
  }
};
