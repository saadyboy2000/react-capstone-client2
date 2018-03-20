import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerForm = form => dispatch => {
    return fetch(`${API_BASE_URL}/forms`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res =>{return res.json(); })
        .then(()=>{
            dispatch(formSuccess());
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const updateForm = (form,id) => dispatch => {
    console.log("update Action");
    return fetch(`${API_BASE_URL}/forms/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res =>{return res.json(); })
        .then(()=>{
            dispatch(formSuccess());
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const FORM_SUCCESS = 'FORM_SUCCESS';
export const formSuccess = () => ({
    type: FORM_SUCCESS
});

export const CHECKFORM_SUCCESS = 'CHECKFORM_SUCCESS';
export const checkFormSuccess = (data) => ({
    type: CHECKFORM_SUCCESS,
    data
});

export const checkForm = username =>dispatch =>{
    return fetch(`${API_BASE_URL}/forms/check/${username}`, {
        method:'GET',
        headers: {
            'content-type':'application/json'
        },

    })
     .then(res => normalizeResponseErrors(res))
        .then(res =>{return res.json(); })
        .then((res)=>{
            if (res){
                dispatch(checkFormSuccess(res));
            }
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};