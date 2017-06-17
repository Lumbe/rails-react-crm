import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: 'CRM'}
  }

  render() {
  return <div className="footer">Footer for {this.state.app_name}!</div>
  }
}

export default Footer