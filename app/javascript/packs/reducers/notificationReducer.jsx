import {CREATE_NOTIFICATION_SUCCESS, DESTROY_NOTIFICATION_SUCCESS} from "../actions/notificationActions";

import initialState from './initialState';

export default function notifications(state = initialState.notification, action) {
    switch(action.type) {
        case CREATE_NOTIFICATION_SUCCESS:
            return action.notification;
        case DESTROY_NOTIFICATION_SUCCESS:
            return action.notification;
        default:
            return state;
    }
}