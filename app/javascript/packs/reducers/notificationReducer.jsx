import {CREATE_NOTIFICATION_SUCCESS, DESTROY_NOTIFICATION_SUCCESS} from "../actions/notificationActions";
import initialState from './initialState';

export function notifications(state = initialState.notifications, action) {
    switch(action.type) {
        case CREATE_NOTIFICATION_SUCCESS:
            return [...state, action.notification];
        case DESTROY_NOTIFICATION_SUCCESS:
            let notifications = [...state];
            return notifications.filter((item) => {return action.index !== notifications.indexOf(item)});
        default:
            return state;
    }
}