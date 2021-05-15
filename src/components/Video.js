import React from 'react';
import PropTypes from 'prop-types'
import { has } from 'lodash'

const Video = ({ item }) => {
  const fontWeight = has(item, 'new') ? 700 : 500;
  return (
    <div>
      <p style={{ margin: '2px', fontWeight: fontWeight }}>
        <a href={has(item, 'embedLink') ? item.embedLink : item.link} target="_blank" rel="noreferrer">
          {has(item, 'new') ? 'NEW: ' : ''}{item.name}
        </a>
      </p>
    </div>
  )
}

Video.propTypes = {
  item: PropTypes.object,
}

export default Video;
