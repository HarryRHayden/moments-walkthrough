import React from 'react'
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css"
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={styles.NotFoundPage}>
        <Asset 
            src={NoResults}
            message="Page not found"
        />
    </div>
  )
}

export default NotFound