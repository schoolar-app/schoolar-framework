import React, { Component } from 'react'
import '../styles/index.css'
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
    const { children, forceIgnorePlatform, showScrollbar } = this.props
    let classes = 'hide-scrollbar'

    if (showScrollbar) {
      classes = ''
    }

    return this.state.platformIsValid || forceIgnorePlatform ? (
      <div className={classes}>{children}</div>
    ) : (
      <NotSupportedPlatform />
    )
  }
}

export default SchoolarApp