import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


export function HelpPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
  
    return (
        <div className="home">
            <h2 className="register">Login or Register to get started!</h2>
            <Link className = "loginLink" to="/">Login</Link>
            <Link className = "register" to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HelpPage);