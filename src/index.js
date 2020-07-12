import React from 'react'
import styles from './styles.module.css'

// @flow

export * from './components'

export * from './schoolar'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
