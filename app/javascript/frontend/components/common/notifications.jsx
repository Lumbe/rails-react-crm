import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notificationActions from '../../actions/notificationActions'
import NotificationItem from './notificationItem'
import './notifications.css'
import {Grid, Row, Col} from 'react-bootstrap'

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
            <Grid fluid><Row>
              <Col md={3} mdPush={9}  xs={12}>
                {this.props.notifications.map((notification, index) => {
                    return <NotificationItem key={index} {...notification} onDismiss={() => this.handleDismiss(index)}/>
                })}
              </Col>
            </Row></Grid>
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