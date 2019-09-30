import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Protection(props) {
  const checkLogin = async () => {
    let security = false;
    const idToken = localStorage.getItem('token');
    await axios
      .post('/user/check_login', {
        token: idToken
      })
      .then(res => {
        if (res.data.verified) {
          security = true;
        }
      });
    return security;
  };

  if (
    checkLogin().then(x => {
      return x;
    })
  )
    return <React.Fragment> {props.children}</React.Fragment>;
  return <Redirect to='/login' />;
  //return <React.Fragment><p>not logged</p> {console.log(checkLogin())}</React.Fragment>
}
