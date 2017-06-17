import React from 'react'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: 'CRM'}
  }

  render() {
  return <div className="main">Main for {this.state.app_name}!</div>
  }
}

export default Main