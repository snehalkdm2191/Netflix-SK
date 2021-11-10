import { useState } from "react";
import VideoPlayer from "../VideoPlayer";

export default function ListItem({ index, key, data }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("index",index);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={data.File} alt="" />
      {isHovered && (
        <>
          <VideoPlayer link={data.Trailer} />
          <div className="itemInfo">
            <div className="icons">
              <i className="fas fa-play icon"></i>
              <i className="fas fa-thumbs-up icon"></i>
              <i className="fas fa-thumbs-down icon"></i>
            </div>
            <div className="itemInfoTop">
              <span>{data.Ratings}%</span>
              <span className="limit">+{data.AgeLimit}</span>
              <span>{data.Year}</span>
            </div>
            <div className="desc">
             {data.Description}
            </div>
            <div className="genre">{data.Category}</div>
          </div>
        </>
      )}
    </div>
  );
}
