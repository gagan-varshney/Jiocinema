import React from 'react'
import style from './featuredshows.module.css'

function featuredshows(props) {
  return (
    <div>
      <div className={style.featuredshows}>
            <img src={props.movie.imageUrl} alt="poster" />
            <div className={style.movieTitle}>
              {props.movie.name}
            </div>
        </div>
    </div>
  )
}

export default featuredshows
