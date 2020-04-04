import React from 'react';
import MediaCard from './MediaCard';

import '../stylesheets/MediaList.css';

class MediaList extends React.Component {
  render() {
    const text1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since';
    return (
      <ul className="list-container">
        <li className="list">
          <MediaCard title="Card1" subtitle="subtitle1" text={text1} />
        </li>
        <li className="list">
          <MediaCard title="Card2" subtitle="subtitle2" text={text1} />
        </li>
        <li className="list">
          <MediaCard title="Card3" subtitle="subtitle3" text={text1} />
        </li>
      </ul>
    );
  }
}
export default MediaList;
