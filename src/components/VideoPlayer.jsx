
export default function VideoBG({ link }) {
  return (
    <video autoPlay muted loop playsInline className="bg">
      <source src={link} type="video/mp4" />
    </video>
  );
}
