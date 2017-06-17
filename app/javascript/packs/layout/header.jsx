import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: 'CRM'}
  }

  render() {
  return <div className="header">Header for {this.state.app_name}!</div>
  }
}

export default Header