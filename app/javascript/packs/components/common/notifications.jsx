import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notificationActions from '../../actions/notificationActions'
import NotificationItem from './notificationItem'


class Notifications extends React.Component {
    handleDismiss(index) {
        this.props.actions.destroyNotification(index);
    }

    render() {
        return (
            <div className="notifications">
                {this.props.notifications.map((notification, index) => {
                    <NotificationItem key={index} {...notification} onDismiss={() => this.handleDismiss(index)}/>
                })}
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
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