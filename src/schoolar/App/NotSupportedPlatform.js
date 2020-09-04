import React from 'react'
import styles from '../styles/styles.module.css'

const styles2 = {
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
    <div className={styles.main} style={styles2.parent}>
      <h2 style={styles2.h2}>Browser not supported</h2>
      <p style={styles2.p}>Please run the app on your Schoolar App</p>
    </div>
  )
}

export default NotSupportedPlatform
