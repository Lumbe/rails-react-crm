import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notificationActions from '../../actions/notificationActions'
import NotificationItem from './notificationItem'


class Notifications extends React.Component {
    handleDismiss(index) {
        this.props.actions.destroyNotification(index);
    }

    componentWillReceiveProps(props) {
        if (props.notifications.length > 0) {
            setTimeout(() => {this.handleDismiss(0)}, 2000);
            // this.handleDismiss(0);
            // console.log('notifications overload')
        }
    }

    render() {
        return (
            <div className="notifications">
                {this.props.notifications.map((notification, index) => {
                    return <NotificationItem key={index} {...notification} onDismiss={() => this.handleDismiss(index)}/>
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