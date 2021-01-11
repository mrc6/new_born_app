import React from 'react'
import ReactPlayer from "react-player";
import Content from '../container/Content'

const Feed = () => {
  return (
    <div className="feed">
      {Content.reverse().map((e) =>
          <div className="post" key={e.title}>
            <h4 className="title">{e.title}</h4>
              {
                (!e.video) &&
                <img
                  className="feed_image"
                  src={process.env.PUBLIC_URL + e.image}
                  alt={e.img_alt}
                />
              }
              {
                (e.video) &&
                <ReactPlayer
                  url={e.video}
                  width="360px"
                />
              }
            <p>{e.description}</p>
          </div>
        )
      }
    </div>
  )
}

export default Feed
