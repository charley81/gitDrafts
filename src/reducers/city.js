export default function city(state = "atlanta", action) {
  switch (action.type) {
    case "CHANGE_CITY":
      return action.payload;
    default:
      return state;
  }
}
