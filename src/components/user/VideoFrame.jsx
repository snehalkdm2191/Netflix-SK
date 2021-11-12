import { useParams } from "react-router-dom";

export default function VideoFrame() {
  const { id } = useParams();
  return (
    <iframe
      className="iframe-video"
      src={`https://www.youtube.com/embed/${id}?autoplay=true`}
      frameBorder="0"
      allowFullScreen
      title="video"
    />
  );
}
