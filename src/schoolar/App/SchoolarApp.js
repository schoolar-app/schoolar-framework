import React, { Component } from 'react'
import styles from '../styles/styles.module.css'
import NotSupportedPlatform from './NotSupportedPlatform'
import SchoolarRoutes from './SchoolarRoutes'

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
    let _classes = styles.hideScrollbar

    if (showScrollbar) {
      _classes = ''
    }

    return (
      <SchoolarRoutes>
        {this.state.platformIsValid ||
        window.Schoolar !== undefined ||
        forceIgnorePlatform ? (
          <div className={_classes}>{children}</div>
        ) : (
          <NotSupportedPlatform />
        )}
      </SchoolarRoutes>
    )
  }
}

export default SchoolarApp
