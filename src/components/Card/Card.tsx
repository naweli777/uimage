import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Card.css"
interface CardProps {
  id?: number;
  name: string;
  bio: string;
  img: string;
  username:string,
  total_likes:number,
  total_photos:number

}
const Card = ({ name, bio, img ,username,total_likes,total_photos}: CardProps) => {
  return (
    <div className="container">
      
        <LazyLoadImage className="image" src={img} alt="user" effect="blur"/>
      <div className="name">{name}</div>
      <div className="username">@{username}</div>

      <div className="name_bio">{bio}</div>

      <div className="card__overlay">
        <div className="overlay__text">
          <h3>Total Likes: {total_likes}</h3>
          <h3>Total Photos: {total_photos}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
