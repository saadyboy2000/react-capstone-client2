import React from 'react';
import {reduxForm, Field, SubmissionError, focus, change} from 'redux-form';
//import { Control } from 'react-redux-form';
import {connect} from 'react-redux';
import {registerForm} from '../actions/forms';
import {updateForm} from '../actions/forms';
import {checkForm} from '../actions/forms';
import {logOutB} from './log-out';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
import {Link, Redirect} from 'react-router-dom'; 

//import styled from 'styled-components';
//why doesn't above work?


//import NavigationBar from './NavigationBar';
//https://davidkpiano.github.io/react-redux-form/docs/api/Control.html
//react-redux form documentation
//https://www.npmjs.com/package/react-redux-form
//ask about field, where you can find that documentation, also how to just have a label
//when do I use select?

/*
const button = styled.button`
    background: red;
    border-radius: 8px;
    color: white;
`;
*/
export class ContactForm extends React.Component {
    onSubmit(values) {
        const {username, email, age, marital, hand, interpreter, medicalIssue, presentIllness, tobacco, nonmedicalDrugs, alcohol, VD, workedLast, pastHistory, familyHistoryDiabetes, familyHistoryTb, familyHistoryHeartDisease, familyHistoryCancer, otherFamilyHistory, disabilityBegin, origin, otherSpecify, Medications} = values;
        const form = {username,email, age, marital, hand, interpreter, medicalIssue, presentIllness, tobacco, nonmedicalDrugs, alcohol, VD, workedLast, pastHistory, familyHistoryDiabetes, familyHistoryTb, familyHistoryHeartDisease, familyHistoryCancer, otherFamilyHistory, disabilityBegin, origin, otherSpecify, Medications};
       //return statement checking if form exists
       //return this.props.getState(form);
       console.log(this.props.userForm);
       if(this.props.userForm.username){
        console.log(this.props.userForm);
        return this.props.dispatch(updateForm(form,this.props.userForm._id))
        .then(() => this.props.dispatch((username,email, age, marital, hand, interpreter, medicalIssue, presentIllness, tobacco, nonmedicalDrugs, alcohol, VD, workedLast, pastHistory, familyHistoryDiabetes, familyHistoryTb, familyHistoryHeartDisease, familyHistoryCancer, otherFamilyHistory, disabilityBegin, origin, otherSpecify, Medications)));
       }
       else{
        console.log("submit");
        return this.props
            .dispatch(registerForm(form))
            .then(() => this.props.dispatch((username,email, age, marital, hand, interpreter, medicalIssue, presentIllness, tobacco, nonmedicalDrugs, alcohol, VD, workedLast, pastHistory, familyHistoryDiabetes, familyHistoryTb, familyHistoryHeartDisease, familyHistoryCancer, otherFamilyHistory, disabilityBegin, origin, otherSpecify, Medications)));
       }
        
    }
       
    componentWillMount(){
        this.props.dispatch(checkForm(this.props.username))
    }
        
    componentDidMount(){
        this.props.dispatch(change("contact", "email", this.props.email))
        this.props.dispatch(change("contact", "username", this.props.username))
       
        setTimeout(()=>{
            if(this.props.userForm){
            this.props.dispatch(change("contact","age",this.props.userForm.age))
            this.props.dispatch(change("contact", "marital", this.props.userForm.marital))
            this.props.dispatch(change("contact", "hand", this.props.userForm.interpreter))
            this.props.dispatch(change("contact", "medicalIssue", this.props.userForm.medicalIssue))
            this.props.dispatch(change("contact", "presentIllness", this.props.userForm.presentIllness))
            this.props.dispatch(change("contact", "tobacco", this.props.userForm.tobacco))
            this.props.dispatch(change("contact", "nonmedicalDrugs", this.props.userForm.nonmedicalDrugs))
            this.props.dispatch(change("contact", "alcohol", this.props.userForm.alcohol))
            this.props.dispatch(change("contact", "VD", this.props.userForm.VD))
            this.props.dispatch(change("contact", "workedLast", this.props.userForm.workedLast))
            this.props.dispatch(change("contact", "pastHistory", this.props.userForm.pastHistory))
            this.props.dispatch(change("contact", "familyHistoryDiabetes", this.props.userForm.familyHistoryDiabetes))
            this.props.dispatch(change("contact", "familyHistoryTb", this.props.userForm.familyHistoryTb))
            this.props.dispatch(change("contact", "familyHistoryHeartDisease", this.props.userForm.familyHistoryHeartDisease))
            this.props.dispatch(change("contact", "familyHistoryCancer", this.props.userForm.familyHistoryCancer))
            this.props.dispatch(change("contact", "otherFamilyHistory", this.props.userForm.otherFamilyHistory))
            this.props.dispatch(change("contact", "disabilityBegin", this.props.userForm.disabilityBegin))
            this.props.dispatch(change("contact", "origin", this.props.userForm.origin))
            this.props.dispatch(change("contact", "otherSpecify", this.props.userForm.otherSpecify))
            this.props.dispatch(change("contact", "Medications", this.props.userForm.Medications))
           }
            console.log(this.props.userForm)
        },100)
       
    }

