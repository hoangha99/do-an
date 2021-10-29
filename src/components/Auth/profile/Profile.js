import React from 'react';
import './Profile.css';
import {Redirect } from 'react-router-dom'

function Profile(props) {

    if(!props.currentUser){
        return <Redirect
        to={{
            pathname: "/",
        }} />;
    }

    return (
        <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {
                                props.currentUser.imageUrl ? (
                                    <img src={props.currentUser.imageUrl} alt={props.currentUser.name} />
                                ) : (
                                    <div className="text-avatar">
                                        <span>{props.currentUser.name && props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                            <h2>{props.currentUser.name}</h2>
                            <p className="profile-email">{props.currentUser.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Profile