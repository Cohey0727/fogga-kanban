import { WHO_OPEN } from "../constants";

export default (whoOpen = true, action) => {
  const { type, payload } = action;

  switch (type) {
    case WHO_OPEN:
      return whoOpen ? null : payload;

    default:
      return !whoOpen;
  }
};
