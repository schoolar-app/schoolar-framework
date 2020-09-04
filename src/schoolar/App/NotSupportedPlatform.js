import React from 'react'

const styles = {
  parent: {
    width: '100vw'
  },
  h2: {
    textAlign: 'center',
    margin: '10px auto'
  },
  p: {
    textAlign: 'center',
    margin: '10px auto',
    color: 'grey'
  }
}
function NotSupportedPlatform() {
  return (
    <div style={styles.parent}>
      <h2 style={styles.h2}>Browser not supported</h2>
      <p style={styles.p}>Please run the app on your Schoolar App</p>
    </div>
  )
}

export default NotSupportedPlatform
