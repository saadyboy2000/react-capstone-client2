import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


export function Help(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
  
    return (
        <div className="home">
            <h2 className="register">Login or Register to get started!</h2>
            <p className="register">This site allows you to fill and view your version of Dr. Rana's form anywhere with a computer! Just press the Dr. Rana Form button to fill the form after you login. Need to update something? Just press the Dr. Rana Form button again! Your previous answers will auto-fill and you can make any changes you need to and re-submit!</p>
            <Link className = "loginLink" to="/">Login</Link>
            <Link className = "register" to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Help);