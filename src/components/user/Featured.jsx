import { Link } from "react-router-dom";
import getYouTubeID from "get-youtube-id";

export default function Featured({ data }) {
  const videoId = getYouTubeID(data.Trailer);
  const ItemId = getYouTubeID(data.Link);
  return (
    <div className="featured">
      {/* Don't use iframes, I gave the link to the React Youtube plugin to extract that functioanlity in a better way */}
      <iframe
        className="iframe-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&&loop=1&mute=1&showinfo=0&controls=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media; loop;"
        allowFullScreen
        title="video"
      />
      <div className="info">
        <h1>{data.Title}</h1>
        <span className="desc">{data.Description}</span>
        <div className="buttons">
          <Link className="play" to={"/video/" + ItemId}>
            <i className="far fa-play-circle"></i>
            <span>Play</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
