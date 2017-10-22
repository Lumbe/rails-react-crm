import React from 'react'
import {Alert} from 'react-bootstrap'
import {capitalize, isArray, isString} from 'lodash'

class NotificationItem extends React.Component {

    render() {
        let {type, message, ...rest} = this.props;
        if (isArray(message)) {
          message = <ul>
            {message.map((m, index) => {
            return <li key={index}>{m}</li>
          })}
          </ul>
        } else if (isString(message)) {
          message = <p>{message}</p>
        }
        return <Alert {...rest} bsStyle={type === 'error' ? 'danger' : type}>
          <h4>{capitalize(type)}</h4>
          {message}
        </Alert>

    }
}

export default NotificationItem