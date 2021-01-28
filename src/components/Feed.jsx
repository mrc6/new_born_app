import React, { useState } from 'react'
import ReactPlayer from "react-player";
import Content from '../container/Content'

const showFeed = (array, counter) => {
  const start = array.length - counter;
  const stop = array.length;

  if (counter > array.length) {
    return (
      array.slice(0).reverse().map((e) =>
        <div className="post" key={e.title}>
          <h4 className="title">{`${e.date} - ${e.title}`}</h4>
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
                width="330px"
              />
            }
          <p>{e.description}</p>
        </div>
      )
    )
  }
  return (
    array.slice(start, stop).reverse().map((e) =>
      <div className="post" key={e.title}>
        <h4 className="title">{`${e.date} - ${e.title}`}</h4>
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
              width="330px"
            />
          }
        <p>{e.description}</p>
      </div>
    )
  )
  
};


const Feed = () => {
  const pages = 10;
  const [count, setCount] = useState(pages);

  return (
    <div className="feed">
      {
        showFeed(Content, count)
      }
      {(count < Content.length) &&
        <div className="button" onClick={() => setCount(() => count + pages)}>Mostrar Mais</div>
      }
    </div>
  )
}

export default Feed
