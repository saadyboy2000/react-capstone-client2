import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {Link, Redirect} from 'react-router-dom';
import formList from './form-list';


//iterate over state for forms, filter for username

//dashboard link should be hidden until


export class Dashboard extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        console.log(this.props.forms);
        let formsList = "";
        let formsListAdmin = [];

        this.props.forms.forEach((form, index) => {
            //add if statement checking for admin account(filter, you will only push if form is for current user)
            if(this.props.username === 'admin'){
                formsListAdmin.push(
                <div className = "container" key={"admin"+index}>
                <div className= "formList">
                <li><span className="label"> Form Id: </span> <span className = "value">{form._id}</span></li>
                <li><span className="label">Patient age: </span> <span className = "value">{form.age}</span></li>
                 <li><span className="label">Patient email: </span><span className = "value">{form.email}</span></li>
                 <li><span className="label">Patient married status:</span><span className = "value"> {form.marital}</span></li>
                 <li><span className="label">Patient dominant hand:</span><span className = "value"> {form.hand}</span></li>
                 <li><span className="label">Main Medical Issue:</span><span className = "value"> {form.medicalIssue}</span></li>
                 <li><span className="label">Patient uses tobacco?:</span><span className = "value">{form.tobacco}</span></li>
                 <li><span className="label">Patient uses alcohol?:</span><span className = "value">{form.alcohol}</span></li>
                 <li><span className="label">Patient uses street drugs?:</span><span className = "value">{form.nonmedicalDrugs}</span></li>
                 <li><span className="label">Patient worked last in:</span><span className = "value">{form.workedLast}</span></li>
                 <li><span className="label">Patient past history:</span><span className = "value">{form.pastHistory}</span></li>
                 <li><span className="label">Family Diabetes History:</span><span className = "value">{form.familyHistoryDiabetes}</span></li>
                 <li><span className="label">Family Heart Disease History:</span><span className = "value"> {form.familyHistoryDiabetes}</span></li>
                 <li><span className="label">Family TB history:</span> <span className = "value">{form.familyHistoryTb}</span></li>
                 <li><span className="label">Family cancer history:</span> <span className = "value">{form.familyHistoryCancer}</span></li>
                 <li><span className="label">Other family history:</span> <span className = "value">{form.otherFamilyHistory}</span></li>
                 <li><span className="label">Disability Began:</span> <span className = "value">{form.disabilityBegin}</span></li>
                 <li><span className="label">Origin of major Disability:</span> <span className = "value">{form.origin}</span></li>
                 <li><span className="label">Specify if other:</span><span className = "value">{form.otherSpecify}</span></li>
                 <li><span className="label">Medications being taken:</span><span className = "value"> {form.Medications}</span></li>
                </div>
                </div>
            )
              
            }
           else if(this.props.username === form.username){
                formsList=(
                <div className = "container">
                <div className= "formList">
                <li><span className="label"> Form Id: </span> <span className = "value">{form._id}</span></li>
                <li><span className="label">Patient age: </span> <span className = "value">{form.age}</span></li>
                 <li><span className="label">Patient email: </span><span className = "value">{form.email}</span></li>
                 <li><span className="label">Patient married status:</span><span className = "value"> {form.marital}</span></li>
                 <li><span className="label">Patient dominant hand:</span><span className = "value"> {form.hand}</span></li>
                 <li><span className="label">Main Medical Issue:</span><span className = "value"> {form.medicalIssue}</span></li>
                 <li><span className="label">Patient uses tobacco?:</span><span className = "value">{form.tobacco}</span></li>
                 <li><span className="label">Patient uses alcohol?:</span><span className = "value">{form.alcohol}</span></li>
                 <li><span className="label">Patient uses street drugs?:</span><span className = "value">{form.nonmedicalDrugs}</span></li>
                 <li><span className="label">Patient worked last in:</span><span className = "value">{form.workedLast}</span></li>
                 <li><span className="label">Patient past history:</span><span className = "value">{form.pastHistory}</span></li>
                 <li><span className="label">Family Diabetes History:</span><span className = "value">{form.familyHistoryDiabetes}</span></li>
                 <li><span className="label">Family Heart Disease History:</span><span className = "value"> {form.familyHistoryDiabetes}</span></li>
                 <li><span className="label">Family TB history:</span> <span className = "value">{form.familyHistoryTb}</span></li>
                 <li><span className="label">Family cancer history:</span> <span className = "value">{form.familyHistoryCancer}</span></li>
                 <li><span className="label">Other family history:</span> <span className = "value">{form.otherFamilyHistory}</span></li>
                 <li><span className="label">Disability Began:</span> <span className = "value">{form.disabilityBegin}</span></li>
                 <li><span className="label">Origin of major Disability:</span> <span className = "value">{form.origin}</span></li>
                 <li><span className="label">Specify if other:</span><span className = "value">{form.otherSpecify}</span></li>
                 <li><span className="label">Medications being taken:</span><span className = "value"> {form.Medications}</span></li>
                </div>
                </div>
            )
            }
            

        });
               
          
        return (
            <div className="dashboard">
                    <div className = "userContainer">
                <div className="dashboard-username">

                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                    </div>
                <div className="dashboard-protected-data">
                <ul>
                    {formsListAdmin}
                    {formsList}
                    
                </ul>
                </div>
                
                <div className = "navbar-brand-container">
                    <Link to= "/form" className = "bttn-fill1">Dr. Rana's Form</Link>
                   
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        email: state.auth.currentUser.email,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        forms: state.protectedData.forms || []

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
