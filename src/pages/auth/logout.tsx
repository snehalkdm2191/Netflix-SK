import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import { useUsers } from "../../state/UsersProvider";

export default function LogoutPage() {
    const { setIsLogged }: any = useUsers();
    const history = useHistory();

    const Logout = () => {
        auth.signOut()
        .then(() => {setIsLogged(false); history.push('/login');})
        .catch(error => logging.error(error));
    }

    return (
        <div id="Logout" className="logout-section">
            <p className='logout-text text-center'>Are you sure you want to logout?</p>
            <div className='text-center'>
                <button className="btn-logout-cancel" onClick={() => history.goBack()}>Cancel</button>
                <button className="btn-logout" onClick={() => Logout()}>Logout</button>
            </div>
        </div>
    );
}