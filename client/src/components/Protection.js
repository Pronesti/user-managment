import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Protection(props) {
    const [hasVerifiedToken, setHasverifiedToken] = useState(false)
    const [token, getToken] = useState()
    useEffect(()=> {
        if (localStorage.getItem('token') !== null){
    axios.get('/api/verifyToken',{
        params: {
            token
        }
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        //executes always
    })
    }
    }, [])
    if (hasVerifiedToken) return <React.Fragment> {props.children} </React.Fragment>
    return <React.Fragment></React.Fragment>
}
