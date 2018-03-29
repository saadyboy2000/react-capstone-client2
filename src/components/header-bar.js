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
        if (this.props.loggedIn) {
            logOutButton = (
               
            <button className= "bttn-fill" onClick={() => this.logOut()}>Log out</button>
                    
               
            );  
        }
        return (
            <div className="header-bar">
                <h1 className= "title">
                <em>D</em>
                <em>R </em>
                <em>R</em>
                <em>A</em>
                <em>N</em>
                <em>A </em>
                <em>F</em>
                <em class ="planet left">O</em>
                <em>R</em>
                <em>M </em>
                <em>C</em>
                <em class="planet right">O</em>
                <em>M</em>
                <em>P</em>
                <em>L</em>
                <em>E</em>
                <em>T</em>
                <em>E</em>
                <em>R</em>
                Dr. Rana Form Completer</h1>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
