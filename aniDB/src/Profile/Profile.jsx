import React from 'react';
import ProfileInfo from './ProfileInfo';
import Favorites from './Favorites';

import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.container}>
            <ProfileInfo />
            <Favorites />
        </div>
    );
};

export default Profile;