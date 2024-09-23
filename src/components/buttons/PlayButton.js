import PlayButtonImg from "../../assets/home-page-assets/play-button.png";
export default function PlayButton({ onClick }) {
  return (
    <button className="play-button" onClick={onClick}>
      <img src={PlayButtonImg} alt="Play Button" />
    </button>
  );
}
