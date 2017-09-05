import React from 'react'
import {Alert} from 'react-bootstrap'

class NotificationItem extends React.Component {

    handleAlertDismiss() {
        console.log('handle dismiss');
    }

    render() {
        let {type, message, ...rest} = this.props;
        return <Alert {...rest} bsStyle={type === 'error' ? 'danger' : type} onDismiss={this.handleAlertDismiss.bind(this)}>
                <h4>{type}</h4>
                <p>{message}</p>
        </Alert>
    }
}

export default NotificationItem