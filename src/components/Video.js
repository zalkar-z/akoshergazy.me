import React from 'react';
import PropTypes from 'prop-types'
import { has } from 'lodash'

class Video extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <p style={{ margin: '2px' }}>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        </p>
        {has(item, 'embedYoutube') && (
          <p>emdeb youtube here</p>
        )}
      </div>
    )
  }
}

Video.propTypes = {
  item: PropTypes.object,
}

export default Video;
