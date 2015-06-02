'use strict';

import React from 'react';
import Video from './Video';

export default React.createClass({
  propTypes: {
    videos: React.PropTypes.array.isRequired
  },

  render() {
    let nodes = this.props.videos.map(item => {
      return <Video key={item.id} video={item} />;
    });

    return (
      <div className="playlist-videos">
        {nodes}
      </div>
    );
  }
});