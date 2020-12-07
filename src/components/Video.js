import React from 'react';
import PropTypes from 'prop-types'
import { has } from 'lodash'

const Video = ({ item }) => {
  return (
    <div>
      <p style={{ margin: '2px' }}>
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.name}
        </a>
      </p>
      {has(item, 'embedYoutube') && (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube-nocookie.com/embed/jTxfl3nJ3jA?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  )
}

Video.propTypes = {
  item: PropTypes.object,
}

export default Video;
