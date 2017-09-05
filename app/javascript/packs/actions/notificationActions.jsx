export const CREATE_NOTIFICATION_SUCCESS = 'CREATE_NOTIFICATION_SUCCESS';
export const DESTROY_NOTIFICATION_SUCCESS = 'DESTROY_NOTIFICATION_SUCCESS';

export function createNotificationSuccess(notification) {
    return {type: CREATE_NOTIFICATION_SUCCESS, notification}
}

export function destroyNotificationSuccess(index) {
    return {type: DESTROY_NOTIFICATION_SUCCESS, index}
}

export function createNotification(notification) {
    return function(dispatch) {
        return dispatch(createNotificationSuccess(notification))
    }
}

export function destroyNotification(index) {
    return function(dispatch) {
        return dispatch(createNotificationSuccess(index))
    }
}
