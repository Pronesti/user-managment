import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Sidebar from './components/Sidebar';
import firebase from 'firebase';
import axios from 'axios'
const { Content } = Layout;

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBOcqwcoBteiasryCbwHx8RKkrQoP9IVTs",
    authDomain: "user-managment12.firebaseapp.com",
    databaseURL: "https://user-managment12.firebaseio.com",
    projectId: "user-managment12",
    storageBucket: "",
    messagingSenderId: "376226296141",
    appId: "1:376226296141:web:cda0e17f47d476aa024704",
    measurementId: "G-CEHJ9EQWVR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(authUser => {
    if(authUser) {
      return firebase.auth.currentUser.getIdToken()
        .then(idToken => {
          axios.defaults.headers.common['Authorization'] = idToken;
          // Any extra code
        }).catch();
    }
  });

function App() {
 
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout>
            <Content style={{ margin: '0' }}>
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
