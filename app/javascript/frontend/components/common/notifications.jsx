import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notificationActions from '../../actions/notificationActions'
import NotificationItem from './notificationItem'
import './notifications.css'

class Notifications extends React.Component {
    handleDismiss(index) {
        this.props.actions.destroyNotification(index);
    }

    componentWillReceiveProps(props) {
        if (props.notifications.length > 0) {
            setTimeout(() => {this.handleDismiss(0)}, 5000);
        }
    }

    render() {
        return (
          <div className="notifications-container">
                {this.props.notifications.map((notification, index) => {
                    return <NotificationItem key={index} {...notification} onDismiss={() => this.handleDismiss(index)}/>
                })}
          </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        notifications: state.notifications
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(notificationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);