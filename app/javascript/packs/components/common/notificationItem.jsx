import React from 'react'
import {Alert} from 'react-bootstrap'
import {capitalize} from 'lodash'

class NotificationItem extends React.Component {

    render() {
        let {type, message, ...rest} = this.props;
        return <Alert {...rest} bsStyle={type === 'error' ? 'danger' : type}>
                <h4>{capitalize(type)}</h4>
                <p>{message}</p>
        </Alert>

    }
}

export default NotificationItem