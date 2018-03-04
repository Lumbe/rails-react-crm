import {
  LOAD_CONTACTS_SUCCESS,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS
} from '../actions/contactActions';
import initialState from './initialState';
import {denormalize} from 'normalizr'
import {contactSchema, contactListSchema} from "../api/schema";
import {cloneDeep} from 'lodash'


export function contacts(state = initialState.contacts, action) {
  let newState = null;
  switch(action.type) {
    case LOAD_CONTACTS_SUCCESS:
      newState = cloneDeep(state);
      newState.data = action.result;
      newState.meta = action.meta;
      return newState;
    case CREATE_CONTACT_SUCCESS:
      newState = cloneDeep(state);
      newState.data = [action.result, ...newState.data];
      return newState;
    case DELETE_CONTACT_SUCCESS:
      newState = cloneDeep(state);
      newState.data = newState.data.filter((id) => {return id !== action.id});
      return newState;
    default:
      return state;
  }
}

export function getContacts(state) {
  let contacts = denormalize(state.contacts.data || [], contactListSchema, state.entities);
  const meta = state.contacts.meta;
  return {
    contacts,
    meta
  }
}

export function getContact(state, id) {
  let contact = denormalize(id, contactSchema, state.entities);
  return contact
}