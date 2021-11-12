import { useState } from "react";
import { Link } from "react-router-dom";
import getYouTubeID from "get-youtube-id";

export default function ListItem({ index, key, data }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoId = getYouTubeID(data.Trailer);
  const ItemId = getYouTubeID(data.Link);
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
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=true&mute=true&showinfo=0&controls=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
          <div className="itemInfo">
            <div className="icons">
              <Link to={"/video/" + ItemId}>
                <i className="fas fa-play icon"></i>
              </Link>
              <i className="fas fa-thumbs-up icon"></i>
              <i className="fas fa-thumbs-down icon"></i>
            </div>
            <div className="itemInfoTop">
              <span>{data.Ratings}%</span>
              <span className="limit">+{data.AgeLimit}</span>
              <span>{data.Year}</span>
            </div>
            <div className="desc">{data.Description}</div>
          </div>
        </>
      )}
    </div>
  );
}
