import React, { Component } from 'react'
import styles from '../styles/styles.module.css'
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
        "For full functionality, please disable 'forceIgnorePlatform' or use at your own risk"
      )
  }

  render() {
    const { children, forceIgnorePlatform, showScrollbar } = this.props
    let _classes = `${styles.main}`

    if (!showScrollbar) {
      _classes += ` ${styles.hideScrollbar}`
    }

    return (
      <div className={_classes}>
        {this.state.platformIsValid ||
        window.Schoolar !== undefined ||
        forceIgnorePlatform ? (
          <div>{children}</div>
        ) : (
          <NotSupportedPlatform />
        )}
      </div>
    )
  }
}

export default SchoolarApp
