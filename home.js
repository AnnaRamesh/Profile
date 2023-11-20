import React from 'react';
import './ProfileScreen.css';

const ProfileScreen = () => {
const profileData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatarUrl: 'https://www.terriblytinytales.com/profile.jpeg',
};

return (
    <div className="profile-screen">
    <div className="profile-header">
        <img src={profileData.avatarUrl} alt="Profile Avatar" className="profile-avatar" />
        <h2>{profileData.name}</h2>
    </div>

    <div className="profile-bio">
        <p>{profileData.bio}</p>
    </div>

    <div className="profile-contact">
        <p>Email:</p>
        <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
    </div>
    </div>
);
};

export default ProfileScreen;
