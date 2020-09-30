import React, { Component } from 'react'
import NotSupportedPlatform from './NotSupportedPlatform'
import styled from '@emotion/styled'

const SchoolarContainer = styled.main`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`

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
    const { children, forceIgnorePlatform } = this.props

    return (
      <SchoolarContainer>
        {this.state.platformIsValid ||
        window.Schoolar !== undefined ||
        forceIgnorePlatform ? (
          <div>{children}</div>
        ) : (
          <NotSupportedPlatform />
        )}
      </SchoolarContainer>
    )
  }
}

export default SchoolarApp
