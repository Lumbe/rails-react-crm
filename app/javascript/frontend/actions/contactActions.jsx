import contactApi from '../api/contactApi';
import {createNotification} from "./notificationActions";
import {contactSchema, contactListSchema} from "../api/schema";
import {normalize} from 'normalizr'

export const LOAD_CONTACTS_SUCCESS = 'LOAD_CONTACTS_SUCCESS';
export const LOAD_CONTACTS_FAILURE = 'LOAD_CONTACTS_FAILURE';

//Create new contact
export const CREATE_CONTACT_SUCCESS = 'CREATE_CONTACT_SUCCESS';
export const CREATE_CONTACT_FAILURE = 'CREATE_CONTACT_FAILURE';

// Update contact
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';

//Load contact
export const LOAD_CONTACT_SUCCESS = 'LOAD_CONTACT_SUCCESS';
export const LOAD_CONTACT_FAILURE = 'LOAD_CONTACT_FAILURE';

//Delete contact
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';


// Actions
//Contact list
export function loadContactsSuccess(contacts, meta) {
  return {type: LOAD_CONTACTS_SUCCESS, ...normalize(contacts, contactListSchema), meta};
}

export function createContactSuccess(data) {
  return {type: CREATE_CONTACT_SUCCESS, ...normalize(data, contactSchema)}
}
export function createContactFailure() {
  return {type: CREATE_CONTACT_FAILURE}
}
export function loadContactSuccess(data) {
  return {type: LOAD_CONTACT_SUCCESS, ...normalize(data, contactSchema)};
}
export function loadContactFailure() {
  return {type: LOAD_CONTACT_FAILURE};
}
export function updateContactSuccess(data) {
  return {type: UPDATE_CONTACT_SUCCESS, ...normalize(data, contactSchema)}
}
export function updateContactFailure(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'error',
      message: message
    }));
  }
}
export function destroyContactSuccess(id) {
  return {type: DELETE_CONTACT_SUCCESS, id}
}

export function destroyContactFailure(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'error',
      message: message
    }));
  }
}

export function loadContacts(params = null) {
  return function(dispatch) {
    return contactApi.getAll(params).then(
      response => {
        dispatch(loadContactsSuccess(response.data.contacts, response.data.meta));
        },
      () => dispatch({type: LOAD_CONTACTS_FAILURE})
    )
  }
}

export function loadContact(contact_id) {
  return function(dispatch) {
    return contactApi.getOne(contact_id).then(
      response => {
        dispatch(loadContactSuccess(response.data.contact));
      },
      () => dispatch(loadContactFailure())
    )
  }
}

export function createContact(contact) {
  return function(dispatch) {
    return contactApi.create(contact).then(
      response => {
        dispatch(createContactSuccess(response.data.contact));
        return response;
      }
    )
  };
}

export function updateContact(contact) {
  return function(dispatch) {
    return contactApi.update(contact).then(
      response => {
        console.log('updateContact', response.data.contact);
        dispatch(updateContactSuccess(response.data.contact));
        return response;
      },
      error => {
        dispatch(updateContactFailure('Не удалось изменить контакт'));
        return Promise.reject(error);
      }
    )
  };
}

export function destroyContact(contact) {
  return function(dispatch) {
    return contactApi.destroy(contact).then(
      () => {
        dispatch(destroyContactSuccess(contact.id));
        dispatch(createNotification({
          type: 'info',
          message: `Контакт ${contact.name} был удален`
        }));
      },
      error => {
        dispatch(destroyContactFailure(`Не удалось удалить контакт ${contact.name}`));
        return Promise.reject(error);
      }
    )
  };
}
