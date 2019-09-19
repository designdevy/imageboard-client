import React from "react";
import { Link } from "react-router-dom";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

import "./List.css";

const LikeButtons = ({
  favorites,
  image,
  onClickLike,
  onClickDislike,
  user
}) => {
  if (image.users) {
    if (!user) {
      return (
        <div className="likes-displayed">
          <p className="heart">&hearts;</p> {image.users.length}
        </div>
      );
    } else if (favorites && favorites.length > 0) {
      const thisImage = favorites.find(element => image.id === element.id);
      if (thisImage) {
        return (
          <button
            className="like-button"
            value={image.id}
            onClick={onClickDislike}
          >
            Unlike | {image.users.length}
          </button>
        );
      }
    }
    return (
      <button className="like-button" value={image.id} onClick={onClickLike}>
        &hearts; Like | {image.users.length}
      </button>
    );
  } else {
    return (
      <button className="like-button" value={image.id} onClick={onClickLike}>
        &hearts; Like | 0
      </button>
    );
  }
};

export default function List({
  user,
  images,
  onClickLike,
  onClickDislike,
  favorites
}) {
  return (
    <div>
      {!user ? (
        <LoginFormContainer />
      ) : (
        <div>
          <Link to="/favorites">
            <button className="input-button">My favorite cities</button>
          </Link>
          <CreateFormContainer />
        </div>
      )}
      <div className="gallery-image">
        {images.map(image => (
          <div className="img-box" key={image.id}>
            <img className="city-photo" src={image.url} alt={image.title} />
            <div className="transparent-box">
              <div className="caption">
                <p>{image.title}</p>
                <LikeButtons
                  favorites={favorites}
                  image={image}
                  onClickLike={onClickLike}
                  onClickDislike={onClickDislike}
                  user={user}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
