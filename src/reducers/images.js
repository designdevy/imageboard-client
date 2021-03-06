import { NEW_IMAGE, ADD_LIKE, DELETE_LIKE, ALL_IMAGES } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES:
      return action.payload;
    case NEW_IMAGE:
      return [action.payload, ...state];
    case ADD_LIKE:
      return state.map(image => {
        if (image.id === parseInt(action.id)) {
          image.users = [...image.users, action.payload];
        }
        return image;
      });
    case DELETE_LIKE:
      return state.map(image => {
        if (image.id === parseInt(action.payload)) {
          image.users.pop()
          return image;
        }
        return image;
      });
    default:
      return state;
  }
}
