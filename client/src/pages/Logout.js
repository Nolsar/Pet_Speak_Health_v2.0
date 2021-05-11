import React, {useContext, useEffect} from 'react';
import API from '../utils/API';
import UserContext from '../utils/UserContext';

function Logout(props){
    const {setEmail, setLoggedIn} = useContext(UserContext);
    useEffect( () => {
        API.logout()
        .then( data => {
            setLoggedIn(false);
            setEmail("");
        })
        .catch(err => {
            console.log(err);
        });
    }, [setEmail, setLoggedIn])
    return (
        <div><p>You are now logged out.</p></div>
    )
}
export default Logout;