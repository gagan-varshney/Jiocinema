import React, { useState } from 'react'
import styles from './Tag.module.css';

const Tag = () => {

  let [tag, setTag] = useState([
    'for you', 'Action', 'Adventure', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi','Thriller', 'Anime', 'Reality', 'Sports', 'News', 'Travel', 'More',
  ])

  return (
    <div className={styles.tags}>
      {tag.map((item, index) => (
        <button className={styles.tag}>{item}</button>
      ))}
    </div>
  )
}

export default Tag;
