import React from 'react'
import {Alert, Fade} from 'react-bootstrap'

class NotificationItem extends React.Component {

    render() {
        let {type, message, ...rest} = this.props;
        return <Alert {...rest} bsStyle={type === 'error' ? 'danger' : type}>
                <h4>{type}</h4>
                <p>{message}</p>
        </Alert>
    }
}

export default NotificationItem