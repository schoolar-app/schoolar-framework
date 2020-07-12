import React, { Component } from 'react'
import NotSupportedPlatform from './NotSupportedPlatform'

const SCHOOLAR_USER_AGENT = 'SchoolarApplication/'

function checkPlatform() {
  var isSchoolarApp = navigator.userAgent.includes(SCHOOLAR_USER_AGENT)
  return isSchoolarApp
}

class SchoolarApp extends Component {
  state = {
    platformIsValid: checkPlatform()
  }

  componentDidMount() {
    if (this.props.forceIgnorePlatform)
      console.error(
        "For functionality sake, please disable 'forceIgnorePlatform' or use at your own risk"
      )
  }

  render() {
    return this.state.platformIsValid || this.props.forceIgnorePlatform ? (
      <div>{this.props.children}</div>
    ) : (
      <NotSupportedPlatform />
    )
  }
}

export default SchoolarApp
