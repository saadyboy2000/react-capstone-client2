import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {clearData} from '../actions/protected-data';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        this.props.dispatch(clearData());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let title = (
             <h1 className= "title">
               
                <em>F</em>
                <em>O</em>
                <em>R</em>
                <em>M </em>
                <em> </em>
                <em>C</em>
                <em>O</em>
                <em>M</em>
                <em>P</em>
                <em>L</em>
                <em>E</em>
                <em>T</em>
                <em>E</em>
                <em>R</em>
                </h1>
        );
        if (this.props.loggedIn) {
            logOutButton = (
               
            <button className= "bttn-fill" onClick={() => this.logOut()}>Log out</button>
                    
               
            );  
        }
        return (
            <div className="header-bar">
                {title}
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