    render() {
       


        return (

          <div className = "container">
           
             { this.props.isFormCreated &&
                <Redirect to="/dashboard" />
                
           }
           
               <div className = "form-link">
                    <Link to= "/Dashboard" className = "dashboard-link">Go to Dashboard</Link>
                    {logOutB}
                </div>
            
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                
              <Field
                    className="form-group"
                    name="username"
                    type="text"
                    component={Input}
                    label="Username"
                    validate={[required, nonEmpty]}
                />
              
                <Field
                    className="form-group"
                    name="email"
                    type="email"
                    component={Input}
                    label="Email Address"
                    validate={[required, nonEmpty, email]}
                />

                <Field
                    className="form-group"
                    name="age"
                    type="text"
                    component={Input}
                    label="What is your age?"
                    validate={[required, nonEmpty]}
                />

                <label className="control-label">What is your marrital status?</label>

                 <Field
                    className="form-group"
                    name="marital"
                    component="select"
                    label="What is your marital status?"> 
                    <option value="select">select</option>
                    <option value="married">married</option>
                    <option value="separated">single</option>
                    <option value="divorced">divorced</option>
                    <option value="widowed">widowed</option>
                    <option value="separated">separated</option>
                </Field>

                    <label className="control-label">Which hand is your dominant hand?</label>

                 <Field
                    className="form-group"
                    name="hand"
                    component="select"
                    label="Which hand is your dominant hand?"> 
                    <option value="select">select</option>
                    <option value="right">right</option>
                    <option value="left">left</option>
                </Field>

                   <Field
                   className="form-group"
                    name="interpreter"
                    type="text"
                    component={Input}
                    label="If you're using an interpreter, please enter their name and agency"
                />
              
                   <Field
                   className="form-group"
                    name="medicalIssue"
                    element="textarea"
                    component={Input}
                    label="Please describe your main medical issue"
                    validate={[required, nonEmpty]}
                />
                   <Field
                   className="form-group"
                    name="presentIllness"
                    element="textarea"
                    component={Input}
                    label="Please describe any present Illness"
                />

                <label className="control-label">Do you use tobacco?</label>

                 <Field
                    className="form-group"
                    name="tobacco"
                    component="select"
                    label="Do you use tobacco?">
                    <option value="select">select</option> 
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>
              
                <label className="control-label">Do you use nonmedical drugs?</label>

                 <Field
                    className="form-group"
                    name="nonmedicalDrugs"
                    component="select"
                    label="Do you use nonmedical drugs?">
                    <option value="select">select</option> 
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>
             

                <label className="control-label">Do you use alcohol?</label>

                 <Field
                    className="form-group"
                    name="alcohol"
                    component="select"
                    label="Do you use alcohol?">
                    <option value="select">select</option> 
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>

                <label className="control-label">Do you have VD(venereal disease)?</label>

                 <Field
                    className="form-group"
                    name="VD"
                    component="select"
                    label="Do you have VD "> 
                    <option value="select">select</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </Field>

                <Field
                    className="form-group"
                    name="workedLast"
                    type="text"
                    component={Input}
                    label="When did you work last?(Enter approximate month and/or year)"
                />

           

                <Field
                    className="form-group"
                    name="pastHistory"
                    element="textarea"
                    component={Input}
                    label="Please describe your past medical history"
                />
              
                <Field
                    className="form-group"
                    name="familyHistoryDiabetes"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had diabetes? Ex: Grandma"
                />

                 <Field
                    className="form-group"
                    name="familyHistoryTb"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had TB?(tubercle bacillus)"
                />
                   <Field
                   className="form-group"
                    name="familyHistoryHeartDisease"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had heart disease?"
                />

                 <Field
                    className="form-group"
                    name="familyHistoryCancer"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had Cancer?"
                />

                <Field
                    className="form-group"
                    name="otherFamilyHistory"
                    element="textarea"
                    component={Input}
                    label="Are there any other major diseases any family members have had?"
                />

                <Field
                    className="form-group"
                    name="disabilityBegin"
                    type="text"
                    component={Input}
                    label="When did your disability begin?(date)"
                />

                <label className="control-label">What is the origin of your major disability?</label>

                 <Field
                    className="form-group"
                    name="origin"
                    component="select"
                    label="What is the origin of your major disability?"> 
                    <option value="unknown">select</option>
                    <option value="unknown">unknown</option>
                    <option value="disease">disease</option>
                    <option value="injury">injury</option>
                    <option value="congenital">congenital</option>
                    <option value="hereditary">hereditary</option>
                    <option value="birth trauma">birth trauma</option>
                    <option value="other">other</option>
                </Field>

                 <Field
                    className="form-group"
                    name="otherSpecify"
                    type="text"
                    component={Input}
                    label="If other was selected in the last question please specify the origin of your major disability"
                />

                <Field
                    className="form-group"
                    name="Medications"
                    element="textarea"
                    component={Input}
                    label="Please list any medicines you're currently taking"
                    validate={[required, nonEmpty]}

                />

                <div className = "button-container">
                <button className="Button"

                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                   <span>Submit</span>
                </button>
                </div>
            </form>
            </div>
        );
    }
}



const mapStateToProps = state => {

    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        email: state.auth.currentUser.email,
        isFormCreated: state.protectedData.isFormCreated,
        userForm: state.protectedData.userForm|| null,
       
    };
};

ContactForm = connect(
    mapStateToProps
)(ContactForm);

export default reduxForm({
    form: 'contact',
   onSubmitFail: (errors, dispatch) => {
      //dispatch(focus('contact', Object.keys(errors)[0]))
   }
})(ContactForm);
