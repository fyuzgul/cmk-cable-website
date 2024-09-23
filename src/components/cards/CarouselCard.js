import { NavLink } from "react-router-dom";
import MediumTitle from "../titles/MediumTitle";
function CarouselCard(props) {
  return (
    <>
      <NavLink to={props.url} className="card">
        <img src={props.src} alt="cardImg" className="overlay-img" />
        <MediumTitle>{props.text}</MediumTitle>
      </NavLink>
    </>
  );
}

export default CarouselCard;
